import type { SidebarProps, NavLinks } from "../../interfaces/interfaces";

const navLinks: NavLinks[] = [
  {
    id: "dashboard",
    label: "Home",
  },
  {
    id: "transactions",
    label: "Transactions",
  },
  {
    id: "budgets",
    label: "Budgets",
  },
  {
    id: "settings",
    label: "Settings",
  },
];

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  return (
    <aside className="flex flex-col w-60 bg-[#1c1f2e] border-r border-[#252836] text-[#eef0f6] justify-evenly">
      {/* <div className="">
        <h3>Savee</h3>
      </div> */}
      <nav className="mt-16">
        <ul className="flex flex-col list-none gap-2">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full">
              <button
                className="cursor-pointer w-full text-left px-4 py-3 hover:bg-indigo-600 transition delay-50 duration-75 ease-in"
                onClick={() => console.log(`Clicked ${link.label}`)}>
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-6">
        <button>Add Transaction +</button>
      </div>
    </aside>
  );
};

export default Sidebar;
