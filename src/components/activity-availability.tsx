import { WallpaperActivity, formatQuantity, getActivityProgress, type AvailabilityTone } from "@/data/activities";

const SEGMENTS = 20;

const toneClasses: Record<AvailabilityTone, string> = {
  open: "border-[#c9a34e]/40 text-[#e5c873]",
  half: "border-[#e5c873]/60 text-[#f2d98f]",
  last: "border-[#f08a5d]/70 bg-[#f08a5d]/15 text-[#ffb08a]",
  out: "border-white/20 text-[#938d82]",
};

type ActivityAvailabilityProps = { activity: WallpaperActivity; variant: "overlay" | "compact" };

function SegmentBar({ percentageSold, tone, thin }: { percentageSold: number; tone: AvailabilityTone; thin?: boolean }) {
  const soldSegments = Math.round((percentageSold / 100) * SEGMENTS);

  return (
    <div className={`grid gap-[3px] ${thin ? "h-1.5" : "h-3"}`} style={{ gridTemplateColumns: `repeat(${SEGMENTS}, minmax(0, 1fr))` }} aria-hidden>
      {Array.from({ length: SEGMENTS }, (_, index) => {
        const sold = index < soldSegments;
        return <span key={index} className={sold ? "bg-white/15" : `bg-[#c9a34e] shadow-[0_0_8px_rgba(201,163,78,.55)] ${tone === "last" ? "animate-pulse" : ""}`} />;
      })}
    </div>
  );
}

function AvailabilityTag({ tone, label }: { tone: AvailabilityTone; label: string }) {
  return <span className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] ${toneClasses[tone]}`}><span className={`h-1.5 w-1.5 rounded-full bg-current ${tone === "last" ? "animate-pulse" : ""}`} />{label}</span>;
}

export function ActivityAvailability({ activity, variant }: ActivityAvailabilityProps) {
  const { wallpapersRemaining, percentageSold, availability } = getActivityProgress(activity);
  const summary = `${formatQuantity(wallpapersRemaining)} de ${formatQuantity(activity.totalWallpapers)} fondos de pantalla disponibles`;

  if (variant === "compact") {
    return (
      <div>
        <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-[#c9a34e]">Asociado a</p>
        <p className="mb-4 text-sm text-[#f2eee6]">{activity.prize.name}</p>
        <SegmentBar percentageSold={percentageSold} tone={availability.tone} thin />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#d6d0c5]" aria-label={summary}>Quedan <span className="text-[#f2eee6]">{formatQuantity(wallpapersRemaining)}</span> fondos</p>
          <AvailabilityTag {...availability} />
        </div>
      </div>
    );
  }

  return (
    <div className="border border-white/15 bg-[#11100e]/70 p-5 backdrop-blur-md sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#c9a34e]">Tu número va asociado a</p>
          <p className="display text-4xl leading-[.9] text-[#f2eee6] sm:text-5xl">{activity.prize.name}</p>
        </div>
        <AvailabilityTag {...availability} />
      </div>
      <div className="mb-4 flex items-end gap-3" aria-label={summary}>
        <span className="display text-6xl leading-[.8] text-[#f2eee6] sm:text-7xl">{formatQuantity(wallpapersRemaining)}</span>
        <span className="pb-1 text-[10px] uppercase leading-4 tracking-[0.16em] text-[#d6d0c5]">fondos de pantalla<br />disponibles de {formatQuantity(activity.totalWallpapers)}</span>
      </div>
      <SegmentBar percentageSold={percentageSold} tone={availability.tone} />
      <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-[#938d82]">
        <span>{percentageSold}% ya tiene dueño</span>
        <span>{activity.eyebrow}</span>
      </div>
    </div>
  );
}
