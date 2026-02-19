import { motion, useScroll, useTransform } from "framer-motion";
import tokens from "../../lib/constants/colours";

const Hero = ({ onRegister }: { onRegister: () => void }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}>
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "20%",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(248,113,113,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${tokens.border} 1px, transparent 1px), linear-gradient(90deg, ${tokens.border} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.3,
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <motion.div style={{ y, opacity, position: "relative", maxWidth: 760 }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(129,140,248,0.1)",
            border: `1px solid rgba(129,140,248,0.25)`,
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
          }}>
          <span
            style={{
              fontSize: 12,
              color: tokens.accent,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
            ✦ Personal Finance, Reimagined
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: 0,
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: tokens.text,
            fontFamily: "'DM Sans', sans-serif",
          }}>
          Know exactly{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            where your money goes.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: "24px auto 0",
            fontSize: 18,
            lineHeight: 1.7,
            color: tokens.sub,
            maxWidth: 520,
            fontFamily: "'DM Sans', sans-serif",
          }}>
          Ledger gives you a real-time view of your spending, savings, and
          budget — all in one beautifully simple dashboard.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
          }}>
          <button
            onClick={onRegister}
            style={{
              background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
              border: "none",
              color: "#fff",
              padding: "15px 36px",
              borderRadius: 13,
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 8px 32px rgba(129,140,248,0.4)`,
              transition: "transform 0.15s, opacity 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.opacity = "1";
            }}>
            Start for free →
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1.5px solid ${tokens.border}`,
              color: tokens.text,
              padding: "15px 36px",
              borderRadius: 13,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = tokens.accent)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = tokens.border)
            }>
            See how it works
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          style={{
            margin: "28px 0 0",
            fontSize: 13,
            color: tokens.muted,
            fontFamily: "'DM Sans', sans-serif",
          }}>
          Trusted by{" "}
          <span style={{ color: tokens.accentHi, fontWeight: 700 }}>
            2,400+
          </span>{" "}
          people managing their finances
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
