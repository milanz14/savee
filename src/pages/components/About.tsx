import FadeUp from "./FadeUp";
import tokens from "../../lib/constants/colours";

const About = () => {
  const features = [
    {
      icon: "📊",
      title: "Real-time tracking",
      body: "Every transaction categorised and visualised the moment it happens.",
    },
    {
      icon: "🎯",
      title: "Budget that sticks",
      body: "Set monthly limits by category. Savee keeps you honest with gentle nudges before you overspend.",
    },
    {
      icon: "✦",
      title: "AI-powered insights",
      body: "Your AI Pulse surfaces patterns you'd never notice and tells you in plain language what they mean.",
    },
    // {
    //   icon: "🔒",
    //   title: "Bank-grade security",
    //   body: "256-bit encryption, read-only bank connections, and zero data selling. Ever.",
    // },
  ];

  return (
    <section
      id="about"
      style={{ padding: "120px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeUp>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: tokens.accent,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Why Savee
          </span>
          <h2
            style={{
              margin: "14px 0 16px",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: tokens.text,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Built for people who actually
            <br />
            want to understand their money
          </h2>
          <p
            style={{
              fontSize: 17,
              color: tokens.sub,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Most finance apps overwhelm you with data. Savee surfaces only what
            matters.
          </p>
        </div>
      </FadeUp>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}>
        {features.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.1}>
            <div
              style={{
                background: tokens.surface,
                border: `1px solid ${tokens.border}`,
                borderRadius: 20,
                padding: "32px 28px",
                height: "100%",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(129,140,248,0.4)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  tokens.border;
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(129,140,248,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  marginBottom: 20,
                }}>
                {f.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 17,
                  fontWeight: 700,
                  color: tokens.text,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                {f.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: tokens.sub,
                  lineHeight: 1.7,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                {f.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default About;
