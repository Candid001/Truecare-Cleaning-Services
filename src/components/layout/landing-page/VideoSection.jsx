import React, { useRef, useState, useEffect } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controlsTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
    flashControls();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const handleEnded = () => { setIsPlaying(false); setShowControls(true); };

  const flashControls = () => {
    setShowControls(true);
    clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section
      ref={sectionRef}
      style={{ background: "#000", opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease" }}
    >
      {/* Full-width video player — no crop */}
      <div
        onClick={togglePlay}
        onMouseMove={flashControls}
        style={{ position: "relative", width: "100%", cursor: "pointer", lineHeight: 0 }}
      >
        <video
          ref={videoRef}
          src="/truecare-reel.mp4"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          style={{ width: "100%", height: "auto", display: "block", maxHeight: "55vh", objectFit: "contain", background: "#000" }}
        />

        {/* Big play button overlay */}
        {!isPlaying && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.35)" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #1A6BFF, #0052cc)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(26,107,255,0.7)" }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </div>
          </div>
        )}

        {/* Controls bar */}
        <div
          style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px 16px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)", opacity: showControls ? 1 : 0, transition: "opacity 0.3s ease" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            onClick={handleSeek}
            style={{ width: "100%", height: "5px", background: "rgba(255,255,255,0.2)", borderRadius: "5px", marginBottom: "14px", cursor: "pointer", position: "relative" }}
          >
            <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg, #1A6BFF, #5599ff)", borderRadius: "5px", position: "relative" }}>
              <div style={{ position: "absolute", right: "-6px", top: "-4px", width: "13px", height: "13px", borderRadius: "50%", background: "#fff", boxShadow: "0 0 8px rgba(26,107,255,0.9)" }} />
            </div>
          </div>

          {/* Controls row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Play/Pause */}
              <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}>
                {isPlaying ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                )}
              </button>
              {/* Time */}
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontFamily: "monospace" }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            {/* Mute */}
            <button onClick={toggleMute} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}>
              {isMuted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.97 6.97 0 0112 19.5c-.77 0-1.51-.12-2.2-.34l-1.56 1.56A9.004 9.004 0 0012 21.5c1.99 0 3.82-.65 5.32-1.73L19.73 22 21 20.73l-18-18zM12 3.5L9.91 5.59 12 7.68V3.5z"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Below video: label + stats + CTA */}
      <div style={{ background: "#0a0f1e", padding: "32px 24px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Title */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(26,107,255,0.15)", border: "1px solid rgba(26,107,255,0.3)", borderRadius: "50px", padding: "5px 16px", marginBottom: "12px" }}>
              <span style={{ fontSize: "14px" }}>🎬</span>
              <span style={{ color: "#1A6BFF", fontSize: "12px", fontWeight: "600", letterSpacing: "0.5px" }}>WATCH US WORK</span>
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: "800", margin: "0 0 8px" }}>
              See TrueCare <span style={{ color: "#1A6BFF" }}>in Action</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: 0 }}>
              Real homes, real results — our team across Saskatchewan.
            </p>
          </div>

          {/* Stats + CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[{ num: "500+", label: "Cleans Done" }, { num: "5★", label: "Average Rating" }, { num: "100%", label: "Satisfaction" }].map((s) => (
                <div key={s.label}>
                  <div style={{ color: "#1A6BFF", fontSize: "20px", fontWeight: "800" }}>{s.num}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="https://truecarecleaningservices.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: "linear-gradient(135deg, #1A6BFF, #0052cc)", color: "#fff", padding: "13px 28px", borderRadius: "50px", fontWeight: "700", fontSize: "14px", textDecoration: "none", boxShadow: "0 8px 25px rgba(26,107,255,0.4)", whiteSpace: "nowrap" }}
            >
              Book Your Clean →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
