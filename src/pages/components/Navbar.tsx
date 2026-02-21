import { motion } from "framer-motion";
import tokens from "../../lib/constants/colours";

const Navbar = ({
  onLogin,
  onRegister,
}: {
  onLogin: () => void;
  onRegister: () => void;
}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: 68,
        background: "rgba(15,17,23,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${tokens.border}`,
      }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "#fff",
            boxShadow: `0 0 20px rgba(129,140,248,0.35)`,
          }}>
          ◈
        </div>
        <span
          style={{
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: "-0.04em",
            color: tokens.text,
            fontFamily: "'DM Sans', sans-serif",
          }}>
          Savee
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {["About", "Features", "Testimonials", "Pricing"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: tokens.sub,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = tokens.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = tokens.sub)}>
            {link}
          </a>
        ))}
      </div>

      {/* Auth buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={onLogin}
          style={{
            background: "none",
            border: `1.5px solid ${tokens.border}`,
            color: tokens.text,
            padding: "9px 20px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = tokens.accent;
            e.currentTarget.style.color = tokens.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = tokens.border;
            e.currentTarget.style.color = tokens.text;
          }}>
          Sign in
        </button>
        <button
          onClick={onRegister}
          style={{
            background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
            border: "none",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 4px 16px rgba(129,140,248,0.35)`,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
          Get started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
