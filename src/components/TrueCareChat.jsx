import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

// TrueCare knowledge base for AI responses
const TRUECARE_KB = {
  services: [
    "Post-Construction Cleaning",
    "Move-In / Move-Out Cleaning",
    "Regular Maintenance Cleaning",
    "Deep Cleansing",
    "Home & Apartment Cleaning",
    "Office & Small Business Cleaning",
    "Property Management & Realtors Cleaning",
    "Clinics & Wellness Centers Cleaning",
  ],
  location: "Saskatchewan, Canada",
  phone: "+1-306-552-6150",
  email: "tomi@truecarecleaningservices.ca",
  whatsapp: "13065526150",
};

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.match(/hi|hello|hey|good (morning|afternoon|evening)/)) {
    return "Hi there! 👋 Welcome to TrueCare Cleaning Services. I'm your virtual assistant. How can I help you today?";
  }
  if (msg.match(/service|offer|do you clean|clean what|what do you do/)) {
    return `We offer a wide range of professional cleaning services:\n\n${TRUECARE_KB.services
      .map((s) => `• ${s}`)
      .join("\n")}\n\nWould you like to know more about any specific service or get a quote?`;
  }
  if (msg.match(/post.?construct|construction/)) {
    return "Our Post-Construction Cleaning service removes dust, debris, and construction residue to leave your property spotless and move-in ready. We handle everything from fine dust to leftover materials. Ready to get a quote?";
  }
  if (msg.match(/move.?in|move.?out|moving/)) {
    return "Our Move-In/Move-Out Cleaning ensures the property is thoroughly cleaned for the next occupants or before you settle in. We cover every corner — kitchens, bathrooms, floors, windows, and more.";
  }
  if (msg.match(/deep clean/)) {
    return "Our Deep Cleansing service is a thorough top-to-bottom clean — ideal for spring cleaning, post-event cleanup, or when your space needs more than a regular clean. Every nook and cranny gets attention!";
  }
  if (msg.match(/regular|maintenance|weekly|biweekly|monthly/)) {
    return "We offer flexible Regular Maintenance Cleaning plans — weekly, bi-weekly, or monthly. Perfect for keeping your home or office consistently clean without the hassle.";
  }
  if (msg.match(/office|business|commercial|smb/)) {
    return "We clean offices and small businesses in Saskatchewan. A clean workspace boosts productivity and creates a great impression for clients. We can work around your schedule to minimise disruption.";
  }
  if (msg.match(/clinic|wellness|medical|hospital/)) {
    return "We provide specialised cleaning for clinics and wellness centers, ensuring hygienic, sanitised environments that meet health standards. Our team is trained for medical-grade cleanliness.";
  }
  if (msg.match(/location|where|serve|area|city|saskatchewan|sk|regina|saskatoon/)) {
    return `We serve all of Saskatchewan, Canada 🇨🇦. Whether you're in Regina, Saskatoon, or surrounding areas — we've got you covered!`;
  }
  if (msg.match(/price|cost|how much|rate|quote|pricing/)) {
    return "Pricing depends on the type of service, property size, and frequency. The best way to get an accurate cost is to request a free quote! You can fill out our quote form on the website or reach us directly at +1-306-552-6150.";
  }
  if (msg.match(/contact|phone|call|email|reach|number/)) {
    return `You can reach TrueCare at:\n📞 ${TRUECARE_KB.phone}\n📧 ${TRUECARE_KB.email}\n\nOr use the "Message Us" tab to chat directly with our team on WhatsApp!`;
  }
  if (msg.match(/book|schedule|appointment|when|availability/)) {
    return "To book a cleaning, you can request a quote on our website and our team will get back to you with availability. You can also call us directly at +1-306-552-6150 to schedule.";
  }
  if (msg.match(/eco|environment|green|safe|product/)) {
    return "We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment — without compromising on effectiveness. 🌿";
  }
  if (msg.match(/insur|bond|trust|certified/)) {
    return "TrueCare Cleaning Services is fully insured and bonded. You can trust our professional team to handle your property with care and accountability.";
  }
  if (msg.match(/team|staff|cleaner|who/)) {
    return "Our team consists of professionally trained, background-checked cleaners. We take pride in delivering consistent, high-quality results every time.";
  }
  if (msg.match(/thank|thanks|great|awesome|perfect|appreciate/)) {
    return "You're welcome! 😊 Is there anything else I can help you with? Don't hesitate to reach out if you have more questions.";
  }
  if (msg.match(/bye|goodbye|see you|done/)) {
    return "Thanks for chatting with TrueCare! Have a wonderful day. Don't hesitate to come back if you need anything. 🧹✨";
  }

  return "Thanks for your message! I'm not sure I have the exact answer for that. You can:\n\n• Switch to the **Message Us** tab to chat directly with our team\n• Call us at +1-306-552-6150\n• Email tomi@truecarecleaningservices.ca\n\nWe're happy to help!";
}

