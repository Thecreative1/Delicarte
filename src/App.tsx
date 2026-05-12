import { useState } from "react";
import creamDetail from "./assets/cream-detail.webp";
import delicartFacialTreatment from "./assets/delicarte-facial-treatment.jpg";
import delicartProducts from "./assets/delicarte-products.jpg";
import delicartReception from "./assets/delicarte-reception.jpg";
import delicartTreatmentRoom from "./assets/delicarte-treatment-room.jpg";
import oilDetail from "./assets/oil-detail.webp";
import raquelPdfAvatar from "./assets/raquel-pdf-avatar.jpg";
import raquelPdfPortrait from "./assets/raquel-pdf-portrait.jpg";
import raquelPress from "./assets/raquel-press.jpg";

const treatments = [
  {
    name: "Drenagem Linfática Pós-Operatório",
    detail: "Terapia intensiva · 70€ · 60 min",
    description:
      "Drenagem linfática terapêutica para acompanhar a recuperação depois de cirurgia ou procedimento, sempre ajustada à fase do corpo.",
  },
  {
    name: "Drenagem Linfática Manual",
    detail: "65€ · 60 min",
    description:
      "Trabalho manual cuidado para apoiar a circulação linfática, reduzir sensação de peso e promover conforto corporal.",
  },
  {
    name: "Drenagem Linfática Lipedema",
    detail: "35€ · 45 min",
    description:
      "Acompanhamento delicado e personalizado para corpos com lipedema, respeitando sensibilidade, dor e necessidade de leveza.",
  },
  {
    name: "Drenagem Pós-Parto e Gravidez",
    detail: "55€ · 60 min",
    description:
      "Drenagem linfática pensada para gravidez, pós-parto e fases em que o corpo precisa de cuidado atento e seguro.",
  },
];

