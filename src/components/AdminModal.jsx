import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { getConfig, saveConfig, DEFAULT_CONFIG, checkPin, savePin } from "../siteConfig";
import { toast } from "sonner";

const BLUE = "#1A6BFF";
const NAVY = "#0D1B3E";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function AdminModal({ open, onClose }) {
  const [pin, setPin] = useState("");
  const [authed, setAuthed] = useState(false);
  const [config, setConfig] = useState(null);
  const [activeTab, setActiveTab] = useState("popup");
  const [pinError, setPinError] = useState(false);
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinChangeError, setPinChangeError] = useState("");

  useEffect(() => { if (authed) setConfig(getConfig()); }, [authed]);

  useEffect(() => {
    if (!open) {
      setPin(""); setAuthed(false); setConfig(null);
      setPinError(false); setActiveTab("popup");
      setNewPin(""); setConfirmPin(""); setPinChangeError("");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  function handlePinSubmit(e) {
    e.preventDefault();
    if (checkPin(pin)) { setAuthed(true); setPinError(false); }
    else setPinError(true);
  }

  function handleSave() {
    saveConfig(config);
    toast.success("Saved! Refresh to see changes.");
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
    if (newPin.length < 4) { setPinChangeError("PIN must be at least 4 characters."); return; }
    if (newPin !== confirmPin) { setPinChangeError("PINs don't match."); return; }
    savePin(newPin);
    setNewPin(""); setConfirmPin(""); setPinChangeError("");
    toast.success("PIN changed!");
  }

  // ── helpers ──
  const upd = (patch) => setConfig((c) => ({ ...c, ...patch }));

  // Services
  function addService() {
    const s = [...config.services, { id: uid(), label: "New Service", base: 100, enabled: true }];
    upd({ services: s });
  }
  function removeService(i) {
    const s = config.services.filter((_, idx) => idx !== i);
    upd({ services: s });
  }
  function updateService(i, patch) {
    const s = [...config.services]; s[i] = { ...s[i], ...patch }; upd({ services: s });
  }

  // Extras
  function addExtra() {
    const e = [...config.extras, { id: uid(), label: "New Extra", price: 30, enabled: true }];
    upd({ extras: e });
  }
  function removeExtra(i) {
    const e = config.extras.filter((_, idx) => idx !== i);
    upd({ extras: e });
  }
  function updateExtra(i, patch) {
    const e = [...config.extras]; e[i] = { ...e[i], ...patch }; upd({ extras: e });
  }

  // Frequencies
  function addFrequency() {
    const f = [...config.frequencies, { id: uid(), label: "New Frequency", multiplier: 0.9, enabled: true }];
    upd({ frequencies: f });
  }
  function removeFrequency(i) {
    const f = config.frequencies.filter((_, idx) => idx !== i);
    upd({ frequencies: f });
  }
  function updateFrequency(i, patch) {
    const f = [...config.frequencies]; f[i] = { ...f[i], ...patch }; upd({ frequencies: f });
  }

  // Bedroom prices
  function addBedroomTier() {
    const key = prompt("Bedroom count label (e.g. 6 or 6+):");
    if (!key || key.trim() === "") return;
    upd({ bedroomPrices: { ...config.bedroomPrices, [key.trim()]: 0 } });
  }
  function removeBedroomTier(key) {
    const bp = { ...config.bedroomPrices }; delete bp[key]; upd({ bedroomPrices: bp });
  }

  // Bathroom prices
  function addBathroomTier() {
    const key = prompt("Bathroom count label (e.g. 5 or 5.5):");
    if (!key || key.trim() === "") return;
    upd({ bathroomPrices: { ...config.bathroomPrices, [key.trim()]: 0 } });
  }
  function removeBathroomTier(key) {
    const bp = { ...config.bathroomPrices }; delete bp[key]; upd({ bathroomPrices: bp });
  }

  const modal = (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.55)", display: "flex",
        alignItems: authed ? "flex-start" : "center", justifyContent: "center",
        padding: authed ? "0" : "16px", backdropFilter: "blur(4px)",
        overflowY: authed ? "auto" : "hidden",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#f0f5ff", borderRadius: authed ? "0" : "20px",
        width: "100%", maxWidth: authed ? "860px" : "380px",
        minHeight: authed ? "100dvh" : "auto",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        position: "relative", margin: authed ? "0 auto" : undefined,
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: "absolute", top: "14px", right: "16px",
          background: "rgba(255,255,255,0.2)", border: "none",
          color: authed ? "#fff" : "#888", fontSize: "20px", cursor: "pointer",
          width: "32px", height: "32px", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
        }}>✕</button>

        {/* ── PIN ── */}
        {!authed && (
          <div style={{ padding: "40px 36px", textAlign: "center" }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "16px",
              background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px", fontSize: "26px"
            }}>🔐</div>
            <h2 style={{ color: NAVY, fontWeight: "800", fontSize: "22px", margin: "0 0 6px" }}>Admin Settings</h2>
            <p style={{ color: "#888", fontSize: "14px", margin: "0 0 28px" }}>Enter your PIN to continue</p>
            <form onSubmit={handlePinSubmit}>
              <input type="password" value={pin} onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN" autoFocus
                style={{
                  width: "100%", padding: "13px 16px", borderRadius: "12px",
                  border: pinError ? "2px solid #ef4444" : "2px solid #e5e7eb",
                  fontSize: "16px", outline: "none", marginBottom: "8px",
                  boxSizing: "border-box", textAlign: "center", letterSpacing: "6px"
                }} />
              {pinError && <p style={{ color: "#ef4444", fontSize: "13px", margin: "0 0 10px" }}>Wrong PIN.</p>}
              <button type="submit" style={{
                width: "100%", padding: "13px", borderRadius: "12px",
                background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
                border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", marginTop: "6px"
              }}>Unlock →</button>
            </form>
          </div>
        )}

        {/* ── Settings ── */}
        {authed && config && (
          <>
            <div style={{
              background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
              padding: "20px 20px 16px", display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "10px",
            }}>
              <div>
                <h1 style={{ color: "#fff", fontWeight: "800", fontSize: "18px", margin: 0 }}>⚙️ Admin Settings</h1>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", margin: "3px 0 0" }}>TrueCare Cleaning Services</p>
              </div>
              <div style={{ display: "flex", gap: "8px", paddingRight: "40px" }}>
                <button onClick={handleReset} style={{ padding: "8px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>Reset</button>
                <button onClick={handleSave} style={{ padding: "8px 16px", borderRadius: "10px", background: "#fff", border: "none", color: BLUE, fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>💾 Save</button>
              </div>
            </div>

            <div style={{ padding: "16px 14px" }}>
              {/* Tabs */}
              <div style={{ display: "flex", gap: "8px", overflowX: "auto", marginBottom: "16px", paddingBottom: "4px", WebkitOverflowScrolling: "touch" }}>
                {[
                  { id: "popup", label: "🎁 Popup" },
                  { id: "services", label: "🧹 Services" },
                  { id: "extras", label: "✨ Extras" },
                  { id: "frequency", label: "📅 Frequency" },
                  { id: "rooms", label: "🏠 Rooms" },
                  { id: "security", label: "🔑 Security" },
                ].map((t) => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                    padding: "8px 16px", borderRadius: "24px",
                    border: activeTab === t.id ? `2px solid ${BLUE}` : "2px solid #e5e7eb",
                    background: activeTab === t.id ? BLUE : "#fff",
                    color: activeTab === t.id ? "#fff" : "#444",
                    fontWeight: "600", fontSize: "12px", cursor: "pointer",
                    whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.15s"
                  }}>{t.label}</button>
                ))}
              </div>

              {/* ── POPUP ── */}
              {activeTab === "popup" && (
                <Card title="Discount Popup">
                  <Row label="Show popup">
                    <Toggle value={config.discountPopup.enabled} onChange={(v) => upd({ discountPopup: { ...config.discountPopup, enabled: v } })} />
                  </Row>
                  <Row label="Discount %">
                    <NumInput value={config.discountPopup.percentage} onChange={(v) => upd({ discountPopup: { ...config.discountPopup, percentage: v } })} min={1} max={100} />
                  </Row>
                  <Row label="Delay (seconds)">
                    <NumInput value={config.discountPopup.delaySeconds} onChange={(v) => upd({ discountPopup: { ...config.discountPopup, delaySeconds: v } })} min={0} max={60} step={0.5} />
                  </Row>
                  <Row label="Message" vertical>
                    <textarea value={config.discountPopup.message}
                      onChange={(e) => upd({ discountPopup: { ...config.discountPopup, message: e.target.value } })}
                      rows={3} style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "14px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                  </Row>
                  {!config.discountPopup.enabled && (
                    <div style={{ background: "#fef3c7", borderRadius: "10px", padding: "12px 16px", marginTop: "8px", fontSize: "13px", color: "#92400e" }}>
                      ⚠️ Popup is currently <strong>disabled</strong>.
                    </div>
                  )}
                </Card>
              )}

              {/* ── SERVICES ── */}
              {activeTab === "services" && (
                <Card title="Services">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 16px" }}>Toggle on/off, edit name and base price, or add/remove services.</p>
                  {config.services.map((svc, i) => (
                    <div key={svc.id} style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <Toggle value={svc.enabled} onChange={(v) => updateService(i, { enabled: v })} />
                        <input
                          value={svc.label}
                          onChange={(e) => updateService(i, { label: e.target.value })}
                          style={inlineInputStyle}
                          placeholder="Service name"
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "auto" }}>
                          <span style={{ color: "#888", fontSize: "13px" }}>$</span>
                          <NumInput value={svc.base} onChange={(v) => updateService(i, { base: v })} min={0} max={9999} />
                        </div>
                        <button onClick={() => removeService(i)} style={deleteBtnStyle} title="Remove">✕</button>
                      </div>
                    </div>
                  ))}
                  <AddButton onClick={addService} label="+ Add Service" />
                </Card>
              )}

              {/* ── EXTRAS ── */}
              {activeTab === "extras" && (
                <Card title="Extras">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 16px" }}>Toggle on/off, edit name and price, or add/remove extras.</p>
                  {config.extras.map((ex, i) => (
                    <div key={ex.id} style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <Toggle value={ex.enabled} onChange={(v) => updateExtra(i, { enabled: v })} />
                        <input
                          value={ex.label}
                          onChange={(e) => updateExtra(i, { label: e.target.value })}
                          style={inlineInputStyle}
                          placeholder="Extra name"
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "auto" }}>
                          <span style={{ color: "#888", fontSize: "13px" }}>$</span>
                          <NumInput value={ex.price} onChange={(v) => updateExtra(i, { price: v })} min={0} max={9999} />
                        </div>
                        <button onClick={() => removeExtra(i)} style={deleteBtnStyle} title="Remove">✕</button>
                      </div>
                    </div>
                  ))}
                  <AddButton onClick={addExtra} label="+ Add Extra" />
                </Card>
              )}

              {/* ── FREQUENCY ── */}
              {activeTab === "frequency" && (
                <Card title="Cleaning Frequency">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 16px" }}>1.0 = full price · 0.8 = 20% off</p>
                  {config.frequencies.map((freq, i) => (
                    <div key={freq.id} style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <Toggle value={freq.enabled} onChange={(v) => updateFrequency(i, { enabled: v })} />
                        <input
                          value={freq.label}
                          onChange={(e) => updateFrequency(i, { label: e.target.value })}
                          style={inlineInputStyle}
                          placeholder="Frequency name"
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "auto" }}>
                          <span style={{ color: "#888", fontSize: "12px" }}>×</span>
                          <NumInput value={freq.multiplier} onChange={(v) => updateFrequency(i, { multiplier: Math.min(1, Math.max(0, v)) })} min={0} max={1} step={0.05} />
                        </div>
                        <button onClick={() => removeFrequency(i)} style={deleteBtnStyle} title="Remove">✕</button>
                      </div>
                      {freq.multiplier < 1 && (
                        <div style={{ fontSize: "11px", color: "#16a34a", fontWeight: "600", marginTop: "4px", paddingLeft: "56px" }}>
                          {Math.round((1 - freq.multiplier) * 100)}% discount applied
                        </div>
                      )}
                    </div>
                  ))}
                  <AddButton onClick={addFrequency} label="+ Add Frequency" />
                </Card>
              )}

              {/* ── ROOMS ── */}
              {activeTab === "rooms" && (
                <>
                  <Card title="🛏 Bedroom Pricing">
                    <p style={{ color: "#888", fontSize: "13px", margin: "0 0 16px" }}>Extra cost added per bedroom count.</p>
                    {Object.entries(config.bedroomPrices).map(([key, val]) => (
                      <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: "10px" }}>
                        <span style={{ fontWeight: "600", color: NAVY, fontSize: "14px", flex: 1 }}>{key} bedroom{key !== "1" ? "s" : ""}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ color: "#555", fontWeight: "600" }}>+$</span>
                          <NumInput value={val} onChange={(v) => upd({ bedroomPrices: { ...config.bedroomPrices, [key]: v } })} min={0} max={9999} />
                          <button onClick={() => removeBedroomTier(key)} style={deleteBtnStyle} title="Remove">✕</button>
                        </div>
                      </div>
                    ))}
                    <AddButton onClick={addBedroomTier} label="+ Add Bedroom Tier" />
                  </Card>

                  <Card title="🚿 Bathroom Pricing">
                    <p style={{ color: "#888", fontSize: "13px", margin: "0 0 16px" }}>Extra cost added per bathroom count.</p>
                    {Object.entries(config.bathroomPrices).map(([key, val]) => (
                      <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: "10px" }}>
                        <span style={{ fontWeight: "600", color: NAVY, fontSize: "14px", flex: 1 }}>{key} bathroom{key !== "1" ? "s" : ""}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ color: "#555", fontWeight: "600" }}>+$</span>
                          <NumInput value={val} onChange={(v) => upd({ bathroomPrices: { ...config.bathroomPrices, [key]: v } })} min={0} max={9999} />
                          <button onClick={() => removeBathroomTier(key)} style={deleteBtnStyle} title="Remove">✕</button>
                        </div>
                      </div>
                    ))}
                    <AddButton onClick={addBathroomTier} label="+ Add Bathroom Tier" />
                  </Card>
                </>
              )}

              {/* ── SECURITY ── */}
              {activeTab === "security" && (
                <Card title="Change Admin PIN">
                  <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px" }}>Min 4 characters.</p>
                  <form onSubmit={handlePinChange} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontWeight: "600", color: "#444", fontSize: "13px", marginBottom: "6px" }}>New PIN</label>
                      <input type="password" value={newPin} onChange={(e) => setNewPin(e.target.value)}
                        placeholder="New PIN" style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "15px", outline: "none", boxSizing: "border-box", letterSpacing: "4px" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontWeight: "600", color: "#444", fontSize: "13px", marginBottom: "6px" }}>Confirm PIN</label>
                      <input type="password" value={confirmPin} onChange={(e) => setConfirmPin(e.target.value)}
                        placeholder="Repeat PIN" style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "2px solid #e5e7eb", fontSize: "15px", outline: "none", boxSizing: "border-box", letterSpacing: "4px" }} />
                    </div>
                    {pinChangeError && <p style={{ color: "#ef4444", fontSize: "13px", margin: 0 }}>{pinChangeError}</p>}
                    <button type="submit" style={{ padding: "12px 28px", borderRadius: "12px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", alignSelf: "flex-start" }}>
                      🔑 Update PIN
                    </button>
                  </form>
                </Card>
              )}

              {activeTab !== "security" && (
                <div style={{ textAlign: "center", marginTop: "20px", paddingBottom: "24px" }}>
                  <button onClick={handleSave} style={{ padding: "14px 40px", borderRadius: "14px", background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`, border: "none", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 8px 24px rgba(26,107,255,0.35)" }}>
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

// ── Shared styles ──
const inlineInputStyle = {
  flex: 1, minWidth: "100px", padding: "7px 10px", borderRadius: "8px",
  border: "2px solid #e5e7eb", fontSize: "13px", fontWeight: "600",
  color: NAVY, outline: "none",
};

const deleteBtnStyle = {
  width: "28px", height: "28px", borderRadius: "8px",
  background: "#fee2e2", border: "none", color: "#ef4444",
  fontSize: "14px", cursor: "pointer", display: "flex",
  alignItems: "center", justifyContent: "center", flexShrink: 0,
};

function AddButton({ onClick, label }) {
  return (
    <button onClick={onClick} style={{
      marginTop: "14px", width: "100%", padding: "10px",
      borderRadius: "10px", border: `2px dashed ${BLUE}`,
      background: "#eff6ff", color: BLUE, fontSize: "13px",
      fontWeight: "700", cursor: "pointer",
    }}>{label}</button>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "16px" }}>
      <h3 style={{ color: NAVY, fontWeight: "800", fontSize: "16px", margin: "0 0 14px" }}>{title}</h3>
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
    <button onClick={() => onChange(!value)} style={{ width: "46px", height: "26px", borderRadius: "13px", background: value ? BLUE : "#d1d5db", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
      <div style={{ position: "absolute", top: "3px", left: value ? "23px" : "3px", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
    </button>
  );
}

function NumInput({ value, onChange, min = 0, max = 9999, step = 1 }) {
  return (
    <input type="number" value={value} min={min} max={max} step={step}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      style={{ width: "75px", padding: "7px 8px", borderRadius: "8px", border: "2px solid #e5e7eb", fontSize: "14px", fontWeight: "600", color: NAVY, outline: "none", textAlign: "center" }}
    />
  );
}
