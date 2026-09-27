import Link from "next/link";
import { ArrowUpRight, CalendarDays, Check, Images } from "lucide-react";
import { notFound } from "next/navigation";
import { ActivityAvailability } from "@/components/activity-availability";
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

  const { wallpapersRemaining } = getActivityProgress(activity);
  const purchasable = activity.status === "available" && wallpapersRemaining > 0;

  return (
    <main className="min-h-screen bg-[#11100e]">
      <SiteHeader back />
      <section className="grid lg:min-h-[calc(100vh-77px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative flex min-h-[620px] flex-col justify-end bg-cover bg-center p-4 sm:p-10 lg:min-h-0" style={{ backgroundImage: `linear-gradient(0deg, rgba(17,16,14,.9), rgba(17,16,14,.1) 55%, rgba(17,16,14,.25)), url(${activity.prize.image})` }} role="img" aria-label={activity.prize.name}>
          <div className="max-w-xl"><ActivityAvailability activity={activity} variant="overlay" /></div>
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#c9a34e]">Vigencia · {activity.salePeriod}</p>
          <h1 className="display max-w-xl text-[clamp(3.25rem,13vw,6rem)] leading-[.85]">{activity.title}</h1>
          <p className="mt-9 max-w-md text-base leading-7 text-[#b7b0a5]">{activity.description}</p>
          <div className="my-10 grid gap-5 border-y border-white/10 py-6 text-[11px] uppercase tracking-[0.14em] text-[#d6d0c5] sm:grid-cols-2"><span className="flex items-center gap-3"><CalendarDays size={16} className="text-[#c9a34e]" /> {activity.salePeriod}</span><span className="flex items-center gap-3"><Images size={16} className="text-[#c9a34e]" /> {formatQuantity(wallpapersRemaining)} fondos de pantalla disponibles</span></div>
          <ul className="mb-10 space-y-3">{activity.details.map((detail) => <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-[#d6d0c5]"><Check size={16} className="mt-1 shrink-0 text-[#c9a34e]" /> {detail}</li>)}</ul>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#938d82]">Fondo de pantalla de colección</p><p className="text-2xl text-[#f2eee6]">{formatPrice(activity.price)}</p></div>{purchasable ? <Link href={`/checkout/${activity.slug}`} className="group flex items-center justify-center gap-4 bg-[#c9a34e] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition hover:bg-[#e5c873]">Comprar mi fondo de pantalla <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link> : <span className="border border-white/15 px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-[#938d82]">{activity.status === "ended" ? "Actividad finalizada" : "Agotado"}</span>}</div>
          <p className="mt-7 text-xs leading-5 text-[#716b62]">Nocturna vende el fondo de pantalla. Todo lo asociado a esta actividad es responsabilidad de su organizador, <span className="text-[#938d82]">{activity.organizer.name}</span> ({activity.organizer.contact}). <Link href="/terminos" className="underline underline-offset-2 hover:text-[#c9a34e]">Ver términos y condiciones</Link>.</p>
        </div>
      </section>
    </main>
  );
}