const priceGroups = [
  {
    title: "Drenagens",
    items: [
      { name: "Drenagem Linfática Manual", price: "65€", time: "60 min" },
      { name: "Drenagem Linfática Pós-Operatório", price: "70€", time: "60 min" },
      { name: "Drenagem Linfática Lipedema", price: "35€", time: "45 min" },
      { name: "Drenagem Linfática Grávida Pós-Parto", price: "55€", time: "60 min" },
      { name: "Drenagem Facial", price: "35€", time: "45 min" },
      { name: "Drenagem Visceral", price: "35€", time: "45 min" },
      { name: "Drenagem Linfática Cervical", price: "50€", time: "60 min" },
      { name: "Drenagem zona membros inferiores ou abdómen", price: "30€", time: "45 min" },
    ],
  },
  {
    title: "Pós-operatório",
    items: [
      { name: "Consulta avaliação pré/pós-operatório", price: "25€", time: "30 min" },
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
    src: oilDetail,
    alt: "Óleo de cuidado corporal preparado para uma sessão",
  },
  {
    src: creamDetail,
    alt: "Textura de creme de cuidado corporal",
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
      <Instagram />
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
          className="header-whatsapp button button-small"
          href="https://wa.me/351915086116"
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
          <a className="button mt-2" href="https://wa.me/351915086116" onClick={closeMenu}>
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
        <p className="section-kicker">Drenagem linfática · pós-operatório · bem-estar</p>
        <h1 className="mt-5 font-serif text-5xl leading-[0.96] text-stone-950 sm:text-6xl lg:text-7xl">
          Delicarte
          <span className="mt-3 block text-3xl leading-tight text-stone-700 sm:text-4xl lg:text-5xl">
            by Raquel Oliveira
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700">
          Um espaço especializado em drenagem linfática terapêutica, pensado para apoiar o corpo no pós-operatório,
          no lipedema, na gravidez e em momentos que pedem cuidado, presença e recuperação.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="button" href="https://wa.me/351915086116">
            Marcar pelo WhatsApp
          </a>
          <a className="button button-secondary" href="#tratamentos">
            Ver tratamentos
          </a>
        </div>
        <div className="mt-8 grid gap-3 border-t border-stone-200 pt-6 text-sm leading-6 text-stone-600 sm:grid-cols-3">
          <p>Drenagem linfática terapêutica</p>
          <p>Pós-operatório, lipedema e gravidez</p>
          <p>Marcação direta com a Raquel</p>
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
            src={raquelPdfPortrait}
            alt="Retrato de Raquel Oliveira"
          />
          <div className="flex items-center gap-4 border-t border-stone-300 pt-4">
            <img className="h-16 w-16 rounded-full object-cover" src={raquelPdfAvatar} alt="Raquel Oliveira" />
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
            Sou a Raquel Oliveira, linfoterapeuta especializada em drenagem linfática terapêutica, com foco no
            pós-operatório, lipedema e acompanhamento na gravidez.
          </p>
          <p className="copy mt-5">
            Na Delicarte, cada sessão é conduzida de forma personalizada, respeitando o momento, a sensibilidade e as
            necessidades específicas de cada corpo. A minha abordagem combina técnica, cuidado e presença, criando um
            acompanhamento próximo, confortável e seguro.
          </p>
          <p className="copy mt-5">
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
      <div className="mt-12 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-2">
        {treatments.map((treatment) => (
          <article key={treatment.name} className="bg-stone-50 p-8 transition duration-300 hover:bg-[#f4eee6] sm:p-10">
            <span className="block h-px w-12 bg-stone-500" />
            <h3 className="mt-8 font-serif text-3xl text-stone-950">{treatment.name}</h3>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">{treatment.detail}</p>
            <p className="mt-5 text-base leading-7 text-stone-700">{treatment.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 border-t border-stone-200 pt-10">
        <div className="max-w-2xl">
          <p className="section-kicker">Valores</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
            Preços de referência para marcação.
          </h3>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {priceGroups.map((group) => (
            <div key={group.title} className="border-t border-stone-300 pt-5">
              <h4 className="font-serif text-2xl text-stone-950">{group.title}</h4>
              <div className="mt-5 grid gap-4">
                {group.items.map((item) => (
                  <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 text-sm leading-6">
                    <p className="text-stone-700">{item.name}</p>
                    <p className="text-right font-medium text-stone-950">
                      {item.price}
                      <span className="block font-normal text-stone-500">{item.time}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-stone-600">
          Se está em pós-operatório ou tem uma indicação específica, a drenagem é ajustada ao seu momento e às
          necessidades do corpo.
        </p>
        <a className="button button-secondary button-small" href="https://wa.me/351915086116">
          Falar com a Raquel
        </a>
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
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">O espaço</p>
        <h2 className="section-title">Detalhes reais de uma experiência tranquila.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

function Instagram() {
  return (
    <section className="border-y border-stone-200 bg-[#f6f1ea]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="section-kicker">Instagram</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
            Siga-me no Instagram
          </h2>
        </div>
        <a
          className="button button-secondary button-small"
          href="https://www.instagram.com/delicarte_raqueloliveira?igsh=eXBkN244eGFzdWRi&utm_source=qr"
        >
          Ver Instagram
        </a>
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
          Para horários, disponibilidade e escolha do tratamento mais adequado, fale diretamente através do WhatsApp.
        </p>
        <div className="mt-9 grid gap-5 text-sm leading-6 text-stone-700 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Estúdio</p>
            <p className="mt-2">
              Rua Santa Eulália 778,
              <br />
              Fermentões, Guimarães
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Telefone</p>
            <p className="mt-2">
              <a className="nav-link text-stone-700 underline-offset-4 hover:underline" href="tel:+351915086116">
                915 086 116
              </a>
              <br />
              <span className="text-stone-500">(chamada para rede móvel nacional)</span>
            </p>
          </div>
        </div>
        <a className="button mt-9" href="https://wa.me/351915086116">
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
          <p className="text-stone-400">Atendimento por marcação</p>
          <a className="footer-link" href="tel:+351915086116">
            +351 915 086 116
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
