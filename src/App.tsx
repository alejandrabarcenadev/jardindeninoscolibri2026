import { useState } from "react"
import logoHeader from "@/imports/logo_horizonta._jadin.deninos.colibri.png"
import logoHero from "@/imports/logo_oficial.jpg"
import imgPlaceholder from "@/imports/placeholder-1.png"
import quienesSomos from "@/imports/quienes-somos.jpeg"

const C = {
  navy:    "#171B5A",
  green:   "#1FA34A",
  red:     "#C92734",
  orange:  "#C95B2D",
  yellow:  "#E3C11B",
  magenta: "#B7176A",
  purple:  "#4E347F",
  white:   "#FFFFFF",
  carbon:  "#1F1F1F",
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const Icon = {
  star:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill={p.color ?? "currentColor"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
  ),
  clock:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  palette:   (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="13.5" cy="6.5" r=".5" fill={p.color ?? "currentColor"}/><circle cx="17.5" cy="10.5" r=".5" fill={p.color ?? "currentColor"}/><circle cx="8.5" cy="7.5" r=".5" fill={p.color ?? "currentColor"}/><circle cx="6.5" cy="12.5" r=".5" fill={p.color ?? "currentColor"}/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
  ),
  book:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  chat:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  globe:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  monitor:   (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  zap:       (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  music:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  ),
  droplets:  (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
  ),
  shield:    (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  brush:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33l10.06-10.06a5.5 5.5 0 0 0 0-7.78h-.55z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
  ),
  leaf:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.34A2 2 0 0 0 5.5 22a2 2 0 0 0 1.56-.75C8.73 19.17 12 17.5 17 17.5c4.97 0 7-3 7-3s-2-8.5-7-6.5z"/></svg>
  ),
  users:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  heart:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  ),
  link:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  ),
  target:    (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 28} height={p.size ?? 28} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  eye:       (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 28} height={p.size ?? 28} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  play:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 28} height={p.size ?? 28} viewBox="0 0 24 24" fill={p.color ?? "currentColor"}><polygon points="5,3 19,12 5,21"/></svg>
  ),
  handshake: (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
  ),
  sun:       (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 28} height={p.size ?? 28} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  ),
  school:    (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 28} height={p.size ?? 28} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M2 20h20"/><path d="M4 20V10"/><path d="M20 20V10"/><path d="M12 2L2 10h20z"/><rect x="8" y="14" width="8" height="6"/></svg>
  ),
  map:       (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  phone:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  mail:      (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  facebook:  (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill={p.color ?? "currentColor"}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  instagram: (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill={p.color ?? "currentColor"} stroke="none"/></svg>
  ),
  tiktok:    (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 22} height={p.size ?? 22} viewBox="0 0 24 24" fill={p.color ?? "currentColor"}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
  ),
  check:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 12} height={p.size ?? 12} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  feather:   (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 32} height={p.size ?? 32} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
  ),
  award:     (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  ),
  activity:  (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ),
  layers:    (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  cpu:       (p: { size?: number; color?: string }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="none" stroke={p.color ?? "currentColor"} strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
  ),
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function Badge({ color, textColor, children, iconEl }: { color: string; textColor: string; iconEl: React.ReactNode; children: React.ReactNode }) {
  return (
    <span style={{ background: color, color: textColor, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.78rem", borderRadius: 99, padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 5 }}>
      {iconEl}{children}
    </span>
  )
}

function Chip({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span style={{ background: color + "1a", color, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.78rem", borderRadius: 99, padding: "4px 14px" }}>{children}</span>
  )
}

function SectionHeader({ title, subtitle, color = C.navy, accent }: { title: string; subtitle?: string; color?: string; accent?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 style={{ fontFamily: "'Fredoka One',cursive", color, fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: 12 }}>{title}</h2>
      {subtitle && <p style={{ color: "#555", maxWidth: 640, margin: "0 auto", lineHeight: 1.78, fontSize: "0.98rem" }}>{subtitle}</p>}
      <div style={{ width: 56, height: 5, borderRadius: 99, background: accent ?? color, margin: "16px auto 0", opacity: 0.75 }} />
    </div>
  )
}

// ── Shared image placeholder ──────────────────────────────────────────────────
// ✏️  Replace src="" with the real image path to swap in a photo
function ImgPlaceholder({ src = "", alt = "", height = 180, radius = 14 }: { src?: string; alt?: string; height?: number; radius?: number }) {
  const effectiveSrc = src || imgPlaceholder
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: "100%", height, borderRadius: radius, overflow: "hidden", position: "relative", background: "#f0f3ff", flexShrink: 0 }}>
      {!failed ? (
        <img src={effectiveSrc} alt={alt} onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, border: `2px dashed ${C.navy}20`, borderRadius: radius, background: `linear-gradient(135deg,${C.navy}08,${C.purple}0a)` }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" opacity="0.45">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      )}
    </div>
  )
}

// ── HEADER ────────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  const links = ["Inicio","Nosotros","EMMI","Galería","Horarios","Contacto"]
  const linkColors = [C.navy, C.green, C.orange, C.magenta, C.red, C.navy]

  return (
    <header style={{ background: C.white, boxShadow: "0 2px 20px rgba(23,27,90,0.10)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ height: 4, background: `linear-gradient(90deg,${C.red} 0%,${C.orange} 18%,${C.yellow} 34%,${C.green} 50%,${C.navy} 67%,${C.purple} 82%,${C.magenta} 100%)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24">
        <img src={logoHeader} alt="Jardín de Niños Colibrí" style={{ height: 72, maxWidth: "72vw", width: "auto", objectFit: "contain" }} />
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: C.navy, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.8rem", borderRadius: 99, padding: "6px 10px", transition: "background 0.18s,color 0.18s", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = linkColors[i]; (e.currentTarget as HTMLElement).style.color = C.white }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.navy }}
            >{l}</a>
          ))}
          <a href="#contacto"
            style={{ background: C.green, color: C.white, fontFamily: "'Nunito',sans-serif", fontWeight: 800, borderRadius: 99, padding: "7px 16px", fontSize: "0.8rem", marginLeft: 6, boxShadow: `0 4px 14px ${C.green}55`, transition: "opacity 0.18s,transform 0.18s", textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
          >Solicita informes</a>
        </nav>
        <button className="lg:hidden p-2" style={{ color: C.navy }} onClick={() => setOpen(!open)} aria-label="Menú">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (<><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></>) : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)}
          </svg>
        </button>
      </div>
      {open && (
        <div style={{ background: C.white, borderTop: "1px solid #eee", boxShadow: "0 8px 24px rgba(23,27,90,0.08)" }} className="lg:hidden px-4 pb-4">
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ color: linkColors[i], fontWeight: 700, display: "block", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: "0.9rem", textDecoration: "none" }}
            >{l}</a>
          ))}
          <a href="#contacto" style={{ background: C.green, color: C.white, fontWeight: 800, textDecoration: "none" }} className="mt-3 block text-center px-5 py-2.5 rounded-full text-sm">Solicita informes</a>
        </div>
      )}
    </header>
  )
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" style={{ background: C.white, position: "relative", overflow: "hidden" }} className="flex items-center py-10 pt-8">
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg,${C.red},${C.orange},${C.yellow},${C.green},${C.navy},${C.purple},${C.magenta})` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge color={C.navy}    textColor={C.white} iconEl={<Icon.star    size={13} color={C.white} />}>Metodología EMMI</Badge>
            <Badge color={C.green}   textColor={C.white} iconEl={<Icon.clock   size={13} color={C.white} />}>Guardería 7:30 a.m. – 6:00 p.m.</Badge>
            <Badge color={C.magenta} textColor={C.white} iconEl={<Icon.palette size={13} color={C.white} />}>Actividades extracurriculares</Badge>
          </div>
          <h1 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "clamp(2.4rem,5vw,3.6rem)", lineHeight: 1.1, marginBottom: 16 }}>
            Jardín de Niños<br /><span style={{ color: C.green }}>Colibrí</span>
          </h1>
          <p style={{ fontFamily: "'Fredoka One',cursive", color: C.carbon, fontSize: "clamp(1.1rem,2.4vw,1.45rem)", lineHeight: 1.35, marginBottom: 14 }}>
            Un espacio para aprender, descubrir y crecer con alegría.
          </p>
          <p style={{ color: "#444", lineHeight: 1.78, fontSize: "1rem", marginBottom: 12, maxWidth: 500 }}>
            Formamos niñas y niños felices, íntegros y preparados para la vida a través de aprendizajes significativos, acompañamiento cercano y una educación de calidad.
          </p>
          <p style={{ color: "#666", lineHeight: 1.72, fontSize: "0.92rem", marginBottom: 32, maxWidth: 500 }}>
            Con una propuesta educativa integral, actividades académicas y extracurriculares, y el apoyo de la plataforma EMMI para enriquecer cada experiencia de aprendizaje.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#emmi" style={{ background: C.navy, color: C.white, fontWeight: 800, fontFamily: "'Nunito',sans-serif", borderRadius: 99, padding: "12px 24px", fontSize: "0.92rem", textDecoration: "none", boxShadow: `0 6px 20px ${C.navy}44`, transition: "transform 0.2s" }} className="hover:-translate-y-0.5">Conoce nuestra propuesta educativa</a>
            <a href="#contacto" style={{ background: C.green, color: C.white, fontWeight: 800, fontFamily: "'Nunito',sans-serif", borderRadius: 99, padding: "12px 24px", fontSize: "0.92rem", textDecoration: "none", boxShadow: `0 6px 20px ${C.green}44`, transition: "transform 0.2s" }} className="hover:-translate-y-0.5">Solicita informes</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:-ml-8">
          <img src={logoHero} alt="Logo Jardín de Niños Colibrí"
            style={{ width: "clamp(300px,46vw,600px)", maxWidth: "92vw", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  )
}

// ── QUIÉNES SOMOS ─────────────────────────────────────────────────────────────
function QuienesSomos() {
  return (
    <section id="nosotros" style={{ background: "#f7fdf9", position: "relative", overflow: "hidden" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 16px 48px rgba(23,27,90,0.13)", height: 440, background: "#c8e6c9" }}>
          <img
            src={quienesSomos}
            alt="Fachada del Jardín de Niños Colibrí"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center"
            }}
          />
        </div>
        <div>
          <Chip color={C.green}>Quiénes somos</Chip>
          <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: 12, marginBottom: 16 }}>Un lugar donde cada niño florece</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              En Jardín de Niños Colibrí creemos que la infancia es una etapa para descubrir, experimentar y aprender con alegría. Por eso, ofrecemos un ambiente cálido, seguro y estimulante, donde cada niña y niño recibe acompañamiento cercano para desarrollar sus habilidades, fortalecer su confianza y avanzar a su propio ritmo.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              Nuestro trabajo se basa en aprendizajes significativos, atención comprometida y una formación integral que combina desarrollo académico, físico, creativo, social y emocional. A través de experiencias dentro y fuera del aula, buscamos que las niñas y los niños participen activamente, expresen sus ideas, convivan con respeto y construyan herramientas útiles para la vida.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              Complementamos nuestra propuesta con áreas como pensamiento matemático, lenguaje y comunicación, inglés, computación y educación física, además de actividades como natación, música y estudiantina, talleres de pintura y creatividad, y ecología. También contamos con el apoyo de la metodología EMMI, que integra materiales, recursos digitales y experiencias dinámicas para enriquecer el aprendizaje.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              Más que una escuela, somos una comunidad educativa comprometida con formar niñas y niños felices, íntegros, reflexivos y capaces de transformar positivamente su entorno.
            </p>
            <p style={{ fontFamily: "'Fredoka One',cursive", color: C.green, fontSize: "1.05rem", margin: 0 }}>
              Aprender, hacer, conocer, ser y convivir para crecer con alegría.
            </p>
          </div>
          <div className="mt-8">
            <div style={{ display: "inline-block", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "2rem" }}>35+</div>
              <div style={{ color: "#777", fontSize: "0.8rem", fontWeight: 600 }}>Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── MISIÓN & VISIÓN ───────────────────────────────────────────────────────────
function MisionVision() {
  return (
    <section style={{ background: C.navy, position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: 12 }}>Misión &amp; Visión</h2>
          <div style={{ width: 56, height: 5, borderRadius: 99, background: C.yellow, margin: "0 auto" }} />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { IconEl: Icon.target, title: "Misión", accent: C.green, text: "En el Jardín de Niños Colibrí generamos un ambiente de aprendizajes significativos con entrega y compromiso, favoreciendo el óptimo desarrollo de competencias y habilidades. Formamos con equidad y calidad a niñas y niños felices, íntegros y preparados para la vida." },
            { IconEl: Icon.eye,    title: "Visión", accent: C.yellow, text: "Ser una escuela innovadora, siempre a la vanguardia, brindando un servicio de calidad y formando niñas y niños competentes, reflexivos, exitosos y, sobre todo, felices, capaces de transformar para bien el mundo." },
          ].map(card => (
            <div key={card.title} style={{ background: "rgba(255,255,255,0.07)", border: `2px solid ${card.accent}55`, borderRadius: 24, padding: "2rem", backdropFilter: "blur(8px)" }}>
              <div style={{ marginBottom: 14 }}><card.IconEl size={30} color={card.accent} /></div>
              <div style={{ fontFamily: "'Fredoka One',cursive", color: card.accent, fontSize: "1.6rem", marginBottom: 12 }}>{card.title}</div>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.82, fontSize: "0.98rem" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── METODOLOGÍA intro ─────────────────────────────────────────────────────────
function Metodologia() {
  const pillars = [
    { label: "Aprender", color: C.red,     IconEl: Icon.book  },
    { label: "Conocer",  color: C.orange,  IconEl: Icon.globe },
    { label: "Hacer",    color: C.green,   IconEl: Icon.zap   },
    { label: "Convivir", color: C.purple,  IconEl: Icon.users },
    { label: "Ser",      color: C.magenta, IconEl: Icon.heart },
  ]
  return (
    <section style={{ background: "#fffdf5", position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip color={C.orange}>Metodología EMMI</Chip>
            <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: 12, marginBottom: 16 }}>Aprender con sentido,<br />crecer con confianza</h2>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "1rem" }}>
              Nuestra propuesta educativa se apoya en la metodología EMMI, la cual favorece aprendizajes significativos y el desarrollo integral de las niñas y los niños. A través de estrategias dinámicas, acompañamiento cercano y experiencias formativas, impulsamos la curiosidad, la participación y la construcción de habilidades para la vida.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {pillars.map(p => (
                <div key={p.label} style={{ background: p.color, color: C.white, fontFamily: "'Fredoka One',cursive", fontSize: "1rem", borderRadius: 14, padding: "10px 20px", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 4px 14px ${p.color}44` }}>
                  <p.IconEl size={16} color={C.white} />{p.label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 16px 48px rgba(23,27,90,0.13)", height: 420, background: "#fff9c4" }}>
            <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=840&fit=crop&auto=format" alt="Niños en actividad de aprendizaje activo con materiales didácticos" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── ÁREAS DE APRENDIZAJE ──────────────────────────────────────────────────────
function AreasAprendizaje() {
  const areas = [
    { IconEl: Icon.activity, title: "Pensamiento matemático",  desc: "Desarrollamos el razonamiento lógico, la resolución de problemas y el pensamiento abstracto mediante actividades lúdicas y concretas.", color: C.navy },
    { IconEl: Icon.chat,     title: "Lenguaje y comunicación", desc: "Fortalecemos la expresión oral, la comprensión lectora y el gusto por la literatura desde los primeros años de vida.", color: C.magenta },
    { IconEl: Icon.globe,    title: "Inglés",                  desc: "Introducimos el idioma inglés de forma natural, divertida y progresiva, fomentando la comunicación global desde preescolar.", color: C.green },
    { IconEl: Icon.sun,      title: "Yoga",                    desc: "Promovemos el equilibrio físico y emocional mediante la respiración consciente, el movimiento y la relajación dentro del área educativa.", color: C.orange },
    { IconEl: Icon.zap,      title: "Educación física",        desc: "Promovemos el desarrollo motor, el trabajo en equipo, los hábitos saludables y el disfrute del movimiento corporal.", color: C.red },
  ]
  return (
    <section style={{ background: "#f4f6ff", position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Áreas de aprendizaje" subtitle="Una educación integral que desarrolla todas las dimensiones del ser humano desde la primera infancia." color={C.navy} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(area => (
            <div key={area.title} style={{ background: C.white, borderRadius: 22, padding: "2rem 1.75rem", boxShadow: "0 4px 24px rgba(23,27,90,0.07)", borderTop: `5px solid ${area.color}`, transition: "transform 0.2s,box-shadow 0.2s" }} className="hover:-translate-y-1 hover:shadow-xl">
              <div style={{ marginBottom: 14, width: 44, height: 44, borderRadius: 12, background: area.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <area.IconEl size={22} color={area.color} />
              </div>
              <h3 style={{ fontFamily: "'Fredoka One',cursive", color: area.color, fontSize: "1.3rem", marginBottom: 10 }}>{area.title}</h3>
              <p style={{ color: "#555", lineHeight: 1.75, fontSize: "0.93rem" }}>{area.desc}</p>
            </div>
          ))}
          <div style={{ background: `linear-gradient(135deg,${C.navy},${C.purple})`, borderRadius: 22, padding: "2rem 1.75rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", boxShadow: "0 4px 24px rgba(23,27,90,0.18)" }}>
            <div style={{ marginBottom: 14, width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon.layers size={24} color={C.white} />
            </div>
            <h3 style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "1.3rem", marginBottom: 10 }}>Aprendizaje integral</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.7 }}>Todas las áreas trabajan en conjunto para el desarrollo pleno de cada niño y niña.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── EXTRACURRICULARES ─────────────────────────────────────────────────────────
function Extracurriculares() {
  const activities = [
    { IconEl: Icon.music,    title: "Música y estudiantina", desc: "Fomentamos el amor por la música a través de cuerdas, ritmo y expresión artística colectiva.", color: C.magenta, img: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=600&h=400&fit=crop&auto=format" },
    { IconEl: Icon.droplets, title: "Natación",             desc: "Desarrollamos habilidades acuáticas, confianza y disciplina en un ambiente seguro y estimulante.", color: C.navy, img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop&auto=format" },
    { IconEl: Icon.brush,    title: "Talleres de pintura y creatividad", desc: "Exploramos la imaginación a través de la pintura, el modelado, las manualidades y el arte libre.", color: C.orange, img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&auto=format" },
    { IconEl: Icon.leaf,     title: "Ecología",             desc: "Despertamos la conciencia ambiental y el amor por la naturaleza desde los primeros años.", color: C.green, img: "https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=600&h=400&fit=crop&auto=format" },
  ]
  return (
    <section id="extracurriculares" style={{ background: C.white, position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Actividades extracurriculares" subtitle="Complementamos la formación académica con actividades que enriquecen la experiencia escolar, fomentan talentos y fortalecen el desarrollo físico, artístico, social y emocional." color={C.purple} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(act => (
            <div key={act.title} style={{ borderRadius: 22, overflow: "hidden", boxShadow: "0 4px 24px rgba(23,27,90,0.09)", transition: "transform 0.2s,box-shadow 0.2s", background: C.white }} className="hover:-translate-y-1 hover:shadow-xl">
              <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                <img src={act.img} alt={act.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 12, left: 12, background: act.color, color: C.white, borderRadius: 99, padding: "5px 14px", fontFamily: "'Fredoka One',cursive", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 6 }}>
                  <act.IconEl size={14} color={C.white} />{act.title}
                </div>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <p style={{ color: "#555", lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }}>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── VALORES ───────────────────────────────────────────────────────────────────
function NuestrosValores() {
  const valores = [
    { IconEl: Icon.heart,     title: "Respeto",          color: C.magenta, desc: "Fomentamos la convivencia armónica y la escucha activa. Cada niña y niño aprende a reconocer y valorar la perspectiva de los demás." },
    { IconEl: Icon.award,     title: "Responsabilidad",  color: C.navy,    desc: "Acompañamos el desarrollo de la autonomía, el cuidado de materiales y la participación comprometida en las actividades del aula." },
    { IconEl: Icon.star,      title: "Honestidad",       color: C.yellow,  desc: "Trabajamos de forma explícita la educación en valores, promoviendo la verdad, la transparencia y la congruencia entre lo que se piensa, dice y hace." },
    { IconEl: Icon.users,     title: "Solidaridad",      color: C.purple,  desc: "Cultivamos la colaboración, el compartir y el sentido de comunidad. Aprendemos que juntos construimos más y mejor." },
    { IconEl: Icon.globe,     title: "Tolerancia",       color: C.green,   desc: "Promovemos la inclusión, el respeto a la diversidad y la capacidad de convivir con quienes piensan, sienten o son diferentes a nosotros." },
    { IconEl: Icon.chat,      title: "Amabilidad",       color: C.orange,  desc: "Fortalecemos la empatía, el diálogo respetuoso y los ambientes de convivencia positiva donde cada persona se siente bienvenida y valorada." },
  ]

  return (
    <section id="valores" style={{ background: C.white, position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Nuestros valores"
          color={C.navy}
          accent={C.yellow}
        />

        {/* Intro text */}
        <p style={{ color: "#555", lineHeight: 1.82, fontSize: "1rem", maxWidth: 700, margin: "0 auto 56px", textAlign: "center" }}>
          En Jardín de Niños Colibrí entendemos la educación como un proceso integral. Por eso, cada experiencia de aprendizaje busca fortalecer no solo conocimientos y habilidades, sino también la manera en que las niñas y los niños se relacionan consigo mismos, con los demás y con su entorno.
        </p>

        {/* Values grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="values-grid">
          {valores.map((v) => (
            <div
              key={v.title}
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "1.75rem 1.5rem",
                boxShadow: "0 4px 24px rgba(23,27,90,0.07)",
                borderBottom: `4px solid ${v.color}`,
                transition: "transform 0.22s, box-shadow 0.22s",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
              className="hover:-translate-y-1 hover:shadow-xl"
            >
              <div style={{ width: 46, height: 46, borderRadius: 13, background: v.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <v.IconEl size={22} color={v.color} />
              </div>
              <h4 style={{ fontFamily: "'Fredoka One',cursive", color: v.color, fontSize: "1.15rem", margin: 0 }}>{v.title}</h4>
              <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.72, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing phrase */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "clamp(1rem,2.2vw,1.3rem)", maxWidth: 640, margin: "0 auto", lineHeight: 1.55 }}>
            Respeto, responsabilidad, honestidad, solidaridad, tolerancia y amabilidad:{" "}
            <span style={{ color: C.green }}>los valores que guían cada día en el Jardín de Niños Colibrí.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

// ── BLOG ──────────────────────────────────────────────────────────────────────
// ✏️  EDITAR AQUÍ: reemplaza título, extracto, fecha y categoría de cada entrada
// ── BLOG ─────────────────────────────────────────────────────────────────────
// ✏️  EDITAR AQUÍ: modifica o añade artículos cambiando solo este array.
// Para publicar un artículo real: cambia status a "published" y añade content.
// Para la imagen: pon la ruta en imageSrc (ej. /images/blog/blog-01.jpg).
//   Si el archivo no existe, se mostrará el placeholder automáticamente.
// objectPosition controla el encuadre de la foto (ej. "center top", "50% 20%").
const BLOG_POSTS: {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  color: string
  imageSrc: string
  imageAlt: string
  objectPosition: string
  content: string
  status: "draft" | "soon" | "published"
}[] = [
  {
    id: "01",
    slug: "aprendizaje-activo-preescolar",
    title: "Cómo funciona el aprendizaje activo en preescolar",
    excerpt: "Descubre por qué aprender haciendo es la estrategia más poderosa en los primeros años de vida escolar y cómo lo aplicamos en el Jardín de Niños Colibrí.",
    category: "Aprendizaje",
    date: "Próximamente",
    color: C.green,
    imageSrc: "/images/blog/blog-01.jpg",
    imageAlt: "Niños aprendiendo de forma activa en el aula",
    objectPosition: "center center",
    content: "",
    status: "soon",
  },
  {
    id: "02",
    slug: "acompanar-aprendizaje-en-casa",
    title: "5 formas de acompañar el aprendizaje en casa",
    excerpt: "Pequeñas acciones cotidianas que fortalecen la conexión entre lo que tus hijas e hijos aprenden en el jardín y lo que viven en el hogar.",
    category: "Familia",
    date: "Próximamente",
    color: C.orange,
    imageSrc: "/images/blog/blog-02.jpg",
    imageAlt: "Familia acompañando el aprendizaje en casa",
    objectPosition: "center center",
    content: "",
    status: "soon",
  },
  {
    id: "03",
    slug: "que-es-emmi",
    title: "Qué es EMMI y por qué lo usamos en nuestro jardín",
    excerpt: "Te explicamos en qué consiste esta metodología, cómo integra materiales físicos y digitales, y qué beneficios concretos aporta al desarrollo infantil.",
    category: "EMMI",
    date: "Próximamente",
    color: C.purple,
    imageSrc: "/images/blog/blog-03.jpg",
    imageAlt: "Metodología EMMI aplicada en preescolar",
    objectPosition: "center center",
    content: "",
    status: "soon",
  },
]

// Tarjeta individual del blog — no editar; edita BLOG_POSTS arriba
function BlogCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  const [imgFailed, setImgFailed] = useState(false)
  const isPublished = post.status === "published" && post.content

  return (
    <article
      style={{ background: C.white, borderRadius: 22, overflow: "hidden", boxShadow: "0 4px 24px rgba(23,27,90,0.07)", display: "flex", flexDirection: "column", transition: "transform 0.22s,box-shadow 0.22s" }}
      className="hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen destacada */}
      <div style={{ height: 180, position: "relative", overflow: "hidden", borderBottom: `3px solid ${post.color}30`, flexShrink: 0 }}>
        {!imgFailed ? (
          <img
            src={post.imageSrc}
            alt={post.imageAlt}
            onError={() => setImgFailed(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: post.objectPosition, display: "block" }}
          />
        ) : (
          <img
            src={imgPlaceholder}
            alt={post.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
          />
        )}
        {post.status !== "published" && (
          <span style={{ position: "absolute", top: 10, left: 12, background: post.color, color: C.white, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.68rem", borderRadius: 99, padding: "3px 10px" }}>
            Próximamente
          </span>
        )}
      </div>

      <div style={{ padding: "1.4rem 1.5rem", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: post.color + "18", color: post.color, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.72rem", borderRadius: 99, padding: "3px 11px" }}>{post.category}</span>
          <span style={{ color: "#bbb", fontSize: "0.75rem", fontFamily: "'Nunito',sans-serif" }}>{post.date}</span>
        </div>
        <h3 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1.15rem", lineHeight: 1.35, margin: 0 }}>{post.title}</h3>
        <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.72, margin: 0, flex: 1 }}>{post.excerpt}</p>
        <div style={{ marginTop: 4 }}>
          {isPublished ? (
            <a
              href={`/blog/${post.slug}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: post.color, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.82rem", textDecoration: "none" }}
            >
              Leer artículo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          ) : (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: post.color, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.82rem", opacity: 0.55, cursor: "default" }}>
              Leer artículo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

function Blog() {
  return (
    <section id="blog" style={{ background: "#f4f6ff", position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Blog educativo"
          subtitle="Recursos, reflexiones y consejos para familias y comunidad escolar. Próximamente publicaremos nuestros primeros artículos."
          color={C.navy}
          accent={C.green}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
        </div>

        <div style={{ marginTop: 36, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.navy + "0d", border: `1.5px dashed ${C.navy}25`, borderRadius: 99, padding: "10px 24px" }}>
            <Icon.clock size={16} color={C.navy} />
            <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: C.navy, fontSize: "0.85rem" }}>Contenido en preparación — muy pronto más artículos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── GALERÍA ───────────────────────────────────────────────────────────────────
// ✏️  EDITAR AQUÍ: cambia src y alt de cada entrada para actualizar las fotos
const GALLERY_ITEMS = [
  { id: "01", src: "/images/gallery-01.jpg", alt: "Actividades en el salón de clases" },
  { id: "02", src: "/images/gallery-02.jpg", alt: "Niños en recreo" },
  { id: "03", src: "/images/gallery-03.jpg", alt: "Clase de educación física" },
  { id: "04", src: "/images/gallery-04.jpg", alt: "Taller de creatividad" },
  { id: "05", src: "/images/gallery-05.jpg", alt: "Actividad de natación" },
  { id: "06", src: "/images/gallery-06.jpg", alt: "Clase de música — estudiantina" },
  { id: "07", src: "/images/gallery-07.jpg", alt: "Lectura y lenguaje" },
  { id: "08", src: "/images/gallery-08.jpg", alt: "Ceremonia y convivencia escolar" },
  { id: "09", src: "/images/gallery-09.jpg", alt: "Clase de inglés" },
  { id: "11", src: "/images/gallery-11.jpg", alt: "Actividad de ecología" },
  { id: "12", src: "/images/gallery-12.jpg", alt: "Computación y tecnología" },
  { id: "13", src: "/images/gallery-13.jpg", alt: "Pensamiento matemático" },
  { id: "14", src: "/images/gallery-14.jpg", alt: "Escuela para padres" },
  { id: "15", src: "/images/gallery-15.jpg", alt: "Instalaciones del jardín" },
  { id: "16", src: "/images/gallery-16.jpg", alt: "Graduación y festejo escolar" },
]

function GalleryPlaceholder({ alt }: { alt: string }) {
  return (
    <img
      src={imgPlaceholder}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  )
}

function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set())

  const close = () => setLightbox(null)

  const prev = () => setLightbox(i => i !== null ? (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null)
  const next = () => setLightbox(i => i !== null ? (i + 1) % GALLERY_ITEMS.length : null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close()
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
  }

  const isFailed = (src: string) => failedSrcs.has(src)
  const markFailed = (src: string) => setFailedSrcs(prev => new Set([...prev, src]))

  return (
    <section id="galería" style={{ background: "#f7f8ff", position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Galería"
          subtitle="Momentos que muestran la vida diaria, las actividades y el espíritu de nuestra comunidad escolar."
          color={C.navy}
          accent={C.magenta}
        />

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
          className="gallery-grid"
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightbox(idx)}
              style={{
                aspectRatio: "4 / 3",
                width: "100%",
                overflow: "hidden",
                borderRadius: 16,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(23,27,90,0.10)",
                position: "relative",
                background: "#e8eaf6",
              }}
              onMouseEnter={e => {
                const img = (e.currentTarget as HTMLElement).querySelector("img")
                if (img) { img.style.transform = "scale(1.06)"; img.style.filter = "brightness(1.04)" }
                const overlay = (e.currentTarget as HTMLElement).querySelector(".gallery-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "1"
              }}
              onMouseLeave={e => {
                const img = (e.currentTarget as HTMLElement).querySelector("img")
                if (img) { img.style.transform = "scale(1)"; img.style.filter = "brightness(1)" }
                const overlay = (e.currentTarget as HTMLElement).querySelector(".gallery-overlay") as HTMLElement
                if (overlay) overlay.style.opacity = "0"
              }}
            >
              {isFailed(item.src) ? (
                <GalleryPlaceholder alt={item.alt} />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={() => markFailed(item.src)}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.35s ease, filter 0.35s ease",
                    display: "block",
                  }}
                />
              )}

              {/* Hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, ${C.navy}cc 0%, transparent 60%)`,
                  opacity: 0, transition: "opacity 0.3s",
                  display: "flex", alignItems: "flex-end", padding: "14px 16px",
                  pointerEvents: "none",
                }}
              >
                <span style={{ color: C.white, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.3 }}>
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive style */}
        <style>{`
          @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(10,10,30,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
          onClick={close}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close */}
          <button
            onClick={close}
            style={{ position: "absolute", top: 20, right: 24, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.white }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            style={{ position: "absolute", left: 16, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.white }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 860, width: "100%", borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
          >
            {isFailed(GALLERY_ITEMS[lightbox].src) ? (
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <GalleryPlaceholder alt={GALLERY_ITEMS[lightbox].alt} />
              </div>
            ) : (
              <img
                src={GALLERY_ITEMS[lightbox].src}
                alt={GALLERY_ITEMS[lightbox].alt}
                onError={() => markFailed(GALLERY_ITEMS[lightbox].src)}
                style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: "80vh" }}
              />
            )}
            <div style={{ background: C.navy, padding: "12px 20px" }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Nunito',sans-serif", fontSize: "0.85rem", margin: 0 }}>
                {isFailed(GALLERY_ITEMS[lightbox].src) ? `Reemplazar imagen ${GALLERY_ITEMS[lightbox].id}` : GALLERY_ITEMS[lightbox].alt}
                <span style={{ color: "rgba(255,255,255,0.35)", marginLeft: 12 }}>{lightbox + 1} / {GALLERY_ITEMS.length}</span>
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            style={{ position: "absolute", right: 16, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.white }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}

// ── ESCUELA PARA PADRES ───────────────────────────────────────────────────────
function EscuelaPadres() {
  const items = [
    { IconEl: Icon.users,     title: "Talleres para familias", desc: "Sesiones prácticas sobre comunicación, límites, desarrollo emocional y acompañamiento en el aprendizaje." },
    { IconEl: Icon.chat,      title: "Charlas de orientación", desc: "Espacios de reflexión con especialistas en educación infantil y crianza positiva." },
    { IconEl: Icon.heart,     title: "Comunidad de apoyo",     desc: "Un espacio de confianza donde madres y padres comparten experiencias y se apoyan mutuamente." },
    { IconEl: Icon.link,      title: "Vínculo escuela-familia",desc: "Fortalecemos la comunicación continua para que el proceso educativo sea una experiencia compartida." },
  ]
  return (
    <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff3fa 100%)", position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Chip color={C.magenta}>Escuela para padres</Chip>
            <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: 12, marginBottom: 16 }}>Acompañamos también a las familias</h2>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: "1rem", marginBottom: 28 }}>
              Sabemos que la educación es un trabajo en conjunto. Por eso contamos con escuela para padres, un espacio pensado para fortalecer la comunicación, el acompañamiento familiar y la formación integral de nuestras niñas y niños.
            </p>
            <a href="#contacto" style={{ background: C.magenta, color: C.white, fontFamily: "'Nunito',sans-serif", fontWeight: 800, borderRadius: 99, padding: "12px 28px", fontSize: "0.92rem", textDecoration: "none", boxShadow: `0 6px 20px ${C.magenta}44`, display: "inline-block", transition: "transform 0.2s" }} className="hover:-translate-y-0.5">Más información</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map(it => (
              <div key={it.title} style={{ background: C.white, borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(183,23,106,0.08)", borderLeft: `4px solid ${C.magenta}`, display: "flex", flexDirection: "column" }}>
                {/* ✏️ Image slot — set src="/images/padres-XX.jpg" when photo is ready */}
                <ImgPlaceholder src="" alt={it.title} height={120} radius={0} />
                <div style={{ padding: "1.25rem 1.25rem" }}>
                  <div style={{ marginBottom: 8, width: 36, height: 36, borderRadius: 10, background: C.magenta + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <it.IconEl size={18} color={C.magenta} />
                  </div>
                  <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1.05rem", marginBottom: 6 }}>{it.title}</h4>
                  <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── VIDEO INSTITUCIONAL ───────────────────────────────────────────────────────
function VideoInstitucional() {
  const [playing, setPlaying] = useState(false)
  return (
    <section style={{ background: C.navy, position: "relative" }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Chip color={C.yellow}>Video institucional</Chip>
        <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "clamp(1.8rem,4vw,2.6rem)", marginTop: 12, marginBottom: 8 }}>Conoce nuestro jardín</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: 32, fontSize: "0.96rem" }}>
          Muy pronto podrás ver aquí un video breve sobre nuestras instalaciones, actividades y propuesta educativa.
        </p>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", cursor: "pointer", background: "#0d1040" }} onClick={() => setPlaying(true)}>
          <img src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=1200&h=680&fit=crop&auto=format" alt="Placeholder — video institucional Jardín de Niños Colibrí" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", opacity: playing ? 0.3 : 0.6, transition: "opacity 0.3s" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${C.navy}cc,${C.purple}88)` }} />
          {!playing ? (
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 32px ${C.yellow}88`, transition: "transform 0.2s" }} className="hover:scale-110">
                <Icon.play size={28} color={C.navy} />
              </div>
              <span style={{ color: C.white, fontFamily: "'Fredoka One',cursive", fontSize: "1.1rem" }}>Reproducir video</span>
            </div>
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.white, fontFamily: "'Fredoka One',cursive", fontSize: "1.2rem" }}>Video próximamente</span>
            </div>
          )}
          <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,0.6)", color: C.white, borderRadius: 8, padding: "4px 10px", fontSize: "0.78rem", fontWeight: 700 }}>Próximamente</div>
        </div>
      </div>
    </section>
  )
}

// ── EMMI PRINCIPAL ────────────────────────────────────────────────────────────
function EMMLarge() {
  // ✏️  Fill in src="/images/emmi-XX.jpg" for each card when photos are ready
  const valueCards = [
    { IconEl: Icon.handshake, title: "Aprendizaje activo",                      color: C.red,    imgSrc: "", imgAlt: "Niños aprendiendo activamente", desc: "Cada actividad invita a las niñas y los niños a participar, descubrir y aprender haciendo, en lugar de recibir la información de manera pasiva." },
    { IconEl: Icon.book,      title: "Materiales que se pueden tocar y explorar", color: C.orange, imgSrc: "", imgAlt: "Materiales manipulativos en el aula", desc: "Libros, juegos y materiales manipulativos permiten comprender ideas abstractas mediante experiencias concretas, especialmente en lenguaje y matemáticas." },
    { IconEl: Icon.monitor,   title: "Tecnología con propósito educativo",        color: C.purple, imgSrc: "", imgAlt: "Tecnología educativa en el jardín", desc: "Videos, juegos y cuestionarios interactivos complementan el trabajo en el aula y mantienen el aprendizaje cercano, visual y estimulante." },
    { IconEl: Icon.award,     title: "Acompañamiento docente estructurado",       color: C.navy,   imgSrc: "", imgAlt: "Docente guiando a sus alumnos", desc: "Las docentes cuentan con planeaciones, guías semanales y recursos paso a paso que les permiten organizar las experiencias de aprendizaje y dar continuidad al desarrollo de cada grupo." },
  ]

  const steps = [
    { n: "01", label: "Descubrir", color: C.red,    desc: "Las niñas y los niños se acercan a un nuevo tema mediante una historia, una pregunta, un juego o una experiencia visual." },
    { n: "02", label: "Explorar",  color: C.orange, desc: "Utilizan materiales, imágenes, movimientos y recursos manipulativos para observar, comparar y experimentar." },
    { n: "03", label: "Practicar", color: C.green,  desc: "Refuerzan lo aprendido mediante actividades, dinámicas, videos y juegos interactivos." },
    { n: "04", label: "Compartir", color: C.purple, desc: "Expresan sus ideas, explican sus descubrimientos y aplican lo aprendido en situaciones de su vida cotidiana." },
  ]

  const benefitsKids = [
    "Fortalece la curiosidad y el gusto por aprender",
    "Desarrolla pensamiento lógico y resolución de problemas",
    "Favorece la expresión oral y la lectoescritura",
    "Impulsa la creatividad y la participación",
    "Se adapta a diferentes formas y ritmos de aprendizaje",
    "Relaciona los contenidos escolares con experiencias concretas",
  ]

  return (
    <section id="emmi" style={{ background: C.white, position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Hero block */}
        <div style={{ background: `linear-gradient(135deg,${C.navy} 0%,${C.purple} 100%)`, borderRadius: 32, padding: "clamp(2rem,5vw,4rem)", marginBottom: 64, overflow: "hidden" }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span style={{ background: C.yellow, color: C.navy, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "0.78rem", borderRadius: 99, padding: "4px 14px", display: "inline-block", marginBottom: 16 }}>Tecnología que acompaña el aprendizaje</span>
              <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "clamp(1.8rem,3.8vw,2.8rem)", lineHeight: 1.15, marginBottom: 16 }}>Aprender jugando,<br />explorar creando</h2>
              <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.82, fontSize: "0.97rem", marginBottom: 12 }}>
                En el Jardín de Niños Colibrí enriquecemos nuestra propuesta educativa con EMMI, un ecosistema de aprendizaje diseñado especialmente para preescolar.
              </p>
              <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.82, fontSize: "0.92rem", marginBottom: 12 }}>
                Esta herramienta combina recursos físicos y digitales para convertir cada lección en una experiencia activa, visual y significativa. Las niñas y los niños no se limitan a observar o memorizar: experimentan, manipulan materiales, resuelven desafíos, juegan, se expresan y construyen nuevos conocimientos a partir de su propia curiosidad.
              </p>
              <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.82, fontSize: "0.92rem" }}>
                EMMI integra metodologías internacionales con los contenidos de la Nueva Escuela Mexicana, permitiendo fortalecer áreas esenciales como pensamiento matemático, lenguaje, lectoescritura e inglés mediante experiencias adecuadas para cada etapa del desarrollo infantil.
              </p>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 360, background: "#1a2080" }}>
              <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&h=720&fit=crop&auto=format" alt="Niños explorando materiales educativos en el aula" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }} />
            </div>
          </div>
        </div>

        {/* Value cards */}
        <SectionHeader title="Cuatro pilares de valor EMMI" color={C.navy} accent={C.green} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valueCards.map(vc => (
            <div key={vc.title} style={{ background: C.white, borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(23,27,90,0.08)", borderTop: `5px solid ${vc.color}`, transition: "transform 0.2s", display: "flex", flexDirection: "column" }} className="hover:-translate-y-1">
              {/* ✏️ Image slot — replace src in ImgPlaceholder when photo is ready */}
              <ImgPlaceholder src={vc.imgSrc} alt={vc.imgAlt} height={150} radius={0} />
              <div style={{ padding: "1.25rem 1.5rem", flex: 1 }}>
                <div style={{ marginBottom: 10, width: 40, height: 40, borderRadius: 11, background: vc.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <vc.IconEl size={20} color={vc.color} />
                </div>
                <h4 style={{ fontFamily: "'Fredoka One',cursive", color: vc.color, fontSize: "1.1rem", marginBottom: 8 }}>{vc.title}</h4>
                <p style={{ color: "#555", fontSize: "0.87rem", lineHeight: 1.72, margin: 0 }}>{vc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <SectionHeader title="Cómo se vive EMMI en el aula" subtitle="Un ciclo de aprendizaje que respeta los tiempos y la curiosidad natural de cada niño y niña." color={C.purple} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map(s => (
            <div key={s.label} style={{ background: `linear-gradient(160deg,${s.color}18 0%,${s.color}06 100%)`, border: `2px solid ${s.color}30`, borderRadius: 20, padding: "2rem 1.5rem" }}>
              <div style={{ fontFamily: "'Fredoka One',cursive", color: s.color, fontSize: "2.4rem", marginBottom: 4 }}>{s.n}</div>
              <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1.2rem", marginBottom: 10 }}>{s.label}</h4>
              <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.72, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div style={{ background: "#f4fff8", borderRadius: 24, padding: "2rem" }}>
            <h3 style={{ fontFamily: "'Fredoka One',cursive", color: C.green, fontSize: "1.5rem", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
              <Icon.leaf size={22} color={C.green} /> Beneficios para niñas y niños
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {benefitsKids.map(b => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: C.green, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Icon.check size={11} color={C.white} />
                  </span>
                  <span style={{ color: "#444", fontSize: "0.93rem", lineHeight: 1.65 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#fff8f4", borderRadius: 24, overflow: "hidden" }}>
            {/* ✏️ Image slot — set src="/images/familias.jpg" when photo is ready */}
            <ImgPlaceholder src="" alt="Familias del Jardín de Niños Colibrí" height={160} radius={0} />
            <div style={{ padding: "1.75rem 2rem" }}>
              <h3 style={{ fontFamily: "'Fredoka One',cursive", color: C.orange, fontSize: "1.5rem", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.users size={22} color={C.orange} /> Beneficios para las familias
              </h3>
              {[
                { t: "Una experiencia educativa con mayor continuidad", d: "La integración de recursos físicos y digitales permite que las familias comprendan mejor qué están aprendiendo sus hijas e hijos y acompañen algunos procesos fuera del aula." },
                { t: "Seguimiento y evaluación pedagógica", d: "EMMI también plantea herramientas de seguimiento, evaluación pedagógica y recursos que ayudan a observar avances y detectar áreas que necesitan fortalecerse." },
              ].map(item => (
                <div key={item.t} style={{ background: C.white, borderRadius: 16, padding: "1.5rem", boxShadow: "0 2px 16px rgba(201,91,45,0.08)", marginBottom: 14 }}>
                  <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1.1rem", marginBottom: 8 }}>{item.t}</h4>
                  <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.72, margin: 0 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── HORARIOS ──────────────────────────────────────────────────────────────────
function Horarios() {
  return (
    <section id="horarios" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#fafff5 100%)", position: "relative" }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Horarios" subtitle="Diseñamos nuestros horarios pensando en las necesidades de las familias modernas." color={C.navy} accent={C.green} />
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { IconEl: Icon.school, label: "Horario escolar", time: "8:00 a.m. — 1:00 p.m.", color: C.navy, bg: "#eef1ff", desc: "Jornada completa de actividades académicas, recreo, convivencia y aprendizaje integral." },
            { IconEl: Icon.sun,    label: "Guardería",        time: "7:30 a.m. — 6:00 p.m.", color: C.green, bg: "#f0fff6", desc: "Servicio extendido de cuidado y estimulación para familias que necesitan mayor cobertura horaria." },
          ].map(h => (
            <div key={h.label} style={{ background: h.bg, borderRadius: 24, padding: "2.5rem 2rem", boxShadow: "0 4px 24px rgba(23,27,90,0.07)", borderLeft: `6px solid ${h.color}` }}>
              <div style={{ marginBottom: 14, width: 52, height: 52, borderRadius: 14, background: h.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h.IconEl size={26} color={h.color} />
              </div>
              <div style={{ fontFamily: "'Nunito',sans-serif", color: "#888", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{h.label}</div>
              <div style={{ fontFamily: "'Fredoka One',cursive", color: h.color, fontSize: "clamp(1.6rem,3vw,2rem)", marginBottom: 12 }}>{h.time}</div>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.72, margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CONTACTO ──────────────────────────────────────────────────────────────────
function Contacto() {
  const info = [
    { IconEl: Icon.map,      label: "Dirección",        value: "Gral. Francisco Morazán No. 87, Col. Ignacio Zaragoza", color: C.navy,    href: "https://maps.google.com/?q=General+Francisco+Morazán+87+Col+Ignacio+Zaragoza+CDMX" },
    { IconEl: Icon.phone,    label: "WhatsApp",          value: "Enviar mensaje",               color: C.green,   href: "https://wa.me/525554335816?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20del%20Jard%C3%ADn%20de%20Ni%C3%B1os%20Colibr%C3%AD." },
    { IconEl: Icon.phone,    label: "Teléfono local",    value: "55 71 23 71",                  color: C.purple,  href: "tel:5255712371" },
    { IconEl: Icon.mail,     label: "Correo",            value: "jardincolibri91@hotmail.com",  color: C.orange,  href: "mailto:jardincolibri91@hotmail.com" },
    { IconEl: Icon.facebook, label: "Facebook",          value: "Colibrí Jardín de Niños",      color: C.navy,    href: "https://www.facebook.com/profile.php?id=61550562310995&locale=es_LA" },
  ]

  const socials = [
    { IconEl: Icon.facebook,  label: "Facebook",  color: C.navy,    href: "https://www.facebook.com/profile.php?id=61550562310995&locale=es_LA" },
    { IconEl: Icon.instagram, label: "Instagram", color: C.magenta, href: "https://www.instagram.com/jardindeninoscolibri?igsi=MXFkem56eGYydHh5NA==" },
    { IconEl: Icon.tiktok,    label: "TikTok",    color: C.carbon,  href: "#" },
  ]

  return (
    <section id="contacto" style={{ background: C.white, position: "relative" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Contacto" subtitle="Estamos disponibles para responder todas tus preguntas y ayudarte a conocer nuestro jardín." color={C.navy} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {info.map(it => (
            <a key={it.label} href={it.href} target="_blank" rel="noopener noreferrer"
              style={{ background: "#f7f8ff", borderRadius: 20, padding: "1.75rem 1.5rem", boxShadow: "0 4px 20px rgba(23,27,90,0.06)", textAlign: "center", textDecoration: "none", display: "block", transition: "transform 0.2s,box-shadow 0.2s" }}
              className="hover:-translate-y-1 hover:shadow-lg"
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: it.color + "18", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <it.IconEl size={22} color={it.color} />
              </div>
              <div style={{ fontFamily: "'Nunito',sans-serif", color: "#999", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{it.label}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", color: C.navy, fontWeight: 800, fontSize: "0.88rem", lineHeight: 1.5 }}>{it.value}</div>
            </a>
          ))}
        </div>

        {/* Social links row */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "0.85rem", fontWeight: 700, marginBottom: 14, fontFamily: "'Nunito',sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>Síguenos en redes sociales</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 48, height: 48, borderRadius: 14, background: s.color + "12", border: `2px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s,transform 0.2s", textDecoration: "none" }}
                title={s.label}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.color; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = s.color + "12"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                <s.IconEl size={20} color={s.color} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── CTA FINAL ─────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section style={{ background: `linear-gradient(135deg,${C.green} 0%,${C.navy} 100%)`, position: "relative" }} className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <Icon.feather size={30} color={C.white} />
        </div>
        <h2 style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: 14 }}>
          Agenda una visita y conoce Jardín de Niños Colibrí
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.82, marginBottom: 36, fontSize: "1rem" }}>
          Estamos listos para acompañarte en una de las etapas más importantes del desarrollo de tu hija o hijo.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <a href="tel:+525554335816"
            style={{ background: C.yellow, color: C.navy, fontFamily: "'Fredoka One',cursive", fontSize: "1.1rem", borderRadius: 99, padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: `0 8px 28px rgba(227,193,27,0.5)`, transition: "transform 0.22s,box-shadow 0.22s", textDecoration: "none" }}
            className="hover:-translate-y-1 hover:shadow-2xl"
          >
            <Icon.phone size={20} color={C.navy} /> Llamar ahora
          </a>
          <a href="mailto:jardincolibri91@hotmail.com"
            style={{ background: "rgba(255,255,255,0.12)", color: C.white, fontFamily: "'Fredoka One',cursive", fontSize: "1.1rem", borderRadius: 99, padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: 10, border: "2px solid rgba(255,255,255,0.3)", transition: "transform 0.22s,background 0.22s", textDecoration: "none" }}
            className="hover:-translate-y-1 hover:bg-white/20"
          >
            <Icon.mail size={20} color={C.white} /> Solicitar informes
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.white, borderTop: `1px solid #e8e8f0` }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rainbow top stripe */}
        <div style={{ height: 4, borderRadius: 99, background: `linear-gradient(90deg,${C.red},${C.orange},${C.yellow},${C.green},${C.navy},${C.purple},${C.magenta})`, marginBottom: 40 }} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logoHeader} alt="Jardín de Niños Colibrí" style={{ height: 52, objectFit: "contain", marginBottom: 12 }} />
            <p style={{ color: "#888", fontSize: "0.84rem", lineHeight: 1.7 }}>Cuatro Pilares de la Educación</p>
            <div className="flex gap-1.5 mt-4">
              {[C.red, C.orange, C.yellow, C.green, C.navy, C.purple, C.magenta].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1rem", marginBottom: 12 }}>Contacto</h4>
            {[
              { IconEl: Icon.phone, v: "+52 55 5433 5816",          color: C.green,  href: "tel:+525554335816" },
              { IconEl: Icon.phone, v: "55 71 23 71",               color: C.purple, href: "tel:5255712371" },
              { IconEl: Icon.mail,  v: "jardincolibri91@hotmail.com", color: C.orange, href: "mailto:jardincolibri91@hotmail.com" },
            ].map(i => (
              <a key={i.v} href={i.href} style={{ color: "#555", fontSize: "0.84rem", marginBottom: 8, display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = i.color}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#555"}
              >
                <i.IconEl size={14} color={i.color} />{i.v}
              </a>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {[
                { IconEl: Icon.facebook,  color: C.navy,    href: "https://www.facebook.com/profile.php?id=61550562310995&locale=es_LA", label: "Facebook" },
                { IconEl: Icon.instagram, color: C.magenta, href: "https://www.instagram.com/jardindeninoscolibri?igsi=MXFkem56eGYydHh5NA==", label: "Instagram" },
                { IconEl: Icon.tiktok,    color: C.carbon,  href: "#", label: "TikTok" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{ width: 34, height: 34, borderRadius: 10, background: s.color + "12", border: `1.5px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = s.color + "28"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = s.color + "12"}
                >
                  <s.IconEl size={16} color={s.color} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1rem", marginBottom: 12 }}>Dirección</h4>
            <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7 }}>
              General Francisco Morazán No. 87,<br />Col. Ignacio Zaragoza
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Fredoka One',cursive", color: C.navy, fontSize: "1rem", marginBottom: 12 }}>Horarios</h4>
            <p style={{ color: "#555", fontSize: "0.84rem", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <Icon.school size={14} color={C.navy} /> Escolar: 8:00 a.m. — 1:00 p.m.
            </p>
            <p style={{ color: "#555", fontSize: "0.84rem", display: "flex", alignItems: "center", gap: 8 }}>
              <Icon.sun size={14} color={C.green} /> Guardería: 7:30 a.m. — 6:00 p.m.
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #eee", paddingTop: 20, textAlign: "center" }}>
          <p style={{ color: "#aaa", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Jardín de Niños Colibrí. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── CHATBOT ───────────────────────────────────────────────────────────────────
type BotMessage = { from: "bot" | "user"; text: string }

const BOT_FLOWS: Record<string, { reply: string; options?: string[] }> = {
  "Horarios":              { reply: "Nuestro horario escolar es de 8:00 a.m. a 1:00 p.m. También contamos con servicio de guardería de 7:30 a.m. a 6:00 p.m. para mayor comodidad de las familias.", options: ["Inscripciones", "Costo", "Ubicación", "Otra pregunta"] },
  "Inscripciones":         { reply: "Para inscribir a tu hija o hijo, puedes llamarnos al +52 55 5433 5816 o escribirnos a jardincolibri91@hotmail.com. Con gusto te orientamos sobre el proceso y la documentación necesaria.", options: ["Horarios", "Costo", "Ubicación", "Otra pregunta"] },
  "Costo":                 { reply: "Los costos varían según el nivel y el servicio elegido. Te invitamos a contactarnos directamente al +52 55 5433 5816 para recibir información actualizada y personalizada.", options: ["Inscripciones", "Horarios", "Otra pregunta"] },
  "Metodología EMMI":      { reply: "EMMI es un ecosistema de aprendizaje diseñado para preescolar que combina materiales físicos y recursos digitales. Favorece aprendizajes activos, significativos y adecuados a cada etapa del desarrollo infantil. Integra metodologías internacionales con los contenidos de la Nueva Escuela Mexicana.", options: ["Áreas de aprendizaje", "Extracurriculares", "Nuestros valores", "Otra pregunta"] },
  "Áreas de aprendizaje":  { reply: "Trabajamos pensamiento matemático, lenguaje y comunicación, inglés, yoga y educación física. Todo integrado en una propuesta de formación integral y significativa.", options: ["Extracurriculares", "Metodología EMMI", "Nuestros valores", "Otra pregunta"] },
  "Extracurriculares":     { reply: "Ofrecemos natación, música y estudiantina, talleres de pintura y creatividad, y ecología. Estas actividades enriquecen la formación académica y el desarrollo físico, artístico y social de las niñas y los niños.", options: ["Horarios", "Inscripciones", "Nuestros valores", "Otra pregunta"] },
  "Ubicación":             { reply: "Nos ubicamos en General Francisco Morazán No. 87, Colonia Ignacio Zaragoza. Puedes visitarnos durante el horario de atención o agendando una cita previa.", options: ["Horarios", "Inscripciones", "Otra pregunta"] },
  "Escuela para padres":   { reply: "Contamos con un programa de escuela para padres: talleres, charlas y espacios de orientación para fortalecer el vínculo familia-escuela y acompañar mejor el desarrollo de sus hijas e hijos.", options: ["Nuestros valores", "Inscripciones", "Otra pregunta"] },
  "Nuestros valores":      { reply: "En el Jardín de Niños Colibrí vivimos seis valores esenciales: Respeto, Responsabilidad, Honestidad, Solidaridad, Tolerancia y Amabilidad. Cada uno guía la convivencia diaria y el desarrollo integral de nuestras alumnas y alumnos.", options: ["Metodología EMMI", "Áreas de aprendizaje", "Escuela para padres", "Otra pregunta"] },
  "Otra pregunta":         { reply: "Con gusto te atendemos directamente. Llámanos al +52 55 5433 5816 o escríbenos a jardincolibri91@hotmail.com. También puedes encontrarnos en Facebook e Instagram como Colibrí Jardín de Niños.", options: ["Horarios", "Inscripciones", "Ubicación"] },
}

const INITIAL_OPTIONS = ["Horarios", "Inscripciones", "Metodología EMMI", "Nuestros valores", "Extracurriculares", "Ubicación", "Escuela para padres"]
const WELCOME = "Hola, soy Colibrí, tu asistente virtual del Jardín de Niños Colibrí. Estoy aquí para ayudarte a conocer nuestra propuesta educativa. ¿En qué puedo orientarte?"

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<BotMessage[]>([{ from: "bot", text: WELCOME }])
  const [options, setOptions] = useState<string[]>(INITIAL_OPTIONS)
  const [typing, setTyping] = useState(false)
  const bottomRef = useState<HTMLDivElement | null>(null)
  const endRef = { current: null as HTMLDivElement | null }

  const choose = (option: string) => {
    const flow = BOT_FLOWS[option]
    if (!flow) return

    setMessages(prev => [...prev, { from: "user", text: option }])
    setOptions([])
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: "bot", text: flow.reply }])
      setOptions(flow.options ?? INITIAL_OPTIONS)
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 50)
    }, 900)
  }

  const reset = () => {
    setMessages([{ from: "bot", text: WELCOME }])
    setOptions(INITIAL_OPTIONS)
    setTyping(false)
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 300,
          width: 60, height: 60, borderRadius: "50%",
          background: `linear-gradient(135deg, ${C.green}, ${C.navy})`,
          border: "none", cursor: "pointer",
          boxShadow: "0 6px 28px rgba(23,27,90,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
        aria-label="Abrir asistente"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Notification dot when closed */}
      {!open && (
        <div style={{ position: "fixed", bottom: 72, right: 22, zIndex: 301, background: C.red, width: 12, height: 12, borderRadius: "50%", border: "2px solid white" }} />
      )}

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed", bottom: 96, right: 24, zIndex: 300,
            width: "min(360px, calc(100vw - 32px))",
            borderRadius: 20,
            boxShadow: "0 20px 60px rgba(23,27,90,0.25)",
            background: C.white,
            display: "flex", flexDirection: "column",
            overflow: "hidden",
            maxHeight: "75vh",
          }}
        >
          {/* Header */}
          <div style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.purple})`, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon.feather size={18} color={C.white} />
            </div>
            <div>
              <div style={{ fontFamily: "'Fredoka One',cursive", color: C.white, fontSize: "1rem", lineHeight: 1.2 }}>Colibrí</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, display: "inline-block" }} />
                Asistente virtual
              </div>
            </div>
            <button onClick={reset} title="Reiniciar conversación"
              style={{ marginLeft: "auto", background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, padding: "5px 8px", cursor: "pointer", color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}
            >
              Reiniciar
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, background: "#f8f9ff" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
                {m.from === "bot" && (
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${C.green},${C.navy})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon.feather size={13} color={C.white} />
                  </div>
                )}
                <div style={{
                  maxWidth: "78%",
                  background: m.from === "bot" ? C.white : `linear-gradient(135deg,${C.green},${C.navy})`,
                  color: m.from === "bot" ? C.carbon : C.white,
                  borderRadius: m.from === "bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                  padding: "10px 13px",
                  fontSize: "0.87rem",
                  lineHeight: 1.6,
                  boxShadow: "0 2px 8px rgba(23,27,90,0.08)",
                  fontFamily: "'Nunito',sans-serif",
                  fontWeight: m.from === "bot" ? 500 : 600,
                }}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${C.green},${C.navy})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon.feather size={13} color={C.white} />
                </div>
                <div style={{ background: C.white, borderRadius: "16px 16px 16px 4px", padding: "12px 16px", boxShadow: "0 2px 8px rgba(23,27,90,0.08)", display: "flex", gap: 5, alignItems: "center" }}>
                  {[0, 1, 2].map(d => (
                    <div key={d} style={{ width: 7, height: 7, borderRadius: "50%", background: C.navy + "55", animation: `bounce 1.1s ${d * 0.18}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={r => { endRef.current = r }} />
          </div>

          {/* Options */}
          {options.length > 0 && !typing && (
            <div style={{ padding: "10px 14px 14px", background: C.white, borderTop: "1px solid #eee", display: "flex", flexWrap: "wrap", gap: 7 }}>
              {options.map(opt => (
                <button key={opt} onClick={() => choose(opt)}
                  style={{
                    background: C.navy + "0f", border: `1.5px solid ${C.navy}22`,
                    borderRadius: 99, padding: "6px 13px",
                    fontFamily: "'Nunito',sans-serif", fontWeight: 700,
                    fontSize: "0.78rem", color: C.navy, cursor: "pointer",
                    transition: "background 0.18s,border-color 0.18s,color 0.18s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.navy; (e.currentTarget as HTMLElement).style.color = C.white }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.navy + "0f"; (e.currentTarget as HTMLElement).style.color = C.navy }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>

      {/* suppress unused warning */}
      {bottomRef && null}
    </>
  )
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuienesSomos />
      <MisionVision />
      <NuestrosValores />
      <Metodologia />
      <AreasAprendizaje />
      <Extracurriculares />
      <Galeria />
      <EscuelaPadres />
      <VideoInstitucional />
      <EMMLarge />
      <Horarios />
      <Contacto />
      <CTAFinal />
      <Footer />
      <Chatbot />
    </>
  )
}