const suggestedQuestions = [
  "What services do you offer?",
  "How much does it cost?",
  "Where do you serve?",
  "How do I book a cleaning?",
];

const SETMORE_URL = "https://truecarecleaningservices.setmore.com";

export default function TrueCareChat() {
  const [open, setOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [tab, setTab] = useState("ai");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm the TrueCare virtual assistant 🧹 Ask me anything about our cleaning services, pricing, or locations — or switch to **Message Us** to chat with our team directly.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msgText, setMsgText] = useState("");
  const [sent, setSent] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Show bubble after 4s if chat hasn't been opened yet
  useEffect(() => {
    if (open || bubbleDismissed) return;
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, [open, bubbleDismissed]);

  // Hide bubble when chat opens
  useEffect(() => {
    if (open) setShowBubble(false);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && tab === "ai") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, tab]);

  function sendMessage(text) {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setTyping(false);
    }, 800 + Math.random() * 400);
  }

  function handleWhatsApp() {
    const preText = encodeURIComponent(
      `Hi TrueCare! My name is ${name || "a customer"}${phone ? ` (${phone})` : ""}. ${msgText}`
    );
    window.open(`https://wa.me/${TRUECARE_KB.whatsapp}?text=${preText}`, "_blank");
    setSent(true);
  }

  function renderText(text) {
    return text.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < text.split("\n").length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <>
      {/* Chat Prompt Bubble */}
      {showBubble && !open && (
        <div
          style={{
            position: "fixed",
            bottom: "106px",
            right: "28px",
            zIndex: 999998,
            width: "270px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            border: "1px solid rgba(26,107,255,0.12)",
            overflow: "hidden",
            animation: "slideUpFade 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Bubble header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                TC
              </div>
              <div>
                <div style={{ color: "#fff", fontSize: "12px", fontWeight: "700" }}>TrueCare</div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px" }}>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => { setBubbleDismissed(true); setShowBubble(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "flex", alignItems: "center" }}
            >
              <X size={14} color="rgba(255,255,255,0.7)" />
            </button>
          </div>

          {/* Message */}
          <div style={{ padding: "14px" }}>
            <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#333", lineHeight: 1.5 }}>
              Hi! Need a quick answer? Text us on WhatsApp 💬
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button
                onClick={() => {
                  setShowBubble(false);
                  setBubbleDismissed(true);
                  window.open("https://wa.me/13065526150", "_blank");
                }}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  background: "#25D366",
                  border: "none",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message on WhatsApp
              </button>
              <button
                onClick={() => {
                  setShowBubble(false);
                  setBubbleDismissed(true);
                  setOpen(true);
                }}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  background: "none",
                  border: "2px solid #1A6BFF",
                  color: "#1A6BFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                I have a question
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Round Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open TrueCare Chat"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 999999,
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(26,107,255,0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 32px rgba(26,107,255,0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,107,255,0.5)";
        }}
      >
        {open ? (
          <X size={26} color="white" />
        ) : (
          <MessageCircle size={30} color="white" />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "106px",
            right: "28px",
            zIndex: 999998,
            width: "370px",
            height: "560px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(26,107,255,0.12)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                color: "white",
                fontSize: "13px",
                flexShrink: 0,
              }}
            >
              TC
            </div>
            <div>
              <div style={{ color: "white", fontWeight: "600", fontSize: "14px", lineHeight: "1.2" }}>
                TrueCare Assistant
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px" }}>Online</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #f0f0f0", flexShrink: 0, background: "#fff" }}>
            {["ai", "message"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  fontSize: "13px",
                  fontWeight: "600",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: tab === t ? "#1A6BFF" : "#aaa",
                  borderBottom: tab === t ? "2px solid #1A6BFF" : "2px solid transparent",
                  transition: "color 0.2s",
                }}
              >
                {t === "ai" ? "AI Chat" : "Message Us"}
              </button>
            ))}
          </div>

          {/* AI Chat Tab */}
          {tab === "ai" && (
            <>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "12px",
                  background: "#f8faff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "10px 14px",
                        borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                        fontSize: "13px",
                        lineHeight: "1.5",
                        background: msg.role === "user" ? "#1A6BFF" : "#fff",
                        color: msg.role === "user" ? "#fff" : "#333",
                        boxShadow: msg.role === "bot" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                        border: msg.role === "bot" ? "1px solid #eee" : "none",
                      }}
                    >
                      {renderText(msg.text)}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #eee",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        padding: "10px 16px",
                        borderRadius: "18px 18px 18px 4px",
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                      }}
                    >
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#1A6BFF",
                            display: "inline-block",
                            animation: "bounce 1s infinite",
                            animationDelay: `${delay}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Suggested questions + Book Now */}
              {messages.length <= 1 && (
                <div
                  style={{
                    padding: "8px 12px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    borderTop: "1px solid #f0f0f0",
                    background: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      style={{
                        fontSize: "11px",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        border: "1px solid rgba(26,107,255,0.3)",
                        color: "#1A6BFF",
                        background: "none",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1A6BFF";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "none";
                        e.currentTarget.style.color = "#1A6BFF";
                      }}
                    >
                      {q}
                    </button>
                  ))}
                  {/* Book Now chip */}
                  <a
                    href={SETMORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "11px",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      background: "#1A6BFF",
                      color: "#fff",
                      fontWeight: "700",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    📅 Book Now
                  </a>
                </div>
              )}

              {/* Persistent Book Now bar */}
              {messages.length > 1 && (
                <div style={{ padding: "6px 12px", borderTop: "1px solid #f0f0f0", background: "#fff", flexShrink: 0 }}>
                  <a
                    href={SETMORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      width: "100%",
                      padding: "7px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #1A6BFF 0%, #0D1B3E 100%)",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "700",
                      textDecoration: "none",
                    }}
                  >
                    📅 Book a Cleaning on Setmore
                  </a>
                </div>
              )}

              {/* Input */}
              <div
                style={{
                  padding: "10px 12px",
                  borderTop: "1px solid #f0f0f0",
                  display: "flex",
                  gap: "8px",
                  background: "#fff",
                  flexShrink: 0,
                  alignItems: "center",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me anything..."
                  style={{
                    flex: 1,
                    border: "1px solid #e0e0e0",
                    borderRadius: "24px",
                    padding: "9px 16px",
                    fontSize: "13px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1A6BFF")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "#1A6BFF",
                    border: "none",
                    cursor: input.trim() ? "pointer" : "default",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: input.trim() ? 1 : 0.4,
                    flexShrink: 0,
                  }}
                >
                  <Send size={15} color="white" />
                </button>
              </div>
            </>
          )}

          {/* Message Us Tab */}
          {tab === "message" && (
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                background: "#f8faff",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {!sent ? (
                <>
                  <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>
                    Send us a message and we'll get back to you on WhatsApp right away.
                  </p>

                  {[
                    { label: "Your Name", value: name, setter: setName, placeholder: "e.g. John Smith", type: "text" },
                    { label: "Phone (optional)", value: phone, setter: setPhone, placeholder: "+1 306 000 0000", type: "tel" },
                  ].map(({ label, value, setter, placeholder, type }) => (
                    <div key={label}>
                      <label style={{ fontSize: "11px", fontWeight: "700", color: "#555", display: "block", marginBottom: "4px" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        placeholder={placeholder}
                        style={{
                          width: "100%",
                          border: "1px solid #e0e0e0",
                          borderRadius: "10px",
                          padding: "9px 12px",
                          fontSize: "13px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#555", display: "block", marginBottom: "4px" }}>
                      Your Message *
                    </label>
                    <textarea
                      value={msgText}
                      onChange={(e) => setMsgText(e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={3}
                      style={{
                        width: "100%",
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                        padding: "9px 12px",
                        fontSize: "13px",
                        outline: "none",
                        resize: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    disabled={!msgText.trim()}
                    style={{
                      width: "100%",
                      padding: "11px",
                      borderRadius: "12px",
                      background: "#25D366",
                      border: "none",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: msgText.trim() ? "pointer" : "default",
                      opacity: msgText.trim() ? 1 : 0.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "12px", color: "#aaa" }}>or call us directly</span>
                  </div>

                  <a
                    href="tel:+13065526150"
                    style={{
                      width: "100%",
                      padding: "11px",
                      borderRadius: "12px",
                      border: "2px solid #1A6BFF",
                      color: "#1A6BFF",
                      fontSize: "14px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      textDecoration: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <Phone size={15} />
                    +1-306-552-6150
                  </a>
                </>
              ) : (
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: "12px",
                    padding: "32px 0",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "#dcfce7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, fontSize: "15px", fontWeight: "700", color: "#222" }}>WhatsApp Opened!</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#777" }}>
                    Your message is ready to send. We usually respond within minutes during business hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setMsgText(""); }}
                    style={{ background: "none", border: "none", color: "#1A6BFF", fontSize: "13px", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
