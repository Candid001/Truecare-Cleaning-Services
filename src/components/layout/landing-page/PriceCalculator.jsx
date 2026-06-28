import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Info } from "lucide-react";
import { getConfig } from "../../../siteConfig";

const cfg = getConfig();
const SERVICES        = cfg.services.filter((s) => s.enabled);
const FREQUENCIES     = cfg.frequencies.filter((f) => f.enabled);
const BEDROOM_PRICES  = cfg.bedroomPrices;
const BATHROOM_PRICES = cfg.bathroomPrices;
const EXTRAS          = cfg.extras.filter((e) => e.enabled);

export default function PriceCalculator() {
  const navigate = useNavigate();

  const [service,   setService]   = useState("regular");
  const [frequency, setFrequency] = useState("once");
  const [bedrooms,  setBedrooms]  = useState("2");
  const [bathrooms, setBathrooms] = useState("1");
  const [extras,    setExtras]    = useState([]);

  function toggleExtra(id) {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  }

  const breakdown = useMemo(() => {
    const svc       = SERVICES.find((s) => s.id === service);
    const freq      = FREQUENCIES.find((f) => f.id === frequency);
    const bedroomAdd  = BEDROOM_PRICES[bedrooms]  ?? 0;
    const bathroomAdd = BATHROOM_PRICES[bathrooms] ?? 0;
    const extrasTotal = extras.reduce((sum, id) => {
      const ex = EXTRAS.find((e) => e.id === id);
      return sum + (ex?.price ?? 0);
    }, 0);

    const subtotal = (svc.base + bedroomAdd + bathroomAdd) * freq.multiplier + extrasTotal;
    const tax      = subtotal * 0.05; // 5% GST (SK)
    const total    = subtotal + tax;

    return { base: svc.base, bedroomAdd, bathroomAdd, extrasTotal, subtotal, tax, total, freq };
  }, [service, frequency, bedrooms, bathrooms, extras]);

  function handleBook() {
    navigate("/request-a-quote");
  }

  const selService  = SERVICES.find((s) => s.id === service);
  const selFreq     = FREQUENCIES.find((f) => f.id === frequency);

  return (
    <section style={{ background: "#f0f5ff", padding: "72px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#1A6BFF",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "20px",
            marginBottom: "12px",
          }}>
            Instant Estimate
          </span>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: "800", color: "#0D1B3E", margin: "0 0 10px" }}>
            Get Your Price in Seconds 🚀
          </h2>
          <p style={{ color: "#555", fontSize: "16px", margin: 0 }}>
            Pick your service, size &amp; extras — see an estimate instantly. No commitment needed.
          </p>
        </div>

        {/* Two-col layout */}
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* LEFT — form */}
          <div style={{
            flex: "1 1 500px",
            background: "#fff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}>

            {/* Service */}
            <div style={{ marginBottom: "28px" }}>
              <label style={labelStyle}>Service Type</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "10px", marginTop: "10px" }}>
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: service === s.id ? "2px solid #1A6BFF" : "2px solid #e5e7eb",
                      background: service === s.id ? "#eff6ff" : "#fff",
                      color: service === s.id ? "#1A6BFF" : "#444",
                      fontWeight: service === s.id ? "700" : "500",
                      fontSize: "13px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div style={{ marginBottom: "28px" }}>
              <label style={labelStyle}>Frequency</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                {FREQUENCIES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    style={{
                      padding: "9px 18px",
                      borderRadius: "24px",
                      border: frequency === f.id ? "2px solid #1A6BFF" : "2px solid #e5e7eb",
                      background: frequency === f.id ? "#1A6BFF" : "#fff",
                      color: frequency === f.id ? "#fff" : "#444",
                      fontWeight: "600",
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {f.label}
                    {f.multiplier < 1 && (
                      <span style={{
                        marginLeft: "6px",
                        fontSize: "10px",
                        background: frequency === f.id ? "rgba(255,255,255,0.25)" : "#dcfce7",
                        color: frequency === f.id ? "#fff" : "#16a34a",
                        padding: "1px 6px",
                        borderRadius: "10px",
                        fontWeight: "700",
                      }}>
                        {Math.round((1 - f.multiplier) * 100)}% off
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Bedrooms & Bathrooms */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
              <div>
                <label style={labelStyle}>Bedrooms</label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  style={dropdownStyle}
                >
                  {Object.keys(BEDROOM_PRICES).map((b) => (
                    <option key={b} value={b}>{b} Bedroom{b !== "1" ? "s" : ""}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Bathrooms</label>
                <select
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  style={dropdownStyle}
                >
                  {Object.keys(BATHROOM_PRICES).map((b) => (
                    <option key={b} value={b}>{b} Bathroom{b !== "1" && b !== "0.5" ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extras */}
            <div>
              <label style={labelStyle}>
                Select Extras
                <span style={{ fontWeight: "400", color: "#888", fontSize: "12px", marginLeft: "6px" }}>
                  (optional add-ons)
                </span>
              </label>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "10px",
                marginTop: "10px",
              }}>
                {EXTRAS.map((ex) => {
                  const selected = extras.includes(ex.id);
                  return (
                    <button
                      key={ex.id}
                      onClick={() => toggleExtra(ex.id)}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "12px",
                        border: selected ? "2px solid #1A6BFF" : "2px solid #e5e7eb",
                        background: selected ? "#eff6ff" : "#fafafa",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.15s",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color={selected ? "#1A6BFF" : "#d1d5db"}
                        style={{ flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontSize: "12px", fontWeight: "600", color: selected ? "#1A6BFF" : "#333" }}>
                          {ex.label}
                        </div>
                        <div style={{ fontSize: "11px", color: "#888" }}>+${ex.price}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — summary */}
          <div style={{
            flex: "0 0 300px",
            position: "sticky",
            top: "90px",
          }}>
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
            }}>
              {/* Header */}
              <div style={{
                background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
                padding: "20px 24px",
              }}>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "600", marginBottom: "4px" }}>
                  BOOKING SUMMARY
                </div>
                <div style={{ color: "#fff", fontSize: "13px", marginBottom: "2px" }}>
                  <strong>{selService.label}</strong>
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>
                  {selFreq.label} · {bedrooms} bed · {bathrooms} bath
                </div>
              </div>

              {/* Line items */}
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  <SummaryRow label="Base price" value={`$${selService.base}`} />
                  {breakdown.bedroomAdd > 0 && (
                    <SummaryRow label={`+${bedrooms} bedrooms`} value={`+$${breakdown.bedroomAdd}`} />
                  )}
                  {breakdown.bathroomAdd > 0 && (
                    <SummaryRow label={`+${bathrooms} bathrooms`} value={`+$${breakdown.bathroomAdd}`} />
                  )}
                  {selFreq.multiplier < 1 && (
                    <SummaryRow
                      label={`${selFreq.label} discount`}
                      value={`-${Math.round((1 - selFreq.multiplier) * 100)}%`}
                      green
                    />
                  )}
                  {extras.length > 0 && (
                    <>
                      <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "10px" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#888", marginBottom: "6px" }}>EXTRAS</div>
                        {extras.map((id) => {
                          const ex = EXTRAS.find((e) => e.id === id);
                          return ex ? <SummaryRow key={id} label={ex.label} value={`+$${ex.price}`} /> : null;
                        })}
                      </div>
                    </>
                  )}
                </div>

                <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "14px", marginBottom: "6px" }}>
                  <SummaryRow label="Subtotal" value={`$${breakdown.subtotal.toFixed(2)}`} />
                  <div style={{ marginTop: "4px" }}>
                    <SummaryRow label="GST (5%)" value={`$${breakdown.tax.toFixed(2)}`} />
                  </div>
                </div>

                {/* Total */}
                <div style={{
                  background: "#f0f5ff",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "12px",
                }}>
                  <span style={{ fontWeight: "700", color: "#0D1B3E", fontSize: "15px" }}>TOTAL</span>
                  <span style={{ fontWeight: "900", color: "#1A6BFF", fontSize: "24px" }}>
                    ${breakdown.total.toFixed(2)}
                  </span>
                </div>

                {/* Disclaimer */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginTop: "12px" }}>
                  <Info size={13} color="#aaa" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ fontSize: "11px", color: "#aaa", margin: 0, lineHeight: 1.5 }}>
                    Estimate only. Final price confirmed after property assessment.
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={handleBook}
                  style={{
                    width: "100%",
                    marginTop: "16px",
                    padding: "14px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
                    border: "none",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(26,107,255,0.35)",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Book This Clean →
                </button>

                <a
                  href="https://truecarecleaningservices.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "10px",
                    color: "#1A6BFF",
                    fontSize: "13px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  📅 Or book instantly on Setmore
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── helpers ──────────────────────────────────────────────────────
const labelStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#0D1B3E",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  display: "block",
};

const dropdownStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "11px 14px",
  borderRadius: "10px",
  border: "2px solid #e5e7eb",
  fontSize: "14px",
  fontWeight: "600",
  color: "#0D1B3E",
  background: "#fff",
  outline: "none",
  cursor: "pointer",
  appearance: "auto",
};

function chipStyle(active) {
  return {
    width: "44px",
    height: "36px",
    borderRadius: "8px",
    border: active ? "2px solid #1A6BFF" : "2px solid #e5e7eb",
    background: active ? "#1A6BFF" : "#fff",
    color: active ? "#fff" : "#444",
    fontWeight: "700",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.15s",
  };
}

function SummaryRow({ label, value, green }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "13px", color: "#555" }}>{label}</span>
      <span style={{ fontSize: "13px", fontWeight: "600", color: green ? "#16a34a" : "#222" }}>
        {value}
      </span>
    </div>
  );
}
