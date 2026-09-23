import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { CheckoutForm } from "@/components/checkout-form";
import { activities, formatPrice, getActivity } from "@/data/activities";

export function generateStaticParams() {
  return activities.filter((activity) => activity.status === "available").map((activity) => ({ slug: activity.slug }));
}

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  return (
    <main className="min-h-screen bg-[#11100e]">
      <SiteHeader back />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-16"><div><p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c9a34e]">Último paso / {activity.eyebrow}</p><h1 className="display max-w-md text-6xl leading-[.85] sm:text-8xl">Hazla<br /><em>tuya.</em></h1><p className="mt-8 max-w-sm text-sm leading-6 text-[#938d82]">Completa tus datos. Usaremos tu correo para enviarte el wallpaper después de confirmar la compra.</p><div className="mt-12 flex max-w-sm items-center gap-4 border-t border-white/10 pt-5"><div className="h-16 w-16 bg-cover bg-center" style={{ backgroundImage: `url(${activity.wallpaper})` }} /><div><p className="text-sm text-[#f2eee6]">{activity.title}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#938d82]">Wallpaper digital · {formatPrice(activity.price)}</p></div></div></div><div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16"><CheckoutForm activity={activity} /></div></div>
  </main>
  );
}
