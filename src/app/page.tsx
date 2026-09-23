import Link from "next/link";
import { ArrowUpRight, ChevronDown, Mail, Play, Sparkles } from "lucide-react";
import { activities, formatPrice, formatQuantity, getActivityProgress } from "@/data/activities";

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <Link href="/" className="display text-2xl tracking-[0.12em]">NOCTURNA<span className="text-[#c9a34e]">.</span></Link>
      <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.24em] text-[#d6d0c5] md:flex">
        <a href="#activities" className="transition-colors hover:text-[#c9a34e]">Actividades</a>
        <Link href="/my-wallpapers" className="transition-colors hover:text-[#c9a34e]">Mis wallpapers</Link>
        <a href="#about" className="transition-colors hover:text-[#c9a34e]">Manifiesto</a>
      </nav>
      <Link href="/my-wallpapers" aria-label="Buscar mis wallpapers" className="flex h-10 items-center gap-2 border border-white/20 px-3 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#c9a34e] hover:text-[#c9a34e] sm:px-4">
        <Mail size={14} strokeWidth={1.5} /> <span className="hidden sm:inline">Buscar compra</span>
      </Link>
    </header>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#11100e]">
      <section className="grain relative flex min-h-[720px] flex-col justify-end bg-[linear-gradient(90deg,rgba(17,16,14,.9),rgba(17,16,14,.24)),url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center px-6 pb-14 pt-32 sm:min-h-[800px] sm:px-10 lg:px-16 lg:pb-20">
        <Header />
        <div className="absolute right-[9%] top-[27%] hidden h-40 w-40 rounded-full border border-[#c9a34e]/50 lg:block" />
        <div className="relative max-w-4xl reveal">
          <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c9a34e]"><span className="h-px w-9 bg-[#c9a34e]" /> Archivo de actividades / 2026</p>
          <h1 className="display max-w-4xl text-[clamp(4.8rem,13vw,11.5rem)] font-medium leading-[.76] tracking-[-0.05em] text-[#f2eee6]">Llévate<br /><em className="text-[#c9a34e]">el archivo.</em></h1>
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xs text-sm leading-6 text-[#d6d0c5]">Wallpapers de colección, liberados por actividades de venta de tiempo limitado. Una imagen para quedarte con lo que ya no vuelve.</p>
            <Link href="#activities" className="group flex w-fit items-center gap-4 border-b border-[#c9a34e] pb-3 text-[11px] uppercase tracking-[0.22em] text-[#f2eee6]">Ver actividades disponibles <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 hidden items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/50 lg:flex"><ChevronDown size={14} /> Desliza para entrar</div>
      </section>

      <section id="activities" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a34e]">El catálogo</p><h2 className="display text-5xl font-medium leading-none sm:text-7xl">Próximas <em className="text-[#c9a34e]">actividades.</em></h2></div>
          <p className="max-w-xs text-sm leading-6 text-[#938d82]">Cada actividad libera un wallpaper exclusivo durante una ventana de tiempo limitada. Cuando termina, la edición se cierra.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {activities.filter((activity) => activity.status !== "ended").map((activity, index) => {
            const { wallpapersRemaining, percentageSold } = getActivityProgress(activity);
            return (
              <Link href={`/activities/${activity.slug}`} key={activity.slug} className={`group relative min-h-[500px] overflow-hidden bg-[#201e1a] ${index === 1 ? "lg:translate-y-12" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" style={{ backgroundImage: `linear-gradient(0deg, rgba(17,16,14,.92), rgba(17,16,14,.06) 70%), url(${activity.image})` }} />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.22em] text-[#d6d0c5]"><span>{activity.eyebrow}</span><span>{activity.salePeriod}</span></div>
                  <div>
                    <h3 className="display text-5xl leading-[.9]">{activity.title}</h3>
                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#d6d0c5]"><span>Progreso</span><span className="text-[#c9a34e]">{percentageSold}% vendido</span></div>
                      <div className="h-1 overflow-hidden bg-white/15"><div className="h-full bg-[#c9a34e]" style={{ width: `${percentageSold}%` }} /></div>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#938d82]">{formatQuantity(activity.wallpapersSold)} vendidos de {formatQuantity(activity.totalWallpapers)} · {formatQuantity(wallpapersRemaining)} restantes</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.16em] text-[#d6d0c5]"><span>{formatPrice(activity.price)}</span><span className="flex items-center gap-2 text-[#c9a34e]">Descubrir <ArrowUpRight size={14} /></span></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#e8e2d7] px-6 py-24 text-[#11100e] sm:px-10 sm:py-32 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-end"><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#887039]">El objeto</p><h2 className="display max-w-md text-6xl leading-[.85] sm:text-8xl">Un archivo,<br /><em>para siempre.</em></h2></div><div className="grid gap-10 sm:grid-cols-2"><div><Sparkles size={21} strokeWidth={1} className="mb-7 text-[#a6812e]" /><h3 className="mb-3 text-sm uppercase tracking-[0.18em]">Colecciones limitadas</h3><p className="text-sm leading-6 text-[#5f5a51]">Cada wallpaper pertenece a una actividad concreta y solo está disponible durante sus fechas.</p></div><div><Mail size={21} strokeWidth={1} className="mb-7 text-[#a6812e]" /><h3 className="mb-3 text-sm uppercase tracking-[0.18em]">Directo a tu correo</h3><p className="text-sm leading-6 text-[#5f5a51]">Después de comprar, recibirás el archivo en el correo que registres. En esta demo, tu compra queda guardada en el navegador.</p></div></div></div>
      </section>

      <section className="flex flex-col items-start justify-between gap-10 px-6 py-24 sm:flex-row sm:items-end sm:px-10 sm:py-28 lg:px-16"><div><p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a34e]">Tu archivo personal</p><h2 className="display max-w-xl text-5xl leading-[.9] sm:text-7xl">¿Ya compraste<br /><em>una señal?</em></h2></div><Link href="/my-wallpapers" className="flex items-center gap-3 border border-[#c9a34e] px-5 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#c9a34e] hover:text-[#11100e]">Buscar mis wallpapers <Play size={13} fill="currentColor" /></Link></section>
      <footer className="flex flex-col justify-between gap-5 border-t border-white/10 px-6 py-7 text-[10px] uppercase tracking-[0.2em] text-[#938d82] sm:flex-row sm:px-10 lg:px-16"><span>© 2026 Nocturna Studio</span><span>Una experiencia digital, sin fecha de vuelta.</span><Link href="/my-wallpapers" className="hover:text-[#c9a34e]">Acceso a tu archivo →</Link></footer>
    </main>
  );
}
