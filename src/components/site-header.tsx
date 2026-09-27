import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

type SiteHeaderProps = { back?: boolean };

export function SiteHeader({ back = false }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10 lg:px-16">
      {back ? <Link href="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#938d82] transition hover:text-[#c9a34e]"><ArrowLeft size={15} /> Volver al archivo</Link> : <span />}
      <Link href="/" className="display text-2xl tracking-[0.12em]">NOCTURNA<span className="text-[#c9a34e]">.</span></Link>
      <Link href="/mis-fondos" aria-label="Buscar mis fondos de pantalla" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#938d82] transition hover:text-[#c9a34e]"><Mail size={15} strokeWidth={1.5} /><span className="hidden sm:inline">Mis fondos</span></Link>
    </header>
  );
}
