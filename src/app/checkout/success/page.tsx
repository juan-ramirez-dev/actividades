"use client";

import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getActivity } from "@/data/activities";
import { findPurchasesByEmail } from "@/lib/storage";

function SuccessContent() {
  const searchParams = useSearchParams();
  const activity = getActivity(searchParams.get("activity") ?? "");
  const email = searchParams.get("email") ?? "";
  const purchase = email ? findPurchasesByEmail(email)[0] : undefined;

  return (
    <main className="min-h-screen bg-[#11100e]"><SiteHeader /><section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center sm:py-36"><div className="mb-9 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a34e] text-[#c9a34e]"><Check size={30} strokeWidth={1} /></div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c9a34e]">Compra confirmada</p><h1 className="display text-6xl leading-[.85] sm:text-8xl">Tu fondo de pantalla<br /><em>ya es tuyo.</em></h1><p className="mt-9 max-w-md text-sm leading-6 text-[#b7b0a5]">Tu compra de <span className="text-[#f2eee6]">{activity?.title ?? "tu fondo de pantalla"}</span> quedó registrada. En una integración real, el archivo llegará a tu correo:</p><p className="mt-3 text-[#c9a34e]">{email}</p>{purchase && <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-[#716b62]">Referencia {purchase.id}</p>}<div className="mt-12 grid w-full gap-3 sm:grid-cols-2"><Link href="/mis-fondos" className="flex items-center justify-center gap-3 bg-[#c9a34e] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition hover:bg-[#e5c873]">Ver mis fondos de pantalla <ArrowRight size={15} /></Link><Link href="/" className="flex items-center justify-center gap-3 border border-white/20 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[#f2eee6] transition hover:border-[#c9a34e] hover:text-[#c9a34e]">Volver al archivo</Link></div><div className="mt-14 flex items-center gap-3 text-xs text-[#716b62]"><Mail size={15} /> Demo local: la compra se guardó en este navegador.</div></section></main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<main className="min-h-screen bg-[#11100e]" />}><SuccessContent /></Suspense>;
}
