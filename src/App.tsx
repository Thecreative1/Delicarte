import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    delicarteAnalyticsLoaded?: boolean;
  }
}
import creamDetail from "./assets/cream-detail.webp";
import delicartFacialTreatment from "./assets/delicarte-facial-treatment.jpg";
import delicartReception from "./assets/delicarte-reception.jpg";
import delicartTreatmentRoom from "./assets/delicarte-treatment-room.jpg";
import drainageAbdomen from "./assets/drainage-abdomen.jpg";
import drainageAbdomen720 from "./assets/drainage-abdomen-720.webp";
import drainageAbdomen1080 from "./assets/drainage-abdomen-1080.webp";
import drainageLeg from "./assets/drainage-leg.jpg";
import drainageLeg720 from "./assets/drainage-leg-720.webp";
import drainageLeg1080 from "./assets/drainage-leg-1080.webp";
import greenFeather from "./assets/green-feather.jpg";
import raquelBrandingBio from "./assets/raquel-branding-bio.jpg";
import raquelBrandingBio640 from "./assets/raquel-branding-bio-640.webp";
import raquelBrandingBio960 from "./assets/raquel-branding-bio-960.webp";
import raquelPdfAvatar96 from "./assets/raquel-pdf-avatar-96.webp";
import raquelPress from "./assets/raquel-press.jpg";

const whatsappHref =
  "https://wa.me/351917968714?text=Ol%C3%A1%20Raquel%2C%20gostaria%20de%20marcar%20uma%20sess%C3%A3o%20na%20Delicarte.";
const instagramHref = "https://www.instagram.com/delicarte_raqueloliveira";
const tiktokHref = "https://www.tiktok.com/@delicarte_raqueloliveira";
const gaMeasurementId = "G-EMD39MEPTD";
const cookieConsentStorageKey = "delicarte_cookie_consent";
const heroTreatmentRoom = "/delicarte-treatment-room.jpg";
const heroTreatmentRoomWebp = "/delicarte-treatment-room.webp";
const drainagePagePath = "/tratamentos/drenagem-linfatica-guimaraes/";
const drainagePageCanonical = "https://delicarte.pt/tratamentos/drenagem-linfatica-guimaraes/";
const postoperativePagePath = "/tratamentos/drenagem-pos-operatorio-guimaraes/";
const postoperativePageCanonical = "https://delicarte.pt/tratamentos/drenagem-pos-operatorio-guimaraes/";

const homeMeta = {
  title: "Delicarte | Drenagem Linfática em Guimarães | Raquel Oliveira",
  description:
    "Drenagem linfática terapêutica em Guimarães com Raquel Oliveira. Pós-operatório, lipedema, gravidez e cuidado corporal personalizado.",
  canonical: "https://delicarte.pt/",
};

const drainagePageMeta = {
  title: "Drenagem Linfática em Guimarães | Delicarte",
  description:
    "Conheça a drenagem linfática na Delicarte, em Guimarães: para quem pode ser indicada, como decorre a sessão, cuidados, precauções, perguntas frequentes e marcação.",
  canonical: drainagePageCanonical,
};

const postoperativePageMeta = {
  title: "Drenagem Pós-Operatório em Guimarães | Delicarte",
  description:
    "Drenagem no pós-operatório na Delicarte, em Guimarães: acompanhamento manual, fases de recuperação, cuidados, precauções, perguntas frequentes, preços e marcação.",
  canonical: postoperativePageCanonical,
};

type ServiceGroup = {
  title: string;
  label: string;
  description: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  items: {
    name: string;
    price: string;
    time: string;
  }[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Drenagem Linfática",
    label: "Ver tipos e preços",
    description:
      "Acompanhamento manual para lipedema, gravidez/pós-parto, retenção, conforto corporal e recuperação.",
    secondaryCta: {
      label: "Saber mais sobre Drenagem Linfática",
      href: drainagePagePath,
    },
    items: [
      { name: "Drenagem Linfática Manual", price: "65€", time: "60 min" },
      { name: "Drenagem Linfática Lipedema", price: "35€", time: "45 min" },
      { name: "Drenagem Linfática Grávida Pós-Parto", price: "55€", time: "60 min" },
      { name: "Drenagem Facial", price: "35€", time: "45 min" },
      { name: "Drenagem Visceral", price: "35€", time: "45 min" },
      { name: "Drenagem Linfática Cervical", price: "50€", time: "60 min" },
      { name: "Drenagem zona membros inferiores ou abdómen", price: "30€", time: "45 min" },
    ],
  },
  {
    title: "Drenagem no Pós-Operatório",
    label: "Ver cirurgias e valores",
    description:
      "Quando existe cirurgia ou procedimento, o tratamento é apresentado como drenagem nesse pós-operatório.",
    secondaryCta: {
      label: "Saber mais sobre Drenagem no Pós-Operatório",
      href: postoperativePagePath,
    },
    items: [
      { name: "Consulta avaliação pré/pós-operatório", price: "25€", time: "30 min" },
      { name: "Drenagem Linfática Pós-Operatório", price: "70€", time: "60 min" },
      { name: "Mini abdominoplastia ou cesariana", price: "40€", time: "45 min" },
      { name: "Abdominoplastia clássica", price: "50€", time: "60 min" },
      { name: "Lipoabdominoplastia", price: "70€", time: "90 min" },
      { name: "Abdominoplastia circunferencial + lipo sacro", price: "70€", time: "90 min" },
      { name: "Drenagem de cirurgia oncológica", price: "70€", time: "90 min" },
      { name: "Pack pós-operatório", price: "500€", time: "10 sessões" },
    ],
  },
  {
    title: "Outros cuidados",
    label: "Ver valores",
    description:
      "Tratamentos complementares disponíveis por marcação direta com a Raquel.",
    items: [
      { name: "Limpeza de Pele", price: "55€", time: "60 min" },
      { name: "Massagem Relaxamento", price: "50€", time: "60 min" },
      { name: "Massagem Anti Stress", price: "45€", time: "60 min" },
      { name: "Manta de Sudação", price: "20€", time: "45 min" },
      { name: "Pack Harmonia", price: "300€", time: "6 sessões" },
      { name: "Tapping pós-parto", price: "35€", time: "40 min" },
      { name: "Dermaplaning", price: "40€", time: "60 min" },
    ],
  },
];

