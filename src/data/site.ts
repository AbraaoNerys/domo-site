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
    id: "sala-domo",
    src: "/images/environments/sala-domo-ofc.jpeg",
    alt: "Sala de reunião DOMO, com mesa em mármore, cadeiras e televisão.",
  },
  {
    id: "sala-master",
    src: "/images/environments/sala-master-ofc.jpeg",
    alt: "Sala Master do Escritório DOMO, com mesa ampla, seis cadeiras e televisão.",
  },
  {
    id: "escritorio-privativo",
    src: "/images/environments/escritorio-privativo-ofc.jpeg",
    alt: "Escritório privativo DOMO com mesas de trabalho, cadeiras e televisão.",
  },
  {
    id: "escritorio-com-janela",
    src: "/images/environments/escritorio-com-janela-ofc.jpeg",
    alt: "Escritório privativo DOMO com mesa de reunião e janela panorâmica.",
  },
] satisfies RoomCarouselImage[];

export const usageModes = [
  {
    id: "pontual",
    title: "Pontual",
    description: "Salas de reunião por hora",
    image: {
      src: "/images/environments/sala-domo-ofc.jpeg",
      alt: "Sala de reunião DOMO preparada para encontros profissionais.",
    },
  },
  {
    id: "fixo",
    title: "Fixo",
    description: "Escritórios privativos",
    image: {
      src: "/images/environments/escritorio-com-janela-ofc.jpeg",
      alt: "Escritório privativo DOMO com janela panorâmica para trabalho cotidiano.",
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
    description:
      "Circulação organizada, bem iluminada e integrada aos ambientes do Escritório DOMO.",
    image: {
      src: "/images/environments/corredor-ofc.jpeg",
      alt: "Corredor do Escritório DOMO, com iluminação embutida, portas laterais e piso amadeirado.",
    },
  },
  {
    id: "copa",
    index: "03",
    title: "Copa",
    description:
      "Copa equipada com copos, xícaras e frigobar, com água e café disponíveis para apoiar a rotina de trabalho.",
    image: {
      src: "/images/environments/copa-ofc.jpeg",
      alt: "Copa do Escritório DOMO, equipada com frigobar, armários e mesa de apoio.",
    },
  },
] satisfies Environment[];
