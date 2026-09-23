import Link from "next/link";
import { ArrowUpRight, CalendarDays, Images } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { activities, formatPrice, formatQuantity, getActivity, getActivityProgress } from "@/data/activities";

type ActivityPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  const { wallpapersRemaining, percentageSold } = getActivityProgress(activity);
  const purchasable = activity.status === "available" && wallpapersRemaining > 0;

  return (
    <main className="min-h-screen bg-[#11100e]">
      <SiteHeader back />
      <section className="grid lg:min-h-[calc(100vh-77px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[520px] bg-cover bg-center lg:min-h-0" style={{ backgroundImage: `linear-gradient(0deg, rgba(17,16,14,.72), rgba(17,16,14,.08)), url(${activity.image})` }}>
          <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10"><span className="text-[10px] uppercase tracking-[0.24em] text-[#d6d0c5]">{activity.eyebrow}</span><span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-center text-[10px] uppercase tracking-[0.1em] text-[#f2eee6]">{percentageSold}%<br />vendido</span></div>
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#c9a34e]">Vigencia · {activity.salePeriod}</p>
          <h1 className="display max-w-xl text-7xl leading-[.8] sm:text-8xl">{activity.title}</h1>
          <p className="mt-9 max-w-md text-base leading-7 text-[#b7b0a5]">{activity.description}</p>
          <div className="my-10 grid gap-5 border-y border-white/10 py-6 text-[11px] uppercase tracking-[0.14em] text-[#d6d0c5] sm:grid-cols-2"><span className="flex items-center gap-3"><CalendarDays size={16} className="text-[#c9a34e]" /> {activity.salePeriod}</span><span className="flex items-center gap-3"><Images size={16} className="text-[#c9a34e]" /> {formatQuantity(activity.totalWallpapers)} fondos disponibles</span></div>
          <div className="mb-8"><div className="mb-3 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.16em]"><span className="text-[#d6d0c5]">Progreso de la actividad</span><span className="text-[#c9a34e]">{percentageSold}% vendido</span></div><div className="h-2 overflow-hidden bg-white/10"><div className="h-full bg-[#c9a34e] transition-[width]" style={{ width: `${percentageSold}%` }} /></div><div className="mt-3 flex justify-between gap-4 text-xs text-[#938d82]"><span>{formatQuantity(activity.wallpapersSold)} vendidos de {formatQuantity(activity.totalWallpapers)}</span><span>{formatQuantity(wallpapersRemaining)} restantes</span></div></div>
          <div className="mb-8 flex flex-wrap gap-x-5 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-[#938d82]">{activity.details.map((detail) => <span key={detail}>+ {detail}</span>)}</div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#938d82]">Wallpaper de colección</p><p className="text-2xl text-[#f2eee6]">{formatPrice(activity.price)}</p></div>{purchasable ? <Link href={`/checkout/${activity.slug}`} className="group flex items-center justify-center gap-4 bg-[#c9a34e] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition hover:bg-[#e5c873]">Comprar wallpaper <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link> : <span className="border border-white/15 px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-[#938d82]">{activity.status === "ended" ? "Actividad finalizada" : "Agotado"}</span>}</div>
          <p className="mt-7 text-xs leading-5 text-[#716b62]">El archivo se enviará al correo registrado después de la compra. Esta demo guarda la operación solo en este navegador.</p>
        </div>
      </section>
    </main>
  );
}