const experience = [
  {
    title: "Cuidado",
    text: "Cada sessão começa com escuta: do que sente, do que precisa e do que o seu corpo permite naquele dia.",
  },
  {
    title: "Calma",
    text: "O ambiente é preparado para baixar o ruído, criar conforto e deixar que o tempo abrande.",
  },
  {
    title: "Personalização",
    text: "A pressão, o foco e o ritmo são ajustados com intenção, sem fórmulas rígidas.",
  },
];

const galleryImages = [
  {
    src: drainageAbdomen,
    width: 1350,
    height: 1800,
    alt: "Drenagem linfática realizada em marquesa",
  },
  {
    src: drainageLeg,
    width: 1350,
    height: 1800,
    alt: "Drenagem linfática nos membros inferiores",
  },
  {
    src: delicartTreatmentRoom,
    width: 712,
    height: 885,
    alt: "Sala Delicarte preparada para uma sessão de cuidado corporal",
  },
  {
    src: delicartReception,
    width: 715,
    height: 894,
    alt: "Receção luminosa do espaço Delicarte",
  },
  {
    src: delicartFacialTreatment,
    width: 716,
    height: 890,
    alt: "Tratamento realizado no espaço Delicarte",
  },
  {
    src: creamDetail,
    width: 512,
    height: 512,
    alt: "Detalhe de creme usado nos cuidados Delicarte",
  },
];

const drainageIndications = [
  {
    title: "Lipedema e sensação de peso",
    text: "Pode apoiar o conforto corporal quando existe sensação de pernas pesadas, retenção ou edema, sempre com adaptação ao caso individual.",
  },
  {
    title: "Gravidez e pós-parto",
    text: "Quando é adequado, o toque é ajustado à fase da gravidez ou recuperação, respeitando limites, conforto e orientação clínica quando necessária.",
  },
  {
    title: "Retenção e bem-estar corporal",
    text: "É procurada por quem sente inchaço, tensão ou desconforto e quer um acompanhamento manual delicado, sem pressão intensa.",
  },
  {
    title: "Recuperação e cuidado contínuo",
    text: "Pode integrar uma rotina de cuidado corporal, especialmente quando o objetivo é acompanhar o corpo com regularidade e escuta.",
  },
];

const drainageSessionSteps = [
  {
    title: "Escuta inicial",
    text: "A sessão começa com uma breve conversa sobre sintomas, objetivo, contexto clínico relevante e zonas que pedem mais atenção.",
  },
  {
    title: "Toque manual suave",
    text: "A drenagem é feita com movimentos precisos, lentos e ritmados, pensados para estimular o percurso linfático sem agressividade.",
  },
  {
    title: "Adaptação ao corpo",
    text: "A pressão, a duração e o foco da sessão são ajustados à sensibilidade, à fase de recuperação e ao conforto de cada pessoa.",
  },
  {
    title: "Orientação final",
    text: "No fim, pode receber indicações simples sobre cuidados, frequência sugerida e quando é melhor pedir avaliação médica antes de continuar.",
  },
];

const drainagePrecautions = [
  "Febre, infeção ativa, vermelhidão, calor local ou mal-estar devem ser avaliados antes de marcar.",
  "Suspeita de trombose, dor súbita, falta de ar ou edema inesperado exigem avaliação médica urgente.",
  "Após cirurgia, a drenagem deve respeitar a fase de recuperação e a autorização ou orientação clínica recebida.",
  "Condições cardíacas, renais ou oncológicas pedem uma conversa prévia para perceber se o tratamento é adequado.",
];

const drainageFaqs = [
  {
    question: "A drenagem linfática dói?",
    answer:
      "Não deve ser uma massagem dolorosa. O trabalho é suave, ritmado e adaptado à sensibilidade de cada corpo.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do objetivo, da resposta do corpo e do contexto de cada pessoa. Na primeira sessão, percebemos em conjunto qual a frequência mais adequada.",
  },
  {
    question: "Posso fazer drenagem durante a gravidez?",
    answer:
      "Pode ser considerada em determinadas fases, desde que exista conforto e não haja contraindicações. Em caso de gravidez de risco ou dúvida clínica, deve existir orientação médica.",
  },
  {
    question: "É o mesmo que massagem relaxante?",
    answer:
      "Não. A drenagem linfática tem um objetivo e ritmo específicos, com movimentos leves e direcionados para apoiar a circulação linfática.",
  },
  {
    question: "Como marco a sessão?",
    answer:
      "A marcação é feita diretamente pelo WhatsApp, para confirmar disponibilidade, objetivo do tratamento e qualquer cuidado prévio importante.",
  },
  {
    question: "A drenagem linfática ajuda a emagrecer?",
    answer:
      "A drenagem linfática não é um tratamento de emagrecimento. O seu objetivo é apoiar o sistema linfático, reduzir retenção de líquidos e melhorar o conforto corporal. Qualquer sensação de leveza está relacionada com a diminuição do edema, não com perda de massa.",
  },
  {
    question: "Quantas sessões são necessárias para lipedema?",
    answer:
      "O lipedema é uma condição crónica que beneficia de acompanhamento regular e continuado. A frequência e o número de sessões são definidos em conjunto, caso a caso, tendo em conta o estadio, os sintomas e o conforto de cada pessoa.",
  },
  {
    question: "Qual a diferença entre drenagem manual e por aparelho?",
    answer:
      "A drenagem manual é feita com as mãos, com toque preciso e adaptado à anatomia e sensibilidade de cada pessoa. A drenagem por aparelho utiliza pressão mecânica, sem a mesma capacidade de ajuste individualizado. Na Delicarte, o trabalho é sempre manual.",
  },
];

