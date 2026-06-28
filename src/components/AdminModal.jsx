import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { getConfig, saveConfig, DEFAULT_CONFIG, checkPin, savePin } from "../siteConfig";
import { toast } from "sonner";

const BLUE = "#1A6BFF";
const NAVY = "#0D1B3E";

export default function AdminModal({ open, onClose }) {
  const [pin, setPin] = useState("");
  const [authed, setAuthed] = useState(false);
  const [config, setConfig] = useState(null);
  const [activeTab, setActiveTab] = useState("popup");
  const [pinError, setPinError] = useState(false);
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinChangeError, setPinChangeError] = useState("");

  useEffect(() => {
    if (authed) setConfig(getConfig());
  }, [authed]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setPin("");
      setAuthed(false);
      setConfig(null);
      setPinError(false);
      setActiveTab("popup");
      setNewPin("");
      setConfirmPin("");
      setPinChangeError("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  function handlePinSubmit(e) {
    e.preventDefault();
    if (checkPin(pin)) {
      setAuthed(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  }

  function handleSave() {
    saveConfig(config);
    toast.success("Settings saved! Refresh the site to see changes.");
  }

  function handleReset() {
    if (confirm("Reset all settings to default?")) {
      setConfig(DEFAULT_CONFIG);
      saveConfig(DEFAULT_CONFIG);
      toast.success("Reset to defaults.");
    }
  }

  function handlePinChange(e) {
    e.preventDefault();
    if (newPin.length < 4) {
      setPinChangeError("PIN must be at least 4 characters.");
      return;
    }
    if (newPin !== confirmPin) {
      setPinChangeError("PINs don't match.");
      return;
    }
    savePin(newPin);
    setNewPin("");
    setConfirmPin("");
    setPinChangeError("");
    toast.success("PIN changed successfully!");
  }

  const modal = (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.55)", display: "flex",
        alignItems: "center", justifyContent: "center",
        padding: "16px", backdropFilter: "blur(4px)"
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#f0f5ff", borderRadius: "20px",
          width: "100%", maxWidth: authed ? "860px" : "380px",
          maxHeight: "90vh", overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          position: "relative"
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "14px", right: "16px",
            background: "rgba(255,255,255,0.2)", border: "none",
            color: authed ? "#fff" : "#888", fontSize: "20px",
            cursor: "pointer", width: "32px", height: "32px",
            borderRadius: "50%", display: "flex", alignItems: "center",
            justifyContent: "center", zIndex: 1, lineHeight: 1
          }}
        >
          ✕
        </button>

        {/* ── PIN screen ── */}
        {!authed && (
          <div style={{ padding: "40px 36px", textAlign: "center" }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "16px",
              background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px", fontSize: "26px"
            }}>🔐</div>
            <h2 style={{ color: NAVY, fontWeight: "800", fontSize: "22px", margin: "0 0 6px" }}>Admin Settings</h2>
            <p style={{ color: "#888", fontSize: "14px", margin: "0 0 28px" }}>Enter your PIN to manage site settings</p>
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                style={{
                  width: "100%", padding: "13px 16px", borderRadius: "12px",
                  border: pinError ? "2px solid #ef4444" : "2px solid #e5e7eb",
                  fontSize: "16px", outline: "none", marginBottom: "8px",
                  boxSizing: "border-box", textAlign: "center", letterSpacing: "6px"
                }}
                autoFocus
              />
              {pinError && <p style={{ color: "#ef4444", fontSize: "13px", margin: "0 0 10px" }}>Incorrect PIN. Try again.</p>}
              <button
                type="submit"
                style={{
                  width: "100%", padding: "13px", borderRadius: "12px",
                  background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
                  border: "none", color: "#fff", fontSize: "15px",
                  fontWeight: "700", cursor: "pointer", marginTop: "6px"
                }}
              >
                Unlock →
              </button>
            </form>
          </div>
        )}

        {/* ── Settings screen ── */}
        {authed && config && (
          <>
            {/* Header */}
            <div style={{
              background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
              padding: "24px 28px", display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
              borderRadius: "20px 20px 0 0"
            }}>
              <div>
                <h1 style={{ color: "#fff", fontWeight: "800", fontSize: "20px", margin: 0 }}>⚙️ Admin Settings</h1>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "4px 0 0" }}>TrueCare Cleaning Services</p>
              </div>
              <div style={{ display: "flex", gap: "10px", paddingRight: "36px" }}>
                <button
                  onClick={handleReset}
                  style={{ padding: "9px 18px", borderRadius: "10px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}
                >
                  Reset Defaults
                </button>
                <button
                  onClick={handleSave}
                  style={{ padding: "9px 22px", borderRadius: "10px", background: "#fff", border: "none", color: BLUE, fontSize: "13px", fontWeight: "700", cursor: "pointer" }}
                >
                  💾 Save Changes
                </button>
              </div>
            </div>

            <div style={{ padding: "24px 20px" }}>
              {/* Tabs */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                {[
                  { id: "popup", label: "🎁 Discount Popup" },
                  { id: "services", label: "🧹 Services" },
                  { id: "extras", label: "✨ Extras" },
                  { id: "frequency", label: "📅 Frequency" },
                  { id: "rooms", label: "🏠 Room Prices" },
                  { id: "security", label: "🔑 Security" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      padding: "9px 18px", borderRadius: "24px",
                      border: activeTab === t.id ? `2px solid ${BLUE}` : "2px solid #e5e7eb",
                      background: activeTab === t.id ? BLUE : "#fff",
                      color: activeTab === t.id ? "#fff" : "#444",
                      fontWeight: "600", fontSize: "13px", cursor: "pointer", transition: "all 0.15s"
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* ── POPUP TAB ── */}
              {activeTab === "popup" && (
                <Card title="Discount Popup">
                  <Row label="Show discount popup to visitors">
                    <Toggle value={config.discountPopup.enabled} onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, enabled: v } })} />
                  </Row>
                  <Row label="Discount percentage (%)">
                    <NumInput value={config.discountPopup.percentage} onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, percentage: v } })} min={1} max={100} />
                  </Row>
                  <Row label="Popup delay (seconds)">
                    <NumInput value={config.discountPopup.delaySeconds} onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, delaySeconds: v } })} min={0} max={60} step={0.5} />
                  </Row>
                  <Row label="Popup message" vertical>
                    <textarea
                      value={config.discountPopup.message}
                      onChange={(e) => setConfig({ ...config, discountPopup: { ...config.discountPopup, message: e.target.value } })}
                      rows={3}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "14px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box", outline: "none" }}
                    />
                  </Row>
                  {!config.discountPopup.enabled && (
                    <div style={{ background: "#fef3c7", borderRadius: "10px", padding: "12px 16px", marginTop: "8px", fontSize: "13px", color: "#92400e" }}>
                      ⚠️ Popup is currently <strong>disabled</strong> — visitors won't see it.
                    </div>
                  )}
                </Card>
              )}

              {/* ── SERVICES TAB ── */}
              {activeTab === "services" && (
                <Card title="Service Types & Base Prices">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Toggle services on/off and set their base price (CAD).</p>
                  {config.services.map((svc, i) => (
                    <div key={svc.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < config.services.length - 1 ? "1px solid #f0f0f0" : "none", gap: "12px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <Toggle value={svc.enabled} onChange={(v) => { const s = [...config.services]; s[i] = { ...s[i], enabled: v }; setConfig({ ...config, services: s }); }} />
                        <span style={{ fontWeight: "600", color: svc.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{svc.label}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#888", fontSize: "13px" }}>Base: $</span>
                        <NumInput value={svc.base} onChange={(v) => { const s = [...config.services]; s[i] = { ...s[i], base: v }; setConfig({ ...config, services: s }); }} min={0} max={9999} />
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {/* ── EXTRAS TAB ── */}
              {activeTab === "extras" && (
                <Card title="Add-On Extras">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Toggle extras on/off and set their price (CAD).</p>
                  {config.extras.map((ex, i) => (
                    <div key={ex.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < config.extras.length - 1 ? "1px solid #f0f0f0" : "none", gap: "12px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <Toggle value={ex.enabled} onChange={(v) => { const e2 = [...config.extras]; e2[i] = { ...e2[i], enabled: v }; setConfig({ ...config, extras: e2 }); }} />
                        <span style={{ fontWeight: "600", color: ex.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{ex.label}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#888", fontSize: "13px" }}>Price: $</span>
                        <NumInput value={ex.price} onChange={(v) => { const e2 = [...config.extras]; e2[i] = { ...e2[i], price: v }; setConfig({ ...config, extras: e2 }); }} min={0} max={9999} />
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {/* ── FREQUENCY TAB ── */}
              {activeTab === "frequency" && (
                <Card title="Cleaning Frequency & Discounts">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Set multiplier for each frequency. 1.0 = full price, 0.8 = 20% off.</p>
                  {config.frequencies.map((freq, i) => (
                    <div key={freq.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < config.frequencies.length - 1 ? "1px solid #f0f0f0" : "none", gap: "12px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <Toggle value={freq.enabled} onChange={(v) => { const f = [...config.frequencies]; f[i] = { ...f[i], enabled: v }; setConfig({ ...config, frequencies: f }); }} />
                        <div>
                          <div style={{ fontWeight: "600", color: freq.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{freq.label}</div>
                          {freq.multiplier < 1 && <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: "600" }}>{Math.round((1 - freq.multiplier) * 100)}% discount</div>}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#888", fontSize: "13px" }}>Multiplier:</span>
                        <NumInput value={freq.multiplier} onChange={(v) => { const f = [...config.frequencies]; f[i] = { ...f[i], multiplier: Math.min(1, Math.max(0, v)) }; setConfig({ ...config, frequencies: f }); }} min={0} max={1} step={0.05} />
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {/* ── ROOMS TAB ── */}
              {activeTab === "rooms" && (
                <Card title="Room Add-On Prices">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Extra cost added per bedroom/bathroom count.</p>
                  <div style={{ marginBottom: "28px" }}>
                    <h4 style={{ color: NAVY, fontWeight: "700", fontSize: "14px", margin: "0 0 14px" }}>🛏 Bedrooms</h4>
                    {Object.entries(config.bedroomPrices).map(([key, val]) => (
                      <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: "12px" }}>
                        <span style={{ fontWeight: "600", color: NAVY, fontSize: "14px" }}>{key} bedroom{key !== "1" ? "s" : ""}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <span style={{ color: "#555", fontWeight: "600" }}>+$</span>
                          <NumInput value={val} onChange={(v) => setConfig({ ...config, bedroomPrices: { ...config.bedroomPrices, [key]: v } })} min={0} max={9999} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ color: NAVY, fontWeight: "700", fontSize: "14px", margin: "0 0 14px" }}>🚿 Bathrooms</h4>
                    {Object.entries(config.bathroomPrices).map(([key, val]) => (
                      <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: "12px" }}>
                        <span style={{ fontWeight: "600", color: NAVY, fontSize: "14px" }}>{key} bathroom{key !== "1" ? "s" : ""}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <span style={{ color: "#555", fontWeight: "600" }}>+$</span>
                          <NumInput value={val} onChange={(v) => setConfig({ ...config, bathroomPrices: { ...config.bathroomPrices, [key]: v } })} min={0} max={9999} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* ── SECURITY TAB ── */}
              {activeTab === "security" && (
                <Card title="Change Admin PIN">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Update the PIN used to access this admin panel. Min 4 characters.</p>
                  <form onSubmit={handlePinChange} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontWeight: "600", color: "#444", fontSize: "13px", marginBottom: "6px" }}>New PIN</label>
                      <input
                        type="password"
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="Enter new PIN"
                        style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "15px", outline: "none", boxSizing: "border-box", letterSpacing: "4px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontWeight: "600", color: "#444", fontSize: "13px", marginBottom: "6px" }}>Confirm New PIN</label>
                      <input
                        type="password"
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value)}
                        placeholder="Repeat new PIN"
                        style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "15px", outline: "none", boxSizing: "border-box", letterSpacing: "4px" }}
                      />
                    </div>
                    {pinChangeError && (
                      <p style={{ color: "#ef4444", fontSize: "13px", margin: 0 }}>{pinChangeError}</p>
                    )}
                    <button
                      type="submit"
                      style={{ padding: "12px 28px", borderRadius: "12px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", alignSelf: "flex-start" }}
                    >
                      🔑 Update PIN
                    </button>
                  </form>
                </Card>
              )}

              {activeTab !== "security" && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button
                    onClick={handleSave}
                    style={{ padding: "14px 40px", borderRadius: "14px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 8px 24px rgba(26,107,255,0.35)" }}
                  >
                    💾 Save All Changes
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "16px" }}>
      <h3 style={{ color: NAVY, fontWeight: "800", fontSize: "17px", margin: "0 0 16px" }}>{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, children, vertical }) {
  return (
    <div style={{ display: "flex", alignItems: vertical ? "flex-start" : "center", justifyContent: "space-between", flexDirection: vertical ? "column" : "row", padding: "12px 0", borderBottom: "1px solid #f5f5f5", gap: "10px" }}>
      <span style={{ fontWeight: "600", color: "#444", fontSize: "14px", flex: 1 }}>{label}</span>
      <div style={{ width: vertical ? "100%" : "auto" }}>{children}</div>
    </div>
  );
}

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{ width: "46px", height: "26px", borderRadius: "13px", background: value ? BLUE : "#d1d5db", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}
    >
      <div style={{ position: "absolute", top: "3px", left: value ? "23px" : "3px", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
    </button>
  );
}

function NumInput({ value, onChange, min = 0, max = 9999, step = 1 }) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      style={{ width: "80px", padding: "7px 10px", borderRadius: "8px", border: "2px solid #e5e7eb", fontSize: "14px", fontWeight: "600", color: NAVY, outline: "none", textAlign: "center" }}
    />
  );
}
