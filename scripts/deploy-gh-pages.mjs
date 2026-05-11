import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const publishDir = join(root, ".gh-pages-tmp");

function findGit() {
  const candidates = ["git"];
  const localAppData = process.env.LOCALAPPDATA;

  if (localAppData) {
    const desktopDir = join(localAppData, "GitHubDesktop");
    if (existsSync(desktopDir)) {
      const versions = readdirSync(desktopDir)
        .filter((name) => name.startsWith("app-"))
        .sort()
        .reverse();

      for (const version of versions) {
        candidates.push(join(desktopDir, version, "resources", "app", "git", "cmd", "git.exe"));
      }
    }
  }

  for (const candidate of candidates) {
    const result = spawnSync(candidate, ["--version"], { encoding: "utf8" });
    if (result.status === 0) {
      return candidate;
    }
  }

  throw new Error("Git was not found. Install Git or open this project through GitHub Desktop.");
}

const git = findGit();

function run(args, options = {}) {
  const result = spawnSync(git, args, {
    cwd: options.cwd || root,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    const output = [result.stdout, result.stderr].filter(Boolean).join("\n");
    throw new Error(`git ${args.join(" ")} failed\n${output}`);
  }

  return result.stdout.trim();
}

function maybeRun(args, options = {}) {
  const result = spawnSync(git, args, {
    cwd: options.cwd || root,
    encoding: "utf8",
    stdio: "pipe",
  });

  return result.status === 0 ? result.stdout.trim() : "";
}

if (!existsSync(dist)) {
  throw new Error("dist does not exist. Run npm run build before deploying.");
}

const remote = run(["config", "--get", "remote.origin.url"]);
const userName = maybeRun(["config", "--get", "user.name"]) || "Delicarte Deploy";
const userEmail = maybeRun(["config", "--get", "user.email"]) || "deploy@users.noreply.github.com";

rmSync(publishDir, { recursive: true, force: true });
mkdirSync(publishDir, { recursive: true });
cpSync(dist, publishDir, { recursive: true });
writeFileSync(join(publishDir, ".nojekyll"), "");

run(["init"], { cwd: publishDir });
run(["checkout", "-B", "gh-pages"], { cwd: publishDir });
run(["config", "user.name", userName], { cwd: publishDir });
run(["config", "user.email", userEmail], { cwd: publishDir });
run(["remote", "add", "origin", remote], { cwd: publishDir });
run(["add", "-A"], { cwd: publishDir });
run(["commit", "-m", "Deploy to GitHub Pages"], { cwd: publishDir });
run(["push", "origin", "gh-pages", "--force"], { cwd: publishDir });

rmSync(publishDir, { recursive: true, force: true });

console.log("Published dist to the gh-pages branch.");
