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
      <section className="grid lg:min-h-[calc(100vh-77px)] lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[320px] bg-cover bg-center lg:min-h-0" style={{ backgroundImage: `linear-gradient(0deg, rgba(17,16,14,.85), rgba(17,16,14,.08) 60%), url(${activity.prize.image})` }} role="img" aria-label={activity.prize.name}>
          <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10"><p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[#c9a34e]">Último paso · Tu número va asociado a</p><p className="display text-4xl leading-[.9] text-[#f2eee6] sm:text-5xl">{activity.prize.name}</p></div>
        </div>
        <div className="flex flex-col justify-center border-t border-white/10 px-6 py-14 sm:px-10 lg:border-l lg:border-t-0 lg:px-16 lg:py-20">
          <div className="mb-10 flex items-center gap-4 border-b border-white/10 pb-8"><div className="h-16 w-16 bg-cover bg-center" style={{ backgroundImage: `url(${activity.wallpaper})` }} /><div><p className="text-sm text-[#f2eee6]">{activity.title}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#938d82]">Fondo de pantalla digital · {formatPrice(activity.price)}</p></div></div>
          <CheckoutForm activity={activity} />
        </div>
      </section>
    </main>
  );
}