const postoperativeIndications = [
  {
    title: "Recuperação com orientação clínica",
    text: "Pode fazer sentido depois de uma cirurgia ou procedimento, respeitando sempre a fase de recuperação e as indicações recebidas pela equipa médica.",
  },
  {
    title: "Edema, tensão e desconforto",
    text: "O trabalho manual é adaptado para apoiar o conforto corporal quando existe sensação de inchaço, peso ou tensão nos tecidos.",
  },
  {
    title: "Cirurgias abdominais e corporais",
    text: "Pode acompanhar processos como cesariana, abdominoplastia, lipoabdominoplastia ou outros procedimentos, sempre com cuidado individual.",
  },
  {
    title: "Acompanhamento por fases",
    text: "A frequência e o tipo de sessão são ajustados ao momento da recuperação, à sensibilidade e à evolução observada em cada marcação.",
  },
];

const postoperativeSessionSteps = [
  {
    title: "Contexto e segurança",
    text: "Começamos por perceber a cirurgia, a fase de recuperação, os cuidados médicos indicados e qualquer sintoma que exija atenção.",
  },
  {
    title: "Toque adaptado",
    text: "A drenagem é feita com movimentos suaves e precisos, sem pressão agressiva e sem forçar tecidos sensíveis.",
  },
  {
    title: "Respeito por cicatrizes e pensos",
    text: "Não mexemos em feridas, drenos, pontos ou pensos. O trabalho acompanha o corpo sem substituir cuidados médicos.",
  },
  {
    title: "Reavaliação contínua",
    text: "Em cada sessão, ajustamos zonas, ritmo e frequência ao conforto, à resposta do corpo e à fase da recuperação.",
  },
];

const postoperativePrecautions = [
  "Febre, infeção, vermelhidão intensa, calor local, sangramento ou dor súbita devem ser avaliados antes da sessão.",
  "Suspeita de trombose, falta de ar, dor no peito ou edema inesperado exigem avaliação médica urgente.",
  "Se existem drenos, pontos, feridas abertas ou pensos, respeitamos essas zonas e seguimos a orientação clínica recebida.",
  "A drenagem no pós-operatório não substitui consultas, medicação, compressão, pensos ou acompanhamento da equipa médica.",
];

const postoperativeFaqs = [
  {
    question: "Quando posso começar a drenagem depois da cirurgia?",
    answer:
      "Depende do tipo de cirurgia, da fase de recuperação e da orientação clínica. Antes de começar, percebemos em conjunto se é o momento certo e se existe algum cuidado especial.",
  },
  {
    question: "A drenagem no pós-operatório dói?",
    answer:
      "Não deve ser dolorosa. O toque é suave, cuidadoso e ajustado à sensibilidade de cada fase da recuperação.",
  },
  {
    question: "Trabalhamos sobre cicatrizes, pontos ou drenos?",
    answer:
      "Não forçamos zonas sensíveis nem mexemos em feridas, pontos, drenos ou pensos. O tratamento respeita sempre os limites de segurança.",
  },
  {
    question: "Que cirurgias podem ser acompanhadas?",
    answer:
      "Podem ser acompanhadas situações como cesariana, abdominoplastia, lipoabdominoplastia e outros procedimentos, desde que seja adequado ao caso e à fase de recuperação.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do procedimento, do edema, da resposta do corpo e do objetivo. Na primeira sessão, percebemos em conjunto uma frequência possível.",
  },
  {
    question: "Como faço a marcação?",
    answer:
      "A marcação é feita por WhatsApp, para confirmar disponibilidade, explicar o contexto da cirurgia e perceber se existe alguma indicação prévia importante.",
  },
  {
    question: "Quando posso começar a drenagem após abdominoplastia?",
    answer:
      "Depende do tipo de abdominoplastia, da fase de recuperação e das indicações da equipa médica. Em geral, o acompanhamento começa após autorização clínica, respeitando cicatrizes, drenos e o conforto individual. Na primeira sessão, avaliamos juntos o que é adequado ao seu momento.",
  },
  {
    question: "A drenagem pós-operatória ajuda a reduzir a fibrose?",
    answer:
      "O trabalho manual suave pode apoiar os tecidos numa fase em que existe tensão ou endurecimento. A abordagem é sempre adaptada à fase da recuperação e não substitui acompanhamento médico quando existem sinais de fibrose significativa.",
  },
  {
    question: "Posso fazer drenagem após lipoaspiração?",
    answer:
      "Pode ser adequada após lipoaspiração, respeitando sempre a fase de recuperação e as indicações clínicas recebidas. O toque é adaptado às zonas tratadas, à sensibilidade e ao estado dos tecidos em cada sessão.",
  },
];

