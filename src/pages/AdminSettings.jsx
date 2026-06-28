import { useState, useEffect } from "react";
import { getConfig, saveConfig, DEFAULT_CONFIG, checkPin } from "../siteConfig";
import { toast } from "sonner";

const BLUE = "#1A6BFF";
const NAVY = "#0D1B3E";

export default function AdminSettings() {
  const [pin, setPin] = useState("");
  const [authed, setAuthed] = useState(false);
  const [config, setConfig] = useState(null);
  const [activeTab, setActiveTab] = useState("popup");
  const [pinError, setPinError] = useState(false);

  useEffect(() => {
    if (authed) setConfig(getConfig());
  }, [authed]);

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

  // ── Auth screen ──
  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", padding: "40px 36px", maxWidth: "380px", width: "100%", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", textAlign: "center" }}>
          <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "26px" }}>🔐</div>
          <h2 style={{ color: NAVY, fontWeight: "800", fontSize: "22px", margin: "0 0 6px" }}>Admin Settings</h2>
          <p style={{ color: "#888", fontSize: "14px", margin: "0 0 28px" }}>Enter your PIN to manage site settings</p>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              style={{ width: "100%", padding: "13px 16px", borderRadius: "12px", border: pinError ? "2px solid #ef4444" : "2px solid #e5e7eb", fontSize: "16px", outline: "none", marginBottom: "8px", boxSizing: "border-box", textAlign: "center", letterSpacing: "6px" }}
              autoFocus
            />
            {pinError && <p style={{ color: "#ef4444", fontSize: "13px", margin: "0 0 10px" }}>Incorrect PIN. Try again.</p>}
            <button type="submit" style={{ width: "100%", padding: "13px", borderRadius: "12px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", marginTop: "6px" }}>
              Unlock →
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!config) return null;

  const tabs = [
    { id: "popup", label: "🎁 Discount Popup" },
    { id: "services", label: "🧹 Services" },
    { id: "extras", label: "✨ Extras" },
    { id: "frequency", label: "📅 Frequency" },
    { id: "rooms", label: "🏠 Room Prices" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f0f5ff" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ color: "#fff", fontWeight: "800", fontSize: "22px", margin: 0 }}>⚙️ Admin Settings</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "4px 0 0" }}>TrueCare Cleaning Services</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleReset} style={{ padding: "9px 18px", borderRadius: "10px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
            Reset Defaults
          </button>
          <button onClick={handleSave} style={{ padding: "9px 22px", borderRadius: "10px", background: "#fff", border: "none", color: BLUE, fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            💾 Save Changes
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 20px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{ padding: "9px 18px", borderRadius: "24px", border: activeTab === t.id ? `2px solid ${BLUE}` : "2px solid #e5e7eb", background: activeTab === t.id ? BLUE : "#fff", color: activeTab === t.id ? "#fff" : "#444", fontWeight: "600", fontSize: "13px", cursor: "pointer", transition: "all 0.15s" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── POPUP TAB ── */}
        {activeTab === "popup" && (
          <Card title="Discount Popup">
            <Row label="Show discount popup to visitors">
              <Toggle
                value={config.discountPopup.enabled}
                onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, enabled: v } })}
              />
            </Row>
            <Row label="Discount percentage (%)">
              <NumInput
                value={config.discountPopup.percentage}
                onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, percentage: v } })}
                min={1} max={100}
              />
            </Row>
            <Row label="Popup delay (seconds)">
              <NumInput
                value={config.discountPopup.delaySeconds}
                onChange={(v) => setConfig({ ...config, discountPopup: { ...config.discountPopup, delaySeconds: v } })}
                min={0} max={60} step={0.5}
              />
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
                  <Toggle
                    value={svc.enabled}
                    onChange={(v) => {
                      const services = [...config.services];
                      services[i] = { ...services[i], enabled: v };
                      setConfig({ ...config, services });
                    }}
                  />
                  <span style={{ fontWeight: "600", color: svc.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{svc.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#888", fontSize: "13px" }}>Base:</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#555", fontWeight: "600" }}>$</span>
                    <NumInput
                      value={svc.base}
                      onChange={(v) => {
                        const services = [...config.services];
                        services[i] = { ...services[i], base: v };
                        setConfig({ ...config, services });
                      }}
                      min={0} max={9999}
                    />
                  </div>
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
                  <Toggle
                    value={ex.enabled}
                    onChange={(v) => {
                      const extras = [...config.extras];
                      extras[i] = { ...extras[i], enabled: v };
                      setConfig({ ...config, extras });
                    }}
                  />
                  <span style={{ fontWeight: "600", color: ex.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{ex.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#888", fontSize: "13px" }}>Price:</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#555", fontWeight: "600" }}>$</span>
                    <NumInput
                      value={ex.price}
                      onChange={(v) => {
                        const extras = [...config.extras];
                        extras[i] = { ...extras[i], price: v };
                        setConfig({ ...config, extras });
                      }}
                      min={0} max={9999}
                    />
                  </div>
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
                  <Toggle
                    value={freq.enabled}
                    onChange={(v) => {
                      const frequencies = [...config.frequencies];
                      frequencies[i] = { ...frequencies[i], enabled: v };
                      setConfig({ ...config, frequencies });
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: "600", color: freq.enabled ? NAVY : "#aaa", fontSize: "14px" }}>{freq.label}</div>
                    {freq.multiplier < 1 && (
                      <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: "600" }}>
                        {Math.round((1 - freq.multiplier) * 100)}% discount
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#888", fontSize: "13px" }}>Multiplier:</span>
                  <NumInput
                    value={freq.multiplier}
                    onChange={(v) => {
                      const frequencies = [...config.frequencies];
                      frequencies[i] = { ...frequencies[i], multiplier: Math.min(1, Math.max(0, v)) };
                      setConfig({ ...config, frequencies });
                    }}
                    min={0} max={1} step={0.05}
                  />
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
                    <NumInput
                      value={val}
                      onChange={(v) => setConfig({ ...config, bedroomPrices: { ...config.bedroomPrices, [key]: v } })}
                      min={0} max={9999}
                    />
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
                    <NumInput
                      value={val}
                      onChange={(v) => setConfig({ ...config, bathroomPrices: { ...config.bathroomPrices, [key]: v } })}
                      min={0} max={9999}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Save button at bottom */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button onClick={handleSave} style={{ padding: "14px 40px", borderRadius: "14px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 8px 24px rgba(26,107,255,0.35)" }}>
            💾 Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Reusable components ──

function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
      <h3 style={{ color: NAVY, fontWeight: "800", fontSize: "17px", margin: "0 0 20px" }}>{title}</h3>
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
