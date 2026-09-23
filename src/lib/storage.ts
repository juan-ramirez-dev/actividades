export type Purchase = {
  id: string;
  activitySlug: string;
  activityTitle: string;
  wallpaper: string;
  buyerName: string;
  email: string;
  phone: string;
  amount: number;
  purchasedAt: string;
};

const PURCHASES_KEY = "nocturna-purchases";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function getPurchases(): Purchase[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem(PURCHASES_KEY);
    return saved ? (JSON.parse(saved) as Purchase[]) : [];
  } catch {
    return [];
  }
}

export function savePurchase(purchase: Purchase) {
  const purchases = getPurchases();
  window.localStorage.setItem(PURCHASES_KEY, JSON.stringify([purchase, ...purchases]));
}

export function findPurchasesByEmail(email: string) {
  const normalized = normalizeEmail(email);
  return getPurchases().filter((purchase) => normalizeEmail(purchase.email) === normalized);
}

export function createPurchaseId() {
  return `NOC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
