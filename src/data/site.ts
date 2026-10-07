import type {
  Environment,
  NavigationItem,
  RoomCarouselImage,
  SiteImage,
  UsageMode,
} from "@/types/site";

export const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Ambientes", href: "#ambientes" },
] satisfies NavigationItem[];

export const heroContent = {
  eyebrow: "Escritório DOMO · 19º andar",
  title: "Seu próximo espaço profissional pode começar aqui.",
  description:
    "Ambientes profissionais que transmitem confiança, favorecem a produtividade e valorizam cada encontro.",
  image: {
    src: "/images/environments/recepcao-domo-ofc.jpeg",
    alt: "Recepção do Escritório DOMO, com balcão de atendimento e a marca na parede.",
  } satisfies SiteImage,
};

export const aboutContent = {
  eyebrow: "Nosso propósito",
  title: "Mais do que um lugar para trabalhar.",
  paragraphs: [
    "O Escritório DOMO foi pensado para profissionais, empresários e equipes que procuram mais do que um lugar para trabalhar. Estrutura, conforto e apresentação se unem para proporcionar uma experiência profissional desde a chegada até a conclusão de cada reunião.",
    "Seja para uma necessidade pontual ou para estabelecer uma rotina de trabalho, o DOMO oferece espaços preparados para acompanhar diferentes momentos e objetivos profissionais.",
  ],
};

export const roomsCarouselImages = [
  {
    id: "escritorio-compacto",
    src: "/images/environments/escritorio-compacto-referencia.webp",
    alt: "Imagem ilustrativa de um escritório privativo em ambiente corporativo.",
  },
  {
    id: "sala-reuniao-compacta",
    src: "/images/environments/sala_Domo.png",
    alt: "Imagem ilustrativa de uma sala preparada para reuniões profissionais.",
  },
  {
    id: "sala-reuniao-ampla",
    src: "/images/environments/SALA_MAster.png",
    alt: "Imagem ilustrativa de uma sala de reunião em ambiente corporativo.",
  },
  {
    id: "escritorio-com-janela",
    src: "/images/environments/SalaComJanela2.jpg",
    alt: "Imagem ilustrativa de um escritório compartilhado com janela.",
  },
] satisfies RoomCarouselImage[];

export const usageModes = [
  {
    id: "pontual",
    title: "Pontual",
    description: "Salas de reunião por hora",
    image: {
      src: "/images/environments/sala_Domo.png",
      alt: "Imagem ilustrativa de uma sala preparada para reuniões profissionais.",
    },
  },
  {
    id: "fixo",
    title: "Fixo",
    description: "Escritórios privativos",
    image: {
      src: "/images/environments/escritorio-compacto-referencia.webp",
      alt: "Imagem ilustrativa de um escritório privativo para trabalho cotidiano.",
    },
  },
] satisfies UsageMode[];

export const environments = [
  {
    id: "recepcao",
    index: "01",
    title: "Recepção",
    description:
      "Uma chegada organizada ajuda a construir uma experiência profissional desde o primeiro contato.",
    image: {
      src: "/images/environments/recepcao-domo-ofc.jpeg",
      alt: "Recepção do Escritório DOMO, com balcão de atendimento e a marca na parede.",
    },
  },
  {
    id: "corredor",
    index: "02",
    title: "Corredor",
    description: "[CONFIRMAR TEXTO DO CORREDOR E ADICIONAR FOTO REAL]",
    image: {
      src: "/images/environments/Corredor.png",
      alt: "Imagem ilustrativa de um corredor em ambiente corporativo.",
    },
  },
  {
    id: "copa",
    index: "03",
    title: "Copa",
    description: "[CONFIRMAR TEXTO DA COPA E ADICIONAR FOTO REAL]",
    image: {
      src: "/images/environments/Copa.png",
      alt: "Imagem ilustrativa de uma copa em ambiente corporativo.",
    },
  },
] satisfies Environment[];
