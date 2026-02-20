import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";
import Navbar from "../components/Dashboard/Navbar";

type PageId = "home" | "transactions" | "settings";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<PageId>("home");

  return (
    <div className="flex h-dvh">
      <Navbar />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <MainContent />
    </div>
  );
};

export default Dashboard;
