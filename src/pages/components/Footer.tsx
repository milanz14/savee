import tokens from "../../lib/constants/colours";

const Footer = () => {
  const links = {
    Product: ["Dashboard", "Features", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Security"],
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${tokens.border}`,
        padding: "72px 48px 48px",
        background: tokens.surface,
      }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}>
          {/* Brand col */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accentHi})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  color: "#fff",
                }}>
                ◈
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 17,
                  letterSpacing: "-0.04em",
                  color: tokens.text,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                Ledger
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: tokens.sub,
                lineHeight: 1.7,
                margin: "0 0 24px",
                maxWidth: 260,
                fontFamily: "'DM Sans', sans-serif",
              }}>
              Personal finance that finally makes sense. Know your money, own
              your future.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: tokens.muted,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                Contact Us
              </span>
              <a
                href="mailto:hello@ledger.app"
                style={{
                  fontSize: 14,
                  color: tokens.accent,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                hello@ledger.app
              </a>
              <span
                style={{
                  fontSize: 14,
                  color: tokens.sub,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                Mon–Fri, 9am–6pm EST
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: tokens.muted,
                  fontFamily: "'DM Sans', sans-serif",
                  display: "block",
                  marginBottom: 16,
                }}>
                {heading}
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      fontSize: 14,
                      color: tokens.sub,
                      textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = tokens.text)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = tokens.sub)
                    }>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${tokens.border}`,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
          <span
            style={{
              fontSize: 13,
              color: tokens.muted,
              fontFamily: "'DM Sans', sans-serif",
            }}>
            © 2026 Ledger. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "GitHub", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: 13,
                  color: tokens.muted,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = tokens.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = tokens.muted)
                }>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
