import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { getConfig } from "../siteConfig";

export default function DiscountPopup() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const cfg = getConfig().discountPopup;

  useEffect(() => {
    if (!cfg.enabled) return;
    const alreadySeen = sessionStorage.getItem("tc_popup_seen");
    if (alreadySeen) return;
    const timer = setTimeout(() => setVisible(true), (cfg.delaySeconds ?? 2.5) * 1000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem("tc_popup_seen", "1");
  }

  function handleCTA() {
    close();
    navigate("/request-a-quote");
  }

  if (!cfg.enabled || !visible) return null;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)", padding: "20px", animation: "fadeInBg 0.3s ease" }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div style={{ background: "#fff", borderRadius: "24px", width: "100%", maxWidth: "420px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)", position: "relative" }}>
        {/* Top banner */}
        <div style={{ background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)", padding: "36px 28px 28px", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", borderRadius: "20px", padding: "4px 14px", marginBottom: "12px" }}>
            <span style={{ color: "#fff", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>Limited Time Offer</span>
          </div>
          <div style={{ marginBottom: "6px" }}>
            <span style={{ fontSize: "72px", fontWeight: "900", color: "#fff", lineHeight: 1 }}>{cfg.percentage}%</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", fontWeight: "600" }}>OFF Your First Clean</div>
          <div style={{ marginTop: "14px", display: "flex", justifyContent: "center", gap: "6px" }}>
            {["#fff", "rgba(255,255,255,0.5)", "#fff"].map((c, i) => (
              <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: c, display: "inline-block" }} />
            ))}
          </div>
        </div>

        {/* Bottom content */}
        <div style={{ padding: "24px 28px 28px" }}>
          <p style={{ textAlign: "center", color: "#555", fontSize: "14px", lineHeight: 1.6, margin: "0 0 20px" }}>{cfg.message}</p>
          <button onClick={handleCTA} style={{ width: "100%", padding: "14px", borderRadius: "14px", background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)", border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 16px rgba(26,107,255,0.35)" }}>
            Claim My {cfg.percentage}% Discount →
          </button>
          <button onClick={close} style={{ width: "100%", marginTop: "10px", padding: "10px", background: "none", border: "none", color: "#aaa", fontSize: "13px", cursor: "pointer" }}>
            No thanks, I'll pay full price
          </button>
        </div>

        {/* Close X */}
        <button onClick={close} style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <X size={16} color="white" />
        </button>
      </div>

      <style>{`
        @keyframes fadeInBg { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
