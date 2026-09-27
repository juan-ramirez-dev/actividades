"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WallpaperActivity, formatPrice } from "@/data/activities";
import { createPurchaseId, savePurchase } from "@/lib/storage";

type CheckoutFormProps = { activity: WallpaperActivity };

type FormState = { name: string; email: string; phone: string; accepted: boolean };

export function CheckoutForm({ activity }: CheckoutFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", accepted: false });
  const [error, setError] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  function update(field: keyof FormState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function submit(eventObject: FormEvent<HTMLFormElement>) {
    eventObject.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return setError("Completa todos tus datos para continuar.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Escribe un correo electrónico válido.");
    if (!form.accepted) return setError("Acepta los términos y condiciones para continuar.");

    setIsPaying(true);
    savePurchase({ id: createPurchaseId(), activitySlug: activity.slug, activityTitle: activity.title, wallpaper: activity.wallpaper, buyerName: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), amount: activity.price, purchasedAt: new Date().toISOString() });
    window.setTimeout(() => router.push(`/checkout/success?activity=${activity.slug}&email=${encodeURIComponent(form.email.trim())}`), 650);
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2"><label className="block sm:col-span-2"><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#938d82]">Nombre completo</span><input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Tu nombre" className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-[#f2eee6] outline-none transition placeholder:text-[#5f5a51] focus:border-[#c9a34e]" /></label><label className="block"><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#938d82]">Correo electrónico</span><input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="tu@correo.com" className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-[#f2eee6] outline-none transition placeholder:text-[#5f5a51] focus:border-[#c9a34e]" /></label><label className="block"><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#938d82]">Teléfono</span><input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+57 300 000 0000" className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-[#f2eee6] outline-none transition placeholder:text-[#5f5a51] focus:border-[#c9a34e]" /></label></div>
  <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#938d82]"><input type="checkbox" checked={form.accepted} onChange={(e) => update("accepted", e.target.checked)} className="mt-1 accent-[#c9a34e]" /><span>Acepto los <Link href="/terminos" target="_blank" className="text-[#d6d0c5] underline underline-offset-2 hover:text-[#c9a34e]">términos y condiciones</Link>. Entiendo que compro un fondo de pantalla digital que llegará al correo registrado, y que {activity.organizer.name} es el único responsable de todo lo asociado a la actividad.</span></label>
  {error && <p role="alert" className="border border-red-300/30 bg-red-300/10 px-4 py-3 text-xs text-red-200">{error}</p>}
  <button type="submit" disabled={isPaying} className="flex w-full items-center justify-between bg-[#c9a34e] px-5 py-4 text-left text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition hover:bg-[#e5c873] disabled:cursor-wait disabled:opacity-60"><span>{isPaying ? "Procesando pago..." : `Pagar ${formatPrice(activity.price)}`}</span><span className="flex items-center gap-3"><span className="text-[9px] normal-case tracking-normal">Mercado Pago · demo</span><ArrowUpRight size={16} /></span></button>
  <p className="flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.15em] text-[#5f5a51]"><LockKeyhole size={13} /> Pago seguro · Checkout simulado</p>
    </form>
  );
}