type PageKind = "home" | "drainage" | "postoperative";
type CookieConsent = "accepted" | "declined";

function getPageKind(pathname: string): PageKind {
  const normalizedPath = pathname.replace(/\/+$/, "");

  if (normalizedPath.endsWith("/tratamentos/drenagem-linfatica-guimaraes")) {
    return "drainage";
  }

  if (normalizedPath.endsWith("/tratamentos/drenagem-pos-operatorio-guimaraes")) {
    return "postoperative";
  }

  return "home";
}

function usePageMeta(meta: typeof homeMeta) {
  useEffect(() => {
    document.title = meta.title;

    const updateMeta = (selector: string, attribute: "content" | "href", value: string) => {
      const element = document.head.querySelector(selector);
      element?.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', "content", meta.description);
    updateMeta('meta[property="og:title"]', "content", meta.title);
    updateMeta('meta[property="og:description"]', "content", meta.description);
    updateMeta('meta[property="og:url"]', "content", meta.canonical);
    updateMeta('meta[name="twitter:title"]', "content", meta.title);
    updateMeta('meta[name="twitter:description"]', "content", meta.description);
    updateMeta('link[rel="canonical"]', "href", meta.canonical);
  }, [meta]);
}

function useWhatsAppTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (link?.href?.startsWith("https://wa.me/")) {
        window.gtag?.("event", "contact_whatsapp", {
          event_category: "contact",
          event_label: document.title,
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });
}

function updateAnalyticsConsent(consent: CookieConsent) {
  ensureGtagQueue();
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: consent === "accepted" ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function loadGoogleAnalytics() {
  ensureGtagQueue();

  if (!window.delicarteAnalyticsLoaded) {
    const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    const hasScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!hasScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptSrc;
      document.head.appendChild(script);
    }

    window.delicarteAnalyticsLoaded = true;
    window.gtag?.("js", new Date());
    window.gtag?.("config", gaMeasurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }

  updateAnalyticsConsent("accepted");
}

function readCookieConsentChoice(): CookieConsent | null {
  try {
    const savedChoice = window.localStorage.getItem(cookieConsentStorageKey);
    return savedChoice === "accepted" || savedChoice === "declined" ? savedChoice : null;
  } catch {
    return null;
  }
}

function saveCookieConsentChoice(choice: CookieConsent) {
  try {
    window.localStorage.setItem(cookieConsentStorageKey, choice);
  } catch {
    // Some private browsing modes block storage. Keep the in-memory choice for this page view.
  }
}

function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [choice, setChoice] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const savedChoice = readCookieConsentChoice();

    if (savedChoice) {
      setChoice(savedChoice);

      if (savedChoice === "accepted") {
        loadGoogleAnalytics();
      } else {
        updateAnalyticsConsent("declined");
      }
    }

    setIsReady(true);
  }, []);

  const chooseConsent = (nextChoice: CookieConsent) => {
    saveCookieConsentChoice(nextChoice);
    setChoice(nextChoice);

    if (nextChoice === "accepted") {
      loadGoogleAnalytics();
    } else {
      updateAnalyticsConsent("declined");
    }
  };

  if (!isReady || choice) {
    return null;
  }

  return (
    <section className="cookie-consent" aria-label="Consentimento de cookies">
      <p>
        Usamos cookies analíticos para perceber visitas ao site. Pode aceitar ou recusar; o site funciona na mesma.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="button button-secondary button-small" onClick={() => chooseConsent("declined")}>
          Recusar
        </button>
        <button type="button" className="button button-small" onClick={() => chooseConsent("accepted")}>
          Aceitar
        </button>
      </div>
    </section>
  );
}

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = typeof window === "undefined" ? "/" : window.location.pathname }: AppProps) {
  const pageKind = getPageKind(initialPath);
  const pageMeta =
    pageKind === "drainage" ? drainagePageMeta : pageKind === "postoperative" ? postoperativePageMeta : homeMeta;

  usePageMeta(pageMeta);
  useWhatsAppTracking();

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Header isHome={pageKind === "home"} />
      {pageKind === "drainage" ? (
        <DrainageLymphaticPage />
      ) : pageKind === "postoperative" ? (
        <PostoperativeDrainagePage />
      ) : (
        <HomePage />
      )}
      <Footer />
      <CookieConsentBanner />
    </main>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      <Editorial />
      <Experience />
      <Press />
      <Gallery />
      <FinalCta />
    </>
  );
}

