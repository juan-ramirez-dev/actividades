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
};

export const activities: WallpaperActivity[] = [
  {
    slug: "materia-01",
    title: "Materia 01",
    eyebrow: "Actividad 001",
    salePeriod: "22 SEP — 06 OCT · 2026",
    description:
      "Una edición digital de formas, textura y color para llevar a tu pantalla durante una ventana limitada.",
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
  },
  {
    slug: "trama-azul",
    title: "Trama Azul",
    eyebrow: "Actividad 002",
    salePeriod: "07 OCT — 21 OCT · 2026",
    description:
      "Una colección de tonos profundos y líneas suaves creada para acompañar los espacios que habitas cada día.",
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
  },
  {
    slug: "luz-minima",
    title: "Luz Mínima",
    eyebrow: "Actividad 003",
    salePeriod: "22 OCT — 05 NOV · 2026",
    description:
      "Composiciones serenas que convierten una pantalla cotidiana en una pieza visual personal.",
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
  },
  {
    slug: "forma-archivo",
    title: "Forma Archivo",
    eyebrow: "Actividad 004",
    salePeriod: "07 SEP — 21 SEP · 2026",
    description:
      "Una actividad anterior que permanece en el archivo como parte de la colección digital.",
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
