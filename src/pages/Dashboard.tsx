import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

type PageId = "home" | "transactions" | "settings";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<PageId>("home");

  return (
    <div className="flex h-dvh">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <MainContent />
    </div>
  );
};

export default Dashboard;
