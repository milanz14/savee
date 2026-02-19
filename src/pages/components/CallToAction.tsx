import FadeUp from "./FadeUp";
import tokens from "../../lib/constants/colours";

const CtaPrimary = ({ onRegister }: { onRegister: () => void }) => {
  return (
    <section style={{ padding: "60px 48px" }}>
      <FadeUp>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: `linear-gradient(135deg, rgba(129,140,248,0.12) 0%, rgba(129,140,248,0.04) 100%)`,
            border: `1px solid rgba(129,140,248,0.25)`,
            borderRadius: 28,
            padding: "72px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              height: 200,
              background:
                "radial-gradient(ellipse, rgba(129,140,248,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: tokens.accent,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Get started today
          </span>
          <h2
            style={{
              margin: "16px 0 16px",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: tokens.text,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Your finances deserve
            <br />
            better than a spreadsheet.
          </h2>
          <p
            style={{
              margin: "0 auto 36px",
              fontSize: 16,
              color: tokens.sub,
              maxWidth: 420,
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Join thousands of people who finally feel in control of their money.
            Free to start, no credit card required.
          </p>
          <button
            onClick={onRegister}
            style={{
              background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
              border: "none",
              color: "#fff",
              padding: "15px 40px",
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
            Create free account →
          </button>
        </div>
      </FadeUp>
    </section>
  );
};

export default CtaPrimary;
