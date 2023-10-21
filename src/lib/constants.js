import MdiLinkedin from "~icons/mdi/linkedin";
import MdiGithub from "~icons/mdi/github";
import PhFigmaLogo from "~icons/ph/figma-logo";
import PhDribbbleLogoFill from "~icons/ph/dribbble-logo-fill";
import RiTwitterXFill from "~icons/ri/twitter-x-fill";

export const NAV_LINKS = [
  {
    nome: "Sobre",
    link: "#sobre",
  },
  {
    nome: "Projetos",
    link: "#projetos",
  },
  { nome: "Experiência", link: "#exp" },
  {
    nome: "Contato",
    link: "#contato",
  },
];

export const REDES_SOCIAIS = [
  {
    nome: "LinkedIn",
    icone: MdiLinkedin,
    link: "https://www.linkedin.com/in/mthsoliveira7",
  },
  {
    nome: "GitHub",
    icone: MdiGithub,
    link: "https://github.com/mthsoliveira7",
    descricao: "Para os repositórios dos meus projetos.",
  },
  {
    nome: "Figma",
    icone: PhFigmaLogo,
    link: "https://www.figma.com/@mthsoliveira7",
    descricao: "Pra interfaces criadas por mim.",
  },
  {
    nome: "Dribbble",
    icone: PhDribbbleLogoFill,
    link: "https://dribbble.com/mthsoliveira7",
    descricao: "Trabalhos de design gráfico em geral.",
  },
  {
    nome: "X",
    icone: RiTwitterXFill,
    link: "https://twitter.com/mthsoliveira7",
  },
];