function Header({ isHome }: { isHome: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/92 backdrop-blur-md">
      <a href="#top" className="skip-link button">Saltar para o conteúdo</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href={isHome ? "#top" : "/"} onClick={closeMenu} className="font-serif text-xl tracking-[0.12em] text-stone-950">
          Delicarte
        </a>
        <nav aria-label="Menu principal" className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          <a className="nav-link" href={sectionHref("sobre")}>
            Sobre
          </a>
          <a className="nav-link" href={sectionHref("tratamentos")}>
            Tratamentos
          </a>
          <a className="nav-link" href={sectionHref("experiencia")}>
            Experiência
          </a>
          <a className="nav-link" href={sectionHref("contacto")}>
            Contacto
          </a>
        </nav>
        <a
          className="header-whatsapp button button-small"
          href={whatsappHref}
        >
          Marcar pelo WhatsApp
        </a>
        <button
          className="inline-flex min-h-11 items-center border border-stone-300 px-4 text-xs font-medium uppercase tracking-[0.18em] text-stone-800 md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`border-t border-stone-200 bg-stone-50 px-5 py-5 md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <nav aria-label="Menu mobile" className="mx-auto grid max-w-7xl gap-4 text-sm uppercase tracking-[0.16em] text-stone-700 [&>a]:flex [&>a]:min-h-11 [&>a]:items-center">
          <a className="nav-link" href={sectionHref("sobre")} onClick={closeMenu}>
            Sobre
          </a>
          <a className="nav-link" href={sectionHref("tratamentos")} onClick={closeMenu}>
            Tratamentos
          </a>
          <a className="nav-link" href={sectionHref("experiencia")} onClick={closeMenu}>
            Experiência
          </a>
          <a className="nav-link" href={sectionHref("contacto")} onClick={closeMenu}>
            Contacto
          </a>
          <a className="button mt-2" href={whatsappHref} onClick={closeMenu}>
            Marcar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function DrainageLymphaticPage() {
  const drainageGroup = serviceGroups[0];

  return (
    <>
      <section id="top" className="mx-auto grid max-w-7xl gap-9 px-5 pb-16 pt-7 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-auto lg:min-h-[620px]">
          <picture className="block h-full w-full">
            <source
              type="image/webp"
              srcSet={`${drainageLeg720} 720w, ${drainageLeg1080} 1080w`}
              sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
            />
            <img
              className="h-full w-full object-cover object-center"
              src={drainageLeg}
              width={1350}
              height={1800}
              fetchPriority="high"
              alt="Drenagem linfática nos membros inferiores na Delicarte"
            />
          </picture>
        </div>
        <div className="max-w-2xl lg:pl-8">
          <p className="section-kicker">Drenagem linfática em Guimarães</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.96] text-stone-950 sm:text-6xl lg:text-7xl">
            Drenagem Linfática
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-8 text-stone-600 sm:text-lg">
            Um acompanhamento manual suave, preciso e personalizado para apoiar o conforto corporal em fases de
            retenção, lipedema, gravidez, pós-parto e recuperação.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button" href={whatsappHref}>
              Marcar pelo WhatsApp
            </a>
            <a className="button button-secondary" href="#valores">
              Ver tipos e preços
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-delicarte-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.78fr_1fr] md:items-start lg:px-12 lg:py-24">
          <div>
            <p className="section-kicker">O tratamento</p>
            <h2 className="section-title">O que é a drenagem linfática?</h2>
          </div>
          <div className="grid gap-5">
            <p className="bio-copy">
              A drenagem linfática é uma técnica manual de toque leve e ritmado, feita para acompanhar o percurso do
              sistema linfático e apoiar a sensação de leveza, conforto e mobilidade dos tecidos.
            </p>
            <p className="bio-copy">
              Na Delicarte, cada sessão é adaptada ao corpo, à fase em que se encontra e ao objetivo do acompanhamento.
              O tratamento não substitui avaliação médica, mas pode complementar uma rotina de cuidado quando é adequado
              e seguro para a pessoa.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker">Indicações habituais</p>
          <h2 className="section-title">Para quem pode fazer sentido.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {drainageIndications.map((item) => (
            <article key={item.title} className="border-t border-stone-300 pt-7">
              <h3 className="font-serif text-3xl text-stone-950">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-stone-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-delicarte-walnut text-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="section-kicker text-stone-300">Como decorre</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
              Uma sessão tranquila, técnica e sem pressa.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {drainageSessionSteps.map((step) => (
              <article key={step.title} className="border-t border-stone-500/60 pt-7">
                <h3 className="font-serif text-2xl text-stone-50">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-stone-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="valores" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Tipos e preços</p>
            <h2 className="section-title">Escolha o acompanhamento adequado.</h2>
          </div>
          <a className="button button-secondary button-small" href={whatsappHref}>
            Confirmar disponibilidade
          </a>
        </div>
        <div className="border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <div className="max-w-2xl">
            <span className="block h-px w-12 bg-stone-500" />
            <h3 className="mt-7 font-serif text-3xl text-stone-950 sm:text-4xl">{drainageGroup.title}</h3>
            <p className="mt-4 text-base leading-7 text-stone-700">{drainageGroup.description}</p>
          </div>
          <div className="mt-8 grid gap-3 border-t border-stone-200 pt-6">
            {drainageGroup.items.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 text-sm leading-6">
                <p className="text-stone-700">{item.name}</p>
                <p className="text-right font-medium text-stone-950">
                  {item.price}
                  <span className="block font-normal text-stone-600">{item.time}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-delicarte-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.78fr_1fr] lg:px-12 lg:py-24">
          <div>
            <p className="section-kicker">Antes de marcar</p>
            <h2 className="section-title">Cuidados e precauções.</h2>
          </div>
          <div>
            <p className="bio-copy">
              A drenagem deve ser confortável e adequada ao seu momento. Algumas situações pedem avaliação médica antes
              de avançar, especialmente quando existem sintomas recentes, cirurgia ou doença em acompanhamento.
            </p>
            <div className="mt-8 grid gap-4">
              {drainagePrecautions.map((item) => (
                <p key={item} className="border-t border-stone-300 pt-4 text-base leading-7 text-stone-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker">Perguntas frequentes</p>
          <h2 className="section-title">Dúvidas comuns antes da primeira sessão.</h2>
        </div>
        <div className="mt-12 grid gap-3">
          {drainageFaqs.map((faq) => (
            <details key={faq.question} className="border border-stone-200 bg-stone-50 p-5 sm:p-6">
              <summary className="service-summary faq-summary cursor-pointer list-none font-serif text-2xl text-stone-950">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-stone-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-24">
          <div className="max-w-xl">
            <p className="section-kicker">Marcação</p>
            <h2 className="mt-5 max-w-lg text-2xl font-semibold leading-tight text-stone-950 sm:text-3xl">
              Fale diretamente com a Raquel para perceber a melhor sessão para si.
            </h2>
            <p className="copy mt-6">
              A marcação por WhatsApp permite confirmar disponibilidade, explicar o objetivo da drenagem e partilhar
              qualquer informação importante antes da sessão.
            </p>
            <a className="button mt-9" href={whatsappHref}>
              Marcar pelo WhatsApp
            </a>
          </div>
          <div>
            <img
              className="aspect-[4/3] w-full object-cover object-center"
              src={delicartTreatmentRoom}
              width={712}
              height={885}
              loading="lazy" decoding="async"
              alt="Sala Delicarte preparada para drenagem linfática"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function PostoperativeDrainagePage() {
  const postoperativeGroup = serviceGroups[1];

  return (
    <>
      <section id="top" className="mx-auto grid max-w-7xl gap-9 px-5 pb-16 pt-7 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-auto lg:min-h-[620px]">
          <picture className="block h-full w-full">
            <source
              type="image/webp"
              srcSet={`${drainageAbdomen720} 720w, ${drainageAbdomen1080} 1080w`}
              sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
            />
            <img
              className="h-full w-full object-cover object-center"
              src={drainageAbdomen}
              width={1350}
              height={1800}
              fetchPriority="high"
              alt="Drenagem no pós-operatório realizada em marquesa na Delicarte"
            />
          </picture>
        </div>
        <div className="max-w-2xl lg:pl-8">
          <p className="section-kicker">Pós-operatório em Guimarães</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.96] text-stone-950 sm:text-6xl lg:text-7xl">
            Drenagem no Pós-Operatório
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-8 text-stone-600 sm:text-lg">
            Um acompanhamento manual cuidado para fases de recuperação, pensado para respeitar o corpo, a cirurgia e as
            indicações clínicas recebidas.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button" href={whatsappHref}>
              Marcar pelo WhatsApp
            </a>
            <a className="button button-secondary" href="#valores">
              Ver cirurgias e valores
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-delicarte-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.78fr_1fr] md:items-start lg:px-12 lg:py-24">
          <div>
            <p className="section-kicker">O tratamento</p>
            <h2 className="section-title">O que é a drenagem no pós-operatório?</h2>
          </div>
          <div className="grid gap-5">
            <p className="bio-copy">
              A drenagem no pós-operatório é um acompanhamento manual suave, adaptado a fases de recuperação depois de
              cirurgia ou procedimento. O objetivo é trabalhar com delicadeza, sem pressão agressiva, respeitando tecidos,
              zonas sensíveis e limites clínicos.
            </p>
            <p className="bio-copy">
              Na Delicarte, cada sessão começa com uma conversa sobre o procedimento, a fase em que se encontra e as
              orientações que recebeu. O cuidado é sempre personalizado e não substitui o acompanhamento da equipa médica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker">Quando pode fazer sentido</p>
          <h2 className="section-title">Um cuidado adaptado à recuperação.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {postoperativeIndications.map((item) => (
            <article key={item.title} className="border-t border-stone-300 pt-7">
              <h3 className="font-serif text-3xl text-stone-950">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-stone-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-delicarte-walnut text-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="section-kicker text-stone-300">Como decorre</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
              Uma sessão cuidadosa, fase a fase.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {postoperativeSessionSteps.map((step) => (
              <article key={step.title} className="border-t border-stone-500/60 pt-7">
                <h3 className="font-serif text-2xl text-stone-50">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-stone-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="valores" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Cirurgias e valores</p>
            <h2 className="section-title">Acompanhamento por tipo de recuperação.</h2>
          </div>
          <a className="button button-secondary button-small" href={whatsappHref}>
            Confirmar disponibilidade
          </a>
        </div>
        <div className="border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <div className="max-w-2xl">
            <span className="block h-px w-12 bg-stone-500" />
            <h3 className="mt-7 font-serif text-3xl text-stone-950 sm:text-4xl">{postoperativeGroup.title}</h3>
            <p className="mt-4 text-base leading-7 text-stone-700">{postoperativeGroup.description}</p>
          </div>
          <div className="mt-8 grid gap-3 border-t border-stone-200 pt-6">
            {postoperativeGroup.items.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 text-sm leading-6">
                <p className="text-stone-700">{item.name}</p>
                <p className="text-right font-medium text-stone-950">
                  {item.price}
                  <span className="block font-normal text-stone-600">{item.time}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-delicarte-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.78fr_1fr] lg:px-12 lg:py-24">
          <div>
            <p className="section-kicker">Antes de marcar</p>
            <h2 className="section-title">Cuidados e precauções.</h2>
          </div>
          <div>
            <p className="bio-copy">
              O pós-operatório pede atenção redobrada. Antes de avançar, é importante perceber a fase de recuperação,
              os sinais do corpo e qualquer recomendação da equipa médica.
            </p>
            <div className="mt-8 grid gap-4">
              {postoperativePrecautions.map((item) => (
                <p key={item} className="border-t border-stone-300 pt-4 text-base leading-7 text-stone-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker">Perguntas frequentes</p>
          <h2 className="section-title">Dúvidas comuns antes da primeira sessão.</h2>
        </div>
        <div className="mt-12 grid gap-3">
          {postoperativeFaqs.map((faq) => (
            <details key={faq.question} className="border border-stone-200 bg-stone-50 p-5 sm:p-6">
              <summary className="service-summary faq-summary cursor-pointer list-none font-serif text-2xl text-stone-950">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-stone-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-24">
          <div className="max-w-xl">
            <p className="section-kicker">Marcação</p>
            <h2 className="mt-5 max-w-lg text-2xl font-semibold leading-tight text-stone-950 sm:text-3xl">
              Antes da primeira sessão, conversamos sobre a cirurgia e a fase da recuperação.
            </h2>
            <p className="copy mt-6">
              A marcação por WhatsApp permite confirmar disponibilidade, perceber o contexto do pós-operatório e ajustar
              o acompanhamento ao que faz sentido para si.
            </p>
            <a className="button mt-9" href={whatsappHref}>
              Marcar pelo WhatsApp
            </a>
          </div>
          <div>
            <img
              className="aspect-[4/3] w-full object-cover object-center"
              src={delicartTreatmentRoom}
              width={712}
              height={885}
              loading="lazy" decoding="async"
              alt="Sala Delicarte preparada para acompanhamento no pós-operatório"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-9 px-5 pb-16 pt-7 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-12">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-auto lg:min-h-[620px]">
        <picture className="block h-full w-full">
          <source type="image/webp" srcSet={heroTreatmentRoomWebp} />
          <img
            className="h-full w-full object-cover object-center"
            src={heroTreatmentRoom}
            width={712}
            height={885}
            fetchPriority="high"
            alt="Sala Delicarte preparada para uma sessão de cuidado corporal"
          />
        </picture>
      </div>
      <div className="max-w-2xl lg:pl-8">
        <p className="section-kicker">Drenagem linfática · pós-operatório · bem-estar</p>
        <h1 className="mt-5 font-serif text-5xl leading-[0.96] text-stone-950 sm:text-6xl lg:text-7xl">
          Delicarte
          <span className="mt-3 block text-3xl leading-tight text-stone-700 sm:text-4xl lg:text-5xl">
            by Raquel Oliveira
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-base font-light leading-8 text-stone-600 sm:text-lg">
          Um espaço especializado em drenagem linfática terapêutica, pensado para apoiar o corpo no pós-operatório,
          no lipedema, na gravidez e em momentos que pedem cuidado, presença e recuperação.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="button" href={whatsappHref}>
            Marcar pelo WhatsApp
          </a>
          <a className="button button-secondary" href="#tratamentos">
            Ver tratamentos
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-y border-stone-200 bg-delicarte-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1fr] md:items-center lg:px-12 lg:py-24">
        <div className="grid gap-4">
          <img
            className="aspect-[4/5] w-full rounded-sm object-cover object-top md:h-[520px] md:object-[center_22%] lg:h-[540px]"
            src={raquelBrandingBio960}
            srcSet={`${raquelBrandingBio640} 640w, ${raquelBrandingBio960} 960w, ${raquelBrandingBio} 1600w`}
            sizes="(min-width: 1024px) 36vw, (min-width: 768px) 42vw, calc(100vw - 40px)"
            width={1600}
            height={2400}
            loading="lazy" decoding="async"
            alt="Retrato de Raquel Oliveira"
          />
          <div className="flex items-center gap-4 border-t border-stone-300 pt-4">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={raquelPdfAvatar96}
              width={214}
              height={320}
              loading="lazy" decoding="async"
              alt="Raquel Oliveira"
            />
            <div>
              <p className="font-serif text-xl text-stone-950">Raquel Oliveira</p>
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">Linfoterapeuta</p>
            </div>
          </div>
        </div>
        <div className="md:pl-10">
          <h2 className="section-title">Cuidar também é saber escutar.</h2>
          <p className="bio-copy mt-5">
            Sou a Raquel Oliveira, linfoterapeuta especializada em drenagem linfática terapêutica, com foco no
            pós-operatório, lipedema e acompanhamento na gravidez.
          </p>
          <p className="bio-copy mt-5">
            Na Delicarte, cada sessão é conduzida de forma personalizada, respeitando o momento, a sensibilidade e as
            necessidades específicas de cada corpo. A minha abordagem combina técnica, cuidado e presença, criando um
            acompanhamento próximo, confortável e seguro.
          </p>
          <p className="bio-copy mt-5">
            Quando o cuidado está ligado a uma cirurgia ou procedimento, o foco é a drenagem no pós-operatório, sempre
            ajustada à fase de recuperação e à orientação clínica de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="tratamentos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <p className="section-kicker">Tratamentos</p>
        <h2 className="section-title">Drenagens e cuidados adaptados ao seu corpo.</h2>
      </div>
      <div className="mt-12 grid gap-4">
        {serviceGroups.map((group) => (
          <details key={group.title} className="border border-stone-200 bg-stone-50 p-6 sm:p-8">
            <summary className="service-summary flex cursor-pointer list-none flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <span className="block h-px w-12 bg-stone-500" />
                <h3 className="mt-7 font-serif text-3xl text-stone-950 sm:text-4xl">{group.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-700">{group.description}</p>
              </div>
              <span className="inline-flex min-h-10 shrink-0 items-center justify-center border border-stone-300 bg-white/50 px-4 text-xs font-medium uppercase tracking-[0.14em] text-stone-700">
                {group.label}
              </span>
            </summary>
            {group.secondaryCta ? (
              <a
                className="nav-link mt-5 inline-flex text-sm font-medium text-stone-600 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500"
                href={group.secondaryCta.href}
              >
                {group.secondaryCta.label}
              </a>
            ) : null}
            <div className={`${group.secondaryCta ? "mt-6" : "mt-8"} grid gap-3 border-t border-stone-200 pt-6`}>
              {group.items.map((item) => (
                <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 text-sm leading-6">
                  <p className="text-stone-700">{item.name}</p>
                  <p className="text-right font-medium text-stone-950">
                    {item.price}
                    <span className="block font-normal text-stone-600">{item.time}</span>
                  </p>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="relative min-h-[78vh] overflow-hidden sm:rounded-sm md:min-h-[680px]">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={greenFeather}
            width={736}
            height={1308}
            loading="lazy" decoding="async"
            alt="Textura verde suave associada a pausa e cuidado"
          />
          <div className="absolute inset-0 bg-stone-950/35" />
          <div className="relative flex min-h-[78vh] items-center justify-center px-5 py-16 text-center sm:px-8 md:min-h-[680px] md:p-12">
            <p className="max-w-3xl text-3xl font-light leading-tight text-stone-50 sm:text-5xl">
              O <span className="font-medium">corpo</span> também precisa de lugares onde possa fazer uma{" "}
              <span className="font-medium">pausa.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-delicarte-walnut text-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-kicker text-stone-300">A experiência Delicarte</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
            Um cuidado silencioso, rigoroso e próximo.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experience.map((item) => (
            <article key={item.title} className="border-t border-stone-500/60 pt-7">
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-stone-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="border-y border-stone-200 bg-delicarte-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_0.62fr] md:items-center lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="section-kicker">Na imprensa</p>
          <h2 className="section-title">Uma abordagem reconhecida pelo cuidado com a qualidade de vida.</h2>
          <p className="copy mt-6">
            O trabalho da Raquel cruza técnica, escuta e sensibilidade, com especial atenção a pessoas que
            precisam de um acompanhamento corporal mais cuidadoso e adaptado.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-stone-500">Destaque Revista Spot</p>
        </div>
        <div className="border border-stone-300 bg-stone-50 p-3">
          <img
            className="mx-auto max-h-[430px] w-full max-w-xs rounded-sm object-cover object-top"
            src={raquelPress}
            width={746}
            height={890}
            loading="lazy" decoding="async"
            alt="Publicação sobre Raquel Oliveira na Revista Spot"
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">Instagram</p>
          <h2 className="section-title">Siga-me no Instagram</h2>
          <p className="copy mt-5">
            Alguns detalhes reais do cuidado, do espaço e das drenagens, partilhados com a mesma calma que se vive na Delicarte.
          </p>
        </div>
        <a
          className="button button-secondary button-small"
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Instagram
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <img
            key={image.src}
            className="aspect-[4/5] w-full rounded-sm object-cover"
            src={image.src}
            width={image.width}
            height={image.height}
            loading="lazy" decoding="async"
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <h2 className="max-w-lg text-2xl font-semibold leading-tight text-stone-950 sm:text-3xl">
            Um ambiente preparado para acompanhar o corpo com conforto, atenção e cuidado especializado.
          </h2>
          <div className="mt-14 grid gap-7 text-lg leading-tight text-stone-700">
            <div>
              <p className="font-medium text-stone-600">Estúdio</p>
              <a
                className="nav-link mt-1 block text-stone-700 underline-offset-4 hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Rua%20Santa%20Eul%C3%A1lia%20778%2C%20Ferment%C3%B5es%2C%20Guimar%C3%A3es"
                target="_blank"
                rel="noreferrer"
              >
                Rua Santa Eulália 778,
                <br />
                Fermentões, Guimarães
              </a>
            </div>
            <div>
              <p className="font-medium text-stone-600">Telefone</p>
              <p className="mt-1">
                <a className="nav-link text-stone-700 underline-offset-4 hover:underline" href="tel:+351917968714">
                  917 968 714
                </a>
                <br />
                <span className="text-base text-stone-500">(chamada com custo para rede móvel nacional)</span>
              </p>
            </div>
          </div>
          <a className="button mt-9" href={whatsappHref}>
            Marcar pelo WhatsApp
          </a>
        </div>
        <div>
          <img
            className="aspect-[4/3] w-full object-cover object-center"
            src={delicartTreatmentRoom}
            width={712}
            height={885}
            loading="lazy" decoding="async"
            alt="Detalhe acolhedor do estúdio Delicarte"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-sm sm:px-8 md:grid-cols-[1fr_2fr] lg:px-12">
        <div>
          <p className="font-serif text-2xl text-stone-50">Delicarte</p>
          <p className="mt-3 text-stone-400">by Raquel Oliveira</p>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a className="footer-link" href={instagramHref} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="footer-link" href={tiktokHref} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <p className="text-stone-400">Atendimento por marcação</p>
            <a className="footer-link" href="tel:+351917968714">
              +351 917 968 714
            </a>
          </div>
          <p className="mt-8 text-xs leading-6 text-stone-400">
            © 2026 Delicarte. Desenvolvido por{" "}
            <a
              className="footer-link text-stone-400"
              href="https://thecreative1.github.io/Estudio-Flavio-Martins/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estúdio Flávio Martins
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
