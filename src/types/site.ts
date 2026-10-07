export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type SiteImage = {
  src: string;
  alt: string;
};

export type RoomCarouselImage = SiteImage & {
  id: string;
};

export type UsageMode = {
  id: "pontual" | "fixo";
  title: string;
  description: string;
  image: SiteImage;
};

export type Environment = {
  id: "recepcao" | "corredor" | "copa";
  index: string;
  title: string;
  description: string;
  image?: SiteImage;
};
