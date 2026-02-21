import type { SidebarProps, NavLinks } from "../../interfaces/interfaces";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const navLinks: NavLinks[] = [
  {
    id: "dashboard",
    label: "Home",
    icon: <FaHome />,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: <GrTransaction />,
  },
  {
    id: "budgets",
    label: "Budgets",
    icon: <TbPigMoney />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <CiSettings />,
  },
];

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  const handleLinkClick = (id: string): void => {
    setActivePage(id);
  };

  return (
    <aside className="flex flex-col w-60 bg-[#1c1f2e] border-r border-[#252836] text-[#eef0f6] justify-evenly">
      <nav className="px-3">
        <ul className="flex flex-col list-none gap-2">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full relative">
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition hover:cursor-pointer ${
                  activePage === link.id
                    ? "bg-[#818cf8] text-black hover:bg-[#a5b4fc]"
                    : "hover:bg-[#818cf8]/20 hover:text-[#818cf8]"
                }`}>
                <span className="flex flex-row items-center gap-2">
                  {link.icon}
                  {link.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-t border-[#252836] ">
        <button className="flex flex-row items-center gap-2 w-full bg-[#818cf8] hover:bg-[#a5b4fc] text-black font-semibold py-2 rounded-lg transition justify-center">
          <IoIosAddCircleOutline />
          <span>Add</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
