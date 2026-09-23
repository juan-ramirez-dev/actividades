export type ActivityStatus = "available" | "sold-out" | "ended";

export type WallpaperActivity = {
  slug: string;
  title: string;
  eyebrow: string;
  salePeriod: string;
  description: string;
  price: number;
  totalWallpapers: number;
  wallpapersSold: number;
  status: ActivityStatus;
  image: string;
  wallpaper: string;
  accent: string;
  details: string[];
  prize: {
    name: string;
    description: string;
    image: string;
  };
};

export const activities: WallpaperActivity[] = [
  {
    slug: "materia-01",
    title: "Materia 01",
    eyebrow: "Actividad 001",
    salePeriod: "22 SEP — 06 OCT · 2026",
    description:
      "Cada wallpaper de esta edición trae un número propio oculto en su composición, asociado al premio de esta actividad: un Toyota Corolla.",
    price: 18000,
    totalWallpapers: 5000,
    wallpapersSold: 3240,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=90",
    accent: "#d3a744",
    details: ["15 días de vigencia", "Formato digital", "Edición limitada"],
    prize: {
      name: "Toyota Corolla",
      description: "El número de esta actividad corresponde a un Toyota Corolla completamente nuevo.",
      image:
        "https://images.unsplash.com/photo-1559385988-439b04de16f8?auto=format&fit=crop&w=1200&q=85",
    },
  },
  {
    slug: "trama-azul",
    title: "Trama Azul",
    eyebrow: "Actividad 002",
    salePeriod: "07 OCT — 21 OCT · 2026",
    description:
      "Tonos profundos y líneas suaves esconden un número propio en cada wallpaper, asociado al premio de esta actividad: un apartamento en el norte de Bogotá.",
    price: 24000,
    totalWallpapers: 5000,
    wallpapersSold: 1865,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=1200&q=90",
    accent: "#b9c7d5",
    details: ["15 días de vigencia", "Alta resolución", "Edición limitada"],
    prize: {
      name: "Apartamento en el norte de Bogotá",
      description: "El número de esta actividad corresponde a un apartamento en el norte de Bogotá, listo para escriturar.",
      image:
        "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&w=1200&q=85",
    },
  },
  {
    slug: "luz-minima",
    title: "Luz Mínima",
    eyebrow: "Actividad 003",
    salePeriod: "22 OCT — 05 NOV · 2026",
    description:
      "Composiciones serenas que además de vestir tu pantalla, traen un número propio asociado al premio de esta actividad: un terreno en Mesitas del Colegio.",
    price: 20000,
    totalWallpapers: 5000,
    wallpapersSold: 742,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=90",
    accent: "#e7e4dc",
    details: ["15 días de vigencia", "Formato digital", "Edición limitada"],
    prize: {
      name: "Terreno en Mesitas del Colegio",
      description: "El número de esta actividad corresponde a un terreno listo para construir, en Mesitas del Colegio.",
      image:
        "https://images.unsplash.com/photo-1586803555480-d98e84e39cf2?auto=format&fit=crop&w=1200&q=85",
    },
  },
  {
    slug: "forma-archivo",
    title: "Forma Archivo",
    eyebrow: "Actividad 004",
    salePeriod: "07 SEP — 21 SEP · 2026",
    description:
      "Una actividad anterior que permanece en el archivo. El número de esta actividad ya quedó asignado y el premio, entregado.",
    price: 16000,
    totalWallpapers: 5000,
    wallpapersSold: 5000,
    status: "ended",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=90",
    accent: "#897a5d",
    details: ["Actividad archivada", "Wallpaper de colección", "Venta finalizada"],
    prize: {
      name: "Automóvil sedán",
      description: "El número de esta actividad correspondía a un automóvil sedán. La actividad ya está archivada.",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85",
    },
  },
];

export function getActivity(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}

export function getActivityProgress(activity: WallpaperActivity) {
  const wallpapersRemaining = Math.max(activity.totalWallpapers - activity.wallpapersSold, 0);
  const percentageSold = Math.min(Math.round((activity.wallpapersSold / activity.totalWallpapers) * 100), 100);

  return { wallpapersRemaining, percentageSold };
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatQuantity(quantity: number) {
  return new Intl.NumberFormat("es-CO").format(quantity);
}
