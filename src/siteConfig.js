// Default site configuration — editable via /admin-settings
export const DEFAULT_CONFIG = {
  discountPopup: {
    enabled: true,
    percentage: 10,
    message: "Book your first professional cleaning with TrueCare and save. Saskatchewan's most trusted cleaning team — eco-friendly, insured, and reliable.",
    delaySeconds: 2.5,
  },
  services: [
    { id: "regular",      label: "Regular Cleaning",    base: 120, enabled: true },
    { id: "deep",         label: "Deep Cleaning",       base: 220, enabled: true },
    { id: "move",         label: "Move In / Move Out",  base: 250, enabled: true },
    { id: "construction", label: "Post-Construction",   base: 300, enabled: true },
    { id: "office",       label: "Office / Commercial", base: 180, enabled: true },
  ],
  frequencies: [
    { id: "once",     label: "One-Time",  multiplier: 1.0,  enabled: true },
    { id: "weekly",   label: "Weekly",    multiplier: 0.80, enabled: true },
    { id: "biweekly", label: "Bi-Weekly", multiplier: 0.85, enabled: true },
    { id: "monthly",  label: "Monthly",   multiplier: 0.90, enabled: true },
  ],
  extras: [
    { id: "fridge",   label: "Fridge Interior",      price: 35, enabled: true },
    { id: "oven",     label: "Oven Interior",         price: 35, enabled: true },
    { id: "laundry",  label: "Laundry (wash & fold)", price: 45, enabled: true },
    { id: "windows",  label: "Interior Windows",      price: 50, enabled: true },
    { id: "cabinets", label: "Cabinet Interior",      price: 40, enabled: true },
    { id: "garage",   label: "Garage Sweep",          price: 60, enabled: true },
    { id: "balcony",  label: "Balcony / Patio",       price: 30, enabled: true },
    { id: "pets",     label: "Pet Hair Treatment",    price: 25, enabled: true },
  ],
  bedroomPrices: { "1": 0, "2": 30, "3": 60, "4": 90, "5+": 130 },
  bathroomPrices: {
    "0.5": 0, "1": 0, "1.5": 15, "2": 25, "2.5": 35,
    "3": 50, "3.5": 60, "4": 70, "4.5": 80, "5+": 90
  },
};

const STORAGE_KEY = "tc_site_config";
const PIN_KEY = "tc_admin_pin";
const DEFAULT_PIN = "truecare2024";

export function getConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return DEFAULT_CONFIG;
}

export function saveConfig(config) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function getPin() {
  return localStorage.getItem(PIN_KEY) || DEFAULT_PIN;
}

export function savePin(newPin) {
  localStorage.setItem(PIN_KEY, newPin);
}

export function checkPin(pin) {
  return pin === getPin();
}