export const TECH_STACK = [
  {
    nome: "JavaScript (ES6+)",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  { nome: "TypeScript", link: "https://www.typescriptlang.org/pt/" },
  { nome: "React", link: "https://pt-br.react.dev/" },
  { nome: "Next.js", link: "https://nextjs.org/" },
  { nome: "Vite", link: "https://pt.vitejs.dev/" },
  {
    nome: "HTML5",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    nome: "CSS3",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  { nome: "Git", link: "https://git-scm.com/" },
  { nome: "TailwindCSS", link: "https://tailwindcss.com/" },
  { nome: "Svelte", link: "https://svelte.dev/" },
  { nome: "SolidJS", link: "https://www.solidjs.com/" },
  { nome: "Figma", link: "https://www.figma.com/" },
  {
    nome: "Photoshop",
    link: "https://www.adobe.com/br/products/photoshop.html",
  },
  {
    nome: "Illustrator",
    link: "https://www.adobe.com/br/products/illustrator.html",
  },
  {
    nome: "InDesign",
    link: "https://www.adobe.com/br/products/indesign.html",
  },
  {
    nome: "After Effects",
    link: "https://www.adobe.com/br/products/aftereffects.html",
  },
];

// SEÇÃO PROJETOS
export const MEU_FONE = {
  thumbnail: "meufoneScreenshot.png",
  links: {
    demo: "https://meu-fone.vercel.app/",
    repo: "https://github.com/mthsoliveira7/meuFone/",
    design: "https://media.tenor.com/CmcVmK0EC0kAAAAC/coming-soon-em-breve.gif",
  },
  nome: "meuFone",
  descricao:
    "A meuFone é um e-commerce fictício de venda de fones de ouvido, desenvolvido com Next.js e Tailwind CSS. O projeto consiste em três páginas principais: a página inicial, que serve como a porta de entrada do site, apresentando os produtos mais populares ou recentes, o catálogo, que lista todos os produtos disponíveis para venda e a página de detalhes do produto que fornece informações detalhadas sobre um produto específico, incluindo descrição, preço, imagem e avaliações.",
  tech: {
    nome: ["React", "Next.js", "Tailwind"],
    cores: [
      "bg-red-950/40 text-red-500 ring-red-500/20",
      "bg-sky-950/40 text-sky-400 ring-sky-400/20",
      "bg-lime-950/40 text-lime-400 ring-lime-400/20",
    ],
  },
};

export const GUARDA_NOTAS = {
  thumbnail: "guardanotasScreenshot.png",
  links: {
    demo: "https://guardanotas.pages.dev/",
    repo: "https://github.com/mthsoliveira7/guardanotas",
    design: "https://www.figma.com/community/file/1285285784771074425",
  },
  nome: "GuardaNotas",
  descricao:
    "O GuardaNotas é um aplicativo CRUD que permite aos usuários criar e armazenar notas pequenas ou lembretes diretamente no armazenamento local do navegador. O aplicativo é construído com uma interface de usuário intuitiva e responsiva, estilizada com Tailwind CSS, e serviu também como porta de entrada pro primeiro gerenciador de estado externo que utilizei, o Zustand. Usei também TypeScript pra prevenção de erros e Vite como ferramenta de construção.",
  tech: {
    nome: ["React", "TypeScript", "Tailwind", "Zustand", "Vite"],
    cores: [
      "bg-red-950/40 text-red-500 ring-red-500/20",
      "bg-sky-950/40 text-sky-400 ring-sky-400/20",
      "bg-lime-950/40 text-lime-400 ring-lime-400/20",
      "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
      "bg-purple-950/40 text-purple-500 ring-purple-400/20",
    ],
  },
};

// SEÇÃO EXPERIÊNCIA
export const EMPREGOS = [
  {
    empresa: "FREELANCE",
    data: "2018 — Atualmente",
    cargo: "Designer Gráfico",
    descricao:
      "Tive clientes como o selo “Educação em Meia Hora” do Spotify, desenvolvendo logomarcas para os podcasts de Geografia, Inglês, Português e Filosofia. Também produzi artes de divulgação para empresas como Camarote do Nana e iniciativas sociais como o Pré na Praça, em Angra dos Reis - RJ. Ajudei a desenvolver uma campanha publicitária para “Il Sordo”, que utilizaram uma variedade de plataformas e técnicas para atingir o público-alvo e alcançar os objetivos da marca.",
    tech: [
      {
        nome: [
          "Figma",
          "Photoshop",
          "Illustrator",
          "InDesign",
          "After Effects",
        ],
        cores: [
          "bg-purple-950/50 text-purple-400 ring-purple-400/20",
          "bg-sky-950/50 text-sky-400 ring-sky-400/20",
          "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
          "bg-rose-950/40 text-rose-400 ring-rose-400/20",
          "bg-violet-950/40 text-violet-400 ring-violet-400/20",
        ],
      },
    ],
  },
  {
    empresa: "FREELANCE",
    data: "2022 — Atualmente",
    cargo: "Programador Frontend",
    descricao:
      "Estudei por conta própria e adquiri uma sólida compreensão das linguagens de programação frontend mais utilizadas atualmente. Tô constantemente buscando oportunidades para aplicar minhas habilidades em um ambiente de trabalho, estando aberto a oportunidades de emprego fixo ou trabalho freelance nessa área de desenvolvimento web.",
    tech: [
      {
        nome: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Svelte",
          "Tailwind",
        ],
        cores: [
          "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
          "bg-blue-950/40 text-blue-300 ring-blue-400/20",
          "bg-sky-950/50 text-sky-400 ring-sky-400/20",
          "bg-zinc-700/40 text-white ring-white/20",
          "bg-orange-950/30 text-orange-500 ring-orange-400/20",
          "bg-lime-950/30 text-lime-500 ring-lime-400/20",
        ],
      },
    ],
  },
  {
    empresa: "MARIA DO BOLO",
    data: "2022 — Atualmente",
    cargo: "Gestor Administrativo",
    descricao:
      "Responsável pelo atendimento aos clientes, com a oportunidade de desenvolver habilidades de comunicação e relacionamento com o público e também pela gestão de recursos, o que ajuda a compreender melhor as necessidades financeiras e logísticas de um negócio.",
    tech: [
      {
        nome: [],
        cores: [],
      },
    ],
  },
  {
    empresa: "INPUT PROPAGANDA",
    data: "04/2018 — 06/2020",
    cargo: "Diretor de Arte",
    descricao:
      "Produzi posts especializados em marketing digital e branded content. Também forneci serviços para ajudar os clientes da agênciaa aumentar sua presença online e criar conteúdo personalizado para suas marcas.",
    tech: [
      {
        nome: ["Photoshop", "Illustrator", "After Effects"],
        cores: [
          "bg-sky-950/50 text-sky-400 ring-sky-400/20",
          "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
          "bg-violet-950/40 text-violet-400 ring-violet-400/20",
        ],
      },
    ],
  },
  {
    empresa: "UNIVERSIDADE TIRADENTES",
    data: "03/2017 — 08/2017",
    cargo: "Estagiário em Design Gráfico",
    descricao:
      "Tive meu primeiro contato com o setor trabalhista atuando como estagiário da própria universidade na qual estudei, utilizando meu conhecimeno dos softwares ensinados nela",
    tech: [
      {
        nome: ["Photoshop", "Illustrator"],
        cores: [
          "bg-sky-950/50 text-sky-400 ring-sky-400/20",
          "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
        ],
      },
    ],
  },
];

// SEÇÃO CONTATO
export const CONTATO_INFO = [
  {
    nome: "EMAIL",
    valor: "mthsoliveira7@skiff.com",
  },
  {
    nome: "WHATSAPP / TELEGRAM",
    valor: "+55 79 998726656",
  },
  {
    nome: "DISCORD",
    valor: "mthsoliveira7",
  },
];
