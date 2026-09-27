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
  organizer: {
    name: string;
    contact: string;
  };
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
      "Cada fondo de pantalla de esta edición trae un número único oculto en su composición. Esta actividad está respaldada por un Toyota Corolla 0 km.",
    price: 18000,
    totalWallpapers: 5000,
    wallpapersSold: 3240,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=90",
    accent: "#d3a744",
    details: [
      "Cada fondo trae un número único asociado al Toyota Corolla",
      "Más fondos de pantalla, más números a tu nombre",
      "Cuando se agoten, la actividad se cierra",
    ],
    organizer: { name: "Inversiones Andina S.A.S.", contact: "actividades@andina.example · WhatsApp +57 300 000 0001" },
    prize: {
      name: "Toyota Corolla",
      description: "Un Toyota Corolla completamente nuevo respalda esta actividad.",
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
      "Tonos profundos y líneas suaves esconden un número único en cada fondo de pantalla. Esta actividad está respaldada por un apartamento en el norte de Bogotá.",
    price: 24000,
    totalWallpapers: 5000,
    wallpapersSold: 1865,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=1200&q=90",
    accent: "#b9c7d5",
    details: [
      "Cada fondo trae un número único asociado al apartamento",
      "Más fondos de pantalla, más números a tu nombre",
      "Cuando se agoten, la actividad se cierra",
    ],
    organizer: { name: "Grupo Inmobiliario Sabana S.A.S.", contact: "hola@sabana.example · WhatsApp +57 300 000 0002" },
    prize: {
      name: "Apartamento en el norte de Bogotá",
      description: "Un apartamento en el norte de Bogotá, listo para escriturar, respalda esta actividad.",
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
      "Composiciones serenas que, además de vestir tu pantalla, traen un número único. Esta actividad está respaldada por un terreno en Mesitas del Colegio.",
    price: 20000,
    totalWallpapers: 5000,
    wallpapersSold: 742,
    status: "available",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=90",
    accent: "#e7e4dc",
    details: [
      "Cada fondo trae un número único asociado al terreno",
      "Más fondos de pantalla, más números a tu nombre",
      "Cuando se agoten, la actividad se cierra",
    ],
    organizer: { name: "Tierras del Tequendama S.A.S.", contact: "contacto@tequendama.example · WhatsApp +57 300 000 0003" },
    prize: {
      name: "Terreno en Mesitas del Colegio",
      description: "Un terreno listo para construir en Mesitas del Colegio respalda esta actividad.",
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
      "Una actividad anterior que permanece en el archivo. Todos sus fondos de pantalla ya tienen dueño y el organizador cerró la actividad.",
    price: 16000,
    totalWallpapers: 5000,
    wallpapersSold: 5000,
    status: "ended",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1800&q=85",
    wallpaper:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=90",
    accent: "#897a5d",
    details: ["Actividad archivada", "Fondo de pantalla de colección", "Venta finalizada"],
    organizer: { name: "Inversiones Andina S.A.S.", contact: "actividades@andina.example · WhatsApp +57 300 000 0001" },
    prize: {
      name: "Automóvil sedán",
      description: "Esta actividad estuvo respaldada por un automóvil sedán. Ya está archivada.",
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

  return { wallpapersRemaining, percentageSold, availability: getAvailability(wallpapersRemaining, percentageSold) };
}

export type AvailabilityTone = "open" | "half" | "last" | "out";

function getAvailability(wallpapersRemaining: number, percentageSold: number): { tone: AvailabilityTone; label: string } {
  if (wallpapersRemaining === 0) return { tone: "out", label: "Agotado" };
  if (percentageSold > 80) return { tone: "last", label: "Últimos fondos de pantalla" };
  if (percentageSold >= 50) return { tone: "half", label: "Más de la mitad ya tiene dueño" };
  return { tone: "open", label: "Aún hay fondos disponibles" };
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
