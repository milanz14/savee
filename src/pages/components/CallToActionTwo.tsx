import FadeUp from "./FadeUp";
import tokens from "../../lib/constants/colours";

const CtaSecondary = ({ onRegister }: { onRegister: () => void }) => {
  const stats = [
    { value: "2,400+", label: "Active users" },
    { value: "$4.2M", label: "Tracked monthly" },
    { value: "94%", label: "Stay on budget" },
  ];

  return (
    <section style={{ padding: "80px 48px 120px" }}>
      <FadeUp>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 64,
              marginBottom: 72,
              flexWrap: "wrap",
            }}>
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "clamp(36px, 5vw, 54px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: tokens.text,
                      fontFamily: "'DM Sans', sans-serif",
                      background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: tokens.muted,
                      marginTop: 4,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: tokens.text,
                fontFamily: "'DM Sans', sans-serif",
              }}>
              Ready to take control?
            </h2>
            <p
              style={{
                margin: "0 auto 36px",
                fontSize: 16,
                color: tokens.sub,
                maxWidth: 400,
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}>
              Set up in under two minutes. Connect your accounts and see your
              full financial picture instantly.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
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
                Get started free →
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default CtaSecondary;
