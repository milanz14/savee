const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-[#1c1f2e] flex flex-row">
      <div className="flex flex-row items-center gap-2 px-2">
        <a href="/dashboard" className="text-white flex flex-row items-center">
          <img src="src/assets/navlogo.png" alt="logo" width={65} />
          <span>Savee</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
