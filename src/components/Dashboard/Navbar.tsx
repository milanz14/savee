import tokens from "../../lib/constants/colours";
import { capitalizeText } from "../../lib/functions";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-[#1c1f2e] flex flex-row">
      <button
        onClick={onMenuClick}
        className="md:hidden px-4 text-white text-xl">
        ☰
      </button>
      <div className="flex flex-row items-center gap-2 px-3">
        <a href="/dashboard" className="text-white flex flex-row items-center">
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
            <img src="src/assets/navlogo.png" alt="logo" width={48} />
          </div>
          <span className="px-2">{capitalizeText("Savee")}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
