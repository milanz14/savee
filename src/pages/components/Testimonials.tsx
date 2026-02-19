import FadeUp from "./FadeUp";
import tokens from "../../lib/constants/colours";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Freelance Designer",
      avatar: "SK",
      body: "I used to dread checking my bank account. Ledger made me actually look forward to it. The AI Pulse feature caught that I was spending $340/month on subscriptions I'd forgotten about.",
      stars: 5,
    },
    {
      name: "Marcus T.",
      role: "Software Engineer",
      avatar: "MT",
      body: "The dashboard is genuinely beautiful. I've tried Mint, YNAB, all of them — Ledger is the first one I've stuck with longer than two weeks.",
      stars: 5,
    },
    {
      name: "Priya N.",
      role: "Product Manager",
      avatar: "PN",
      body: "Finally an app that doesn't make me feel guilty, just informed. The spending vs income chart alone changed how I think about money.",
      stars: 5,
    },
    {
      name: "James R.",
      role: "Small Business Owner",
      avatar: "JR",
      body: "I keep my business and personal accounts both in Ledger. The category breakdowns save me hours every month at tax time.",
      stars: 5,
    },
    {
      name: "Chen W.",
      role: "Graduate Student",
      avatar: "CW",
      body: "I'm on a tight budget and Ledger helps me actually stick to it. The budget alerts feel like a friend reminding me, not a bank judging me.",
      stars: 5,
    },
    {
      name: "Amara O.",
      role: "Nurse Practitioner",
      avatar: "AO",
      body: "I work long shifts and don't have time to manage money carefully. Ledger does it for me and just tells me what I need to know.",
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 48px",
        background: `linear-gradient(180deg, ${tokens.bg} 0%, rgba(28,31,46,0.3) 50%, ${tokens.bg} 100%)`,
      }}>
      <FadeUp>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: tokens.accent,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            Real people, real results
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: tokens.text,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            People actually love using it
          </h2>
        </div>
      </FadeUp>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}>
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.08}>
            <div
              style={{
                background: tokens.surface,
                border: `1px solid ${tokens.border}`,
                borderRadius: 20,
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                height: "100%",
              }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span
                    key={j}
                    style={{ color: tokens.accentHi, fontSize: 13 }}>
                    ★
                  </span>
                ))}
              </div>
              {/* Quote */}
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  color: tokens.sub,
                  lineHeight: 1.75,
                  flex: 1,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                "{t.body}"
              </p>
              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderTop: `1px solid ${tokens.border}`,
                  paddingTop: 16,
                }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: tokens.text,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: tokens.muted,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
