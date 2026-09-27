"use client";

import { FormEvent, useState } from "react";
import { ArrowDownToLine, Search, Sparkles } from "lucide-react";
import { findPurchasesByEmail, Purchase } from "@/lib/storage";

export function WallpaperLibrary() {
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<Purchase[] | null>(null);

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResults(findPurchasesByEmail(email));
  }

  return <div className="w-full max-w-3xl"><form onSubmit={search} className="flex flex-col gap-3 sm:flex-row"><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="El correo de tu compra" className="min-h-14 flex-1 border-b border-white/20 bg-transparent px-0 text-lg text-[#f2eee6] outline-none placeholder:text-[#5f5a51] focus:border-[#c9a34e]" /><button type="submit" className="flex min-h-14 items-center justify-center gap-3 bg-[#c9a34e] px-6 text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition hover:bg-[#e5c873]"><Search size={16} /> Buscar archivo</button></form>{results === null ? <div className="mt-12 border-t border-white/10 pt-7 text-sm text-[#716b62]">Escribe el correo que usaste al comprar para encontrar tus fondos de pantalla.</div> : results.length === 0 ? <div className="mt-12 border border-white/10 p-8 text-center"><Sparkles size={20} className="mx-auto mb-5 text-[#c9a34e]" strokeWidth={1} /><p className="text-base text-[#f2eee6]">Todavía no encontramos compras con ese correo.</p><p className="mt-2 text-sm text-[#716b62]">Prueba con el correo exacto que usaste en tu compra.</p></div> : <div className="mt-10 grid gap-5 sm:grid-cols-2">{results.map((purchase) => <article key={purchase.id} className="group bg-[#1b1916] p-4"><div className="aspect-[1.25] overflow-hidden bg-[#25211a]" style={{ backgroundImage: `url(${purchase.wallpaper})`, backgroundPosition: "center", backgroundSize: "cover" }} aria-label={`Fondo de pantalla de ${purchase.activityTitle}`} role="img" /><div className="flex items-end justify-between gap-4 pt-5"><div><h2 className="display text-3xl leading-none">{purchase.activityTitle}</h2><p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#716b62]">Referencia {purchase.id}</p></div><a href={purchase.wallpaper} target="_blank" rel="noreferrer" download className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c9a34e] text-[#c9a34e] transition hover:bg-[#c9a34e] hover:text-[#11100e]" aria-label={`Descargar fondo de pantalla de ${purchase.activityTitle}`}><ArrowDownToLine size={16} /></a></div></article>)}</div>}</div>;
}
