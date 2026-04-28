export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matteo Bosshard",
  url: "https://m4tt3o.dev",
  image: "https://m4tt3o.dev/assets/images/headshot.png",
  sameAs: [
    "https://github.com/HardBoss07",
    "https://instagram.com/matteoluca07",
    "https://www.linkedin.com/in/matteo-bosshard-5aa027253/",
    "https://steamcommunity.com/id/m4tt3o_woof/",
  ],
  jobTitle: "Fullstack Software & Application Developer",
  worksFor: {
    "@type": "Organization",
    name: "WISS Schule Zürich",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressRegion: "ZH",
    addressCountry: "CH",
  },
  description:
    "Matteo Bosshard is a Fullstack Software Developer based in Switzerland, specializing in Rust, Java Spring Boot, and React. He is currently an apprentice at WISS Schule Zürich.",
};

export const keywords = [
  "Matteo Bosshard",
  "Software Developer Switzerland",
  "Applikationsentwickler Zürich",
  "Fullstack Developer",
  "Rust",
  "Java Spring Boot",
  "React",
  "TypeScript",
  "Next.js",
  "Portfolio",
];

export const openGraph = {
  type: "website",
  locale: "de_CH",
  alternateLocale: "en_CH",
  url: "https://m4tt3o.dev",
  siteName: "Matteo Bosshard Portfolio",
  title: "Matteo Bosshard | Fullstack Software & Application Developer",
  description:
    "Digital portfolio of Matteo Bosshard, showcasing expertise in Java, Rust, and modern web technologies.",
  images: [
    {
      url: "/assets/images/headshot.png",
      width: 32,
      height: 32,
      alt: "Matteo Bosshard",
    },
  ],
};

export const twitter = {
  card: "summary",
  title: "Matteo Bosshard | Fullstack Software & Application Developer",
  description:
    "Swiss-based Fullstack Software Developer specializing in Java Spring Boot, Rust, and React.",
  images: ["/assets/images/headshot.png"],
};

export const description =
  "Matteo Bosshard is a Swiss-based Fullstack Software Developer specializing in Java Spring Boot, Rust, and React. Discover his portfolio of high-performance applications and enterprise solutions.";
