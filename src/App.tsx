import { useState } from "react";
import delicartFacialTreatment from "./assets/delicarte-facial-treatment.jpg";
import delicartProducts from "./assets/delicarte-products.jpg";
import delicartReception from "./assets/delicarte-reception.jpg";
import delicartTreatmentRoom from "./assets/delicarte-treatment-room.jpg";
import raquelAvatar from "./assets/raquel-avatar.jpg";
import raquelPress from "./assets/raquel-press.jpg";

const treatments = [
  {
    name: "Massagem Relaxante",
    description:
      "Um convite a desacelerar, aliviar a tensão acumulada e regressar ao corpo com suavidade.",
  },
  {
    name: "Massagem Terapêutica",
    description:
      "Trabalho atento sobre zonas de maior desconforto, sempre adaptado ao ritmo e sensibilidade de cada pessoa.",
  },
  {
    name: "Drenagem Linfática",
    description:
      "Toques precisos e delicados para apoiar a sensação de leveza e bem-estar corporal.",
  },
  {
    name: "Ritual de Bem-Estar",
    description:
      "Uma experiência mais envolvente, pensada para quem procura cuidado, presença e uma pausa profunda.",
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
    src: delicartTreatmentRoom,
    alt: "Sala Delicarte preparada para uma sessão de cuidado corporal",
  },
  {
    src: delicartFacialTreatment,
    alt: "Tratamento facial realizado com movimentos delicados",
  },
  {
    src: delicartProducts,
    alt: "Detalhe de produtos usados nos tratamentos Delicarte",
  },
  {
    src: delicartReception,
    alt: "Receção luminosa do espaço Delicarte",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Editorial />
      <Experience />
      <Press />
      <Gallery />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" onClick={closeMenu} className="font-serif text-xl tracking-[0.12em] text-stone-950">
          Delicarte
        </a>
        <nav aria-label="Menu principal" className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          <a className="nav-link" href="#sobre">
            Sobre
          </a>
          <a className="nav-link" href="#tratamentos">
            Tratamentos
          </a>
          <a className="nav-link" href="#experiencia">
            Experiência
          </a>
          <a className="nav-link" href="#contacto">
            Contacto
          </a>
        </nav>
        <a
          className="hidden min-h-10 items-center justify-center border border-stone-950 bg-stone-950 px-5 text-xs font-medium uppercase tracking-[0.16em] text-stone-50 transition duration-300 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-stone-50 sm:inline-flex"
          href="https://wa.me/351917968714"
        >
          Marcar pelo WhatsApp
        </a>
        <button
          className="inline-flex min-h-10 items-center border border-stone-300 px-4 text-xs font-medium uppercase tracking-[0.18em] text-stone-800 md:hidden"
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
        <nav aria-label="Menu mobile" className="mx-auto grid max-w-7xl gap-4 text-sm uppercase tracking-[0.16em] text-stone-700">
          <a className="nav-link" href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a className="nav-link" href="#tratamentos" onClick={closeMenu}>
            Tratamentos
          </a>
          <a className="nav-link" href="#experiencia" onClick={closeMenu}>
            Experiência
          </a>
          <a className="nav-link" href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
          <a className="button mt-2" href="https://wa.me/351917968714" onClick={closeMenu}>
            Marcar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-9 px-5 pb-16 pt-7 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-12 lg:pb-24 lg:pt-12">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-auto lg:min-h-[620px]">
        <img
          className="h-full w-full object-cover object-center"
          src={delicartTreatmentRoom}
          alt="Sala Delicarte preparada para uma sessão de cuidado corporal"
        />
      </div>
      <div className="max-w-2xl lg:pl-8">
        <p className="section-kicker">Massagens · bem-estar · cuidado corporal</p>
        <h1 className="mt-5 font-serif text-5xl leading-[0.96] text-stone-950 sm:text-6xl lg:text-7xl">
          Delicarte
          <span className="mt-3 block text-3xl leading-tight text-stone-700 sm:text-4xl lg:text-5xl">
            by Raquel Oliveira
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700">
          Um espaço para regressar ao corpo com tempo, presença e delicadeza. Sessões pensadas para acolher,
          aliviar e criar uma pausa verdadeira no ritmo dos dias.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="button" href="https://wa.me/351917968714">
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
    <section id="sobre" className="border-y border-stone-200 bg-[#f6f1ea]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1fr] md:items-center lg:px-12 lg:py-24">
        <div className="grid gap-4">
          <img
            className="aspect-[4/5] w-full rounded-sm object-cover object-center md:h-[440px]"
            src={delicartFacialTreatment}
            alt="Tratamento facial num ambiente calmo e acolhedor"
          />
          <div className="flex items-center gap-4 border-t border-stone-300 pt-4">
            <img className="h-16 w-16 rounded-full object-cover" src={raquelAvatar} alt="Raquel Oliveira" />
            <div>
              <p className="font-serif text-xl text-stone-950">Raquel Oliveira</p>
              <p className="text-sm uppercase tracking-[0.16em] text-stone-500">Linfoterapeuta</p>
            </div>
          </div>
        </div>
        <div className="md:pl-10">
          <p className="section-kicker">Olá, sou a Raquel</p>
          <h2 className="section-title">Cuidar também é saber escutar.</h2>
          <p className="copy">
            Na Delicarte, cada tratamento é conduzido com atenção ao detalhe e respeito pelo momento em que se
            encontra. A minha abordagem junta técnica, sensibilidade e uma presença tranquila, para que a sessão
            não seja apenas uma marcação na agenda, mas um tempo seu.
          </p>
          <p className="copy mt-5">
            Trabalho com massagens e rituais corporais de forma personalizada, criando um ambiente discreto,
            confortável e profundamente humano.
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
        <h2 className="section-title">Escolha uma pausa com intenção.</h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-2">
        {treatments.map((treatment) => (
          <article key={treatment.name} className="bg-stone-50 p-8 transition duration-300 hover:bg-[#f4eee6] sm:p-10">
            <span className="block h-px w-12 bg-stone-500" />
            <h3 className="mt-8 font-serif text-3xl text-stone-950">{treatment.name}</h3>
            <p className="mt-5 text-base leading-7 text-stone-700">{treatment.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[320px] overflow-hidden rounded-sm md:min-h-[560px]">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={delicartReception}
            alt="Receção luminosa do espaço Delicarte"
          />
          <div className="absolute inset-0 bg-stone-950/20" />
          <div className="relative flex min-h-[320px] items-end p-6 md:min-h-[560px] md:p-12">
            <p className="max-w-2xl font-serif text-3xl leading-tight text-stone-50 sm:text-5xl">
              O corpo também precisa de lugares onde possa pousar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-[#3a302a] text-stone-50">
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
    <section className="border-y border-stone-200 bg-[#f6f1ea]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_0.72fr] md:items-center lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="section-kicker">Na imprensa</p>
          <h2 className="section-title">Uma abordagem reconhecida pelo cuidado com a qualidade de vida.</h2>
          <p className="copy mt-6">
            O trabalho da Raquel cruza técnica, escuta e sensibilidade, com especial atenção a pessoas que
            precisam de um acompanhamento corporal mais cuidadoso e adaptado.
          </p>
        </div>
        <img
          className="mx-auto max-h-[520px] w-full max-w-sm rounded-sm object-cover shadow-sm"
          src={raquelPress}
          alt="Publicação sobre Raquel Oliveira na Revista Spot"
        />
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">O espaço</p>
        <h2 className="section-title">Detalhes reais de uma experiência tranquila.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <img
            key={image.src}
            className="aspect-[4/5] w-full rounded-sm object-cover"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="border-y border-stone-200 bg-[#ebe1d6]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-16 text-center sm:px-8 lg:py-24">
        <p className="section-kicker">Contacto</p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
          Marque uma sessão e ofereça ao seu corpo um intervalo com presença.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-stone-700">
          Para horários, disponibilidade e escolha do tratamento mais adequado, fale diretamente com a Raquel.
        </p>
        <a className="button mt-9" href="https://wa.me/351917968714">
          Marcar pelo WhatsApp
        </a>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a className="footer-link" href="https://www.instagram.com/delicarte_raqueloliveira?igsh=eXBkN244eGFzdWRi&utm_source=qr">
            Instagram
          </a>
          <a className="footer-link" href="https://www.tiktok.com/@delicarte_raqueloliveira?_r=1&_t=ZG-96HUYGMbPbF">
            TikTok
          </a>
          <p className="text-stone-400">Portugal</p>
          <a className="footer-link" href="tel:+351917968714">
            +351 917 968 714
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
