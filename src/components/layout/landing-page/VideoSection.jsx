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
      style={{
        padding: "48px 20px",
        background: "#fff",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Video box */}
        <div
          onClick={togglePlay}
          onMouseMove={flashControls}
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            cursor: "pointer",
            lineHeight: 0,
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            background: "#000",
          }}
        >
          <video
            ref={videoRef}
            src="/truecare-reel.mp4"
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            disablePictureInPicture
            controlsList="nofullscreen nodownload"
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />

          {/* Play overlay */}
          {!isPlaying && (
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.28)",
            }}>
              <div style={{
                width: "68px", height: "68px", borderRadius: "50%",
                background: "linear-gradient(135deg, #1A6BFF, #0052cc)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 36px rgba(26,107,255,0.65)",
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              </div>
            </div>
          )}

          {/* Controls bar */}
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "16px 18px 12px",
              background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              opacity: showControls ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress */}
            <div
              onClick={handleSeek}
              style={{
                width: "100%", height: "4px",
                background: "rgba(255,255,255,0.2)", borderRadius: "4px",
                marginBottom: "10px", cursor: "pointer", position: "relative",
              }}
            >
              <div style={{
                width: `${progress}%`, height: "100%",
                background: "linear-gradient(90deg, #1A6BFF, #5599ff)",
                borderRadius: "4px", position: "relative",
              }}>
                <div style={{
                  position: "absolute", right: "-5px", top: "-4px",
                  width: "12px", height: "12px", borderRadius: "50%",
                  background: "#fff", boxShadow: "0 0 6px rgba(26,107,255,0.9)",
                }} />
              </div>
            </div>

            {/* Row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <button onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "flex" }}>
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  )}
                </button>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontFamily: "monospace" }}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <button onClick={toggleMute}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "flex" }}>
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.97 6.97 0 0112 19.5c-.77 0-1.51-.12-2.2-.34l-1.56 1.56A9.004 9.004 0 0012 21.5c1.99 0 3.82-.65 5.32-1.73L19.73 22 21 20.73l-18-18zM12 3.5L9.91 5.59 12 7.68V3.5z"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Below video: stats + CTA */}
        <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {[{ num: "500+", label: "Cleans Done" }, { num: "5★", label: "Avg Rating" }, { num: "100%", label: "Satisfaction" }].map((s) => (
              <div key={s.label}>
                <div style={{ color: "#1A6BFF", fontSize: "18px", fontWeight: "800" }}>{s.num}</div>
                <div style={{ color: "#666", fontSize: "12px", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <a
            href="https://truecarecleaningservices.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #1A6BFF, #0052cc)",
              color: "#fff", padding: "12px 24px",
              borderRadius: "50px", fontWeight: "700",
              fontSize: "14px", textDecoration: "none",
              boxShadow: "0 6px 20px rgba(26,107,255,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            Book Your Clean →
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
