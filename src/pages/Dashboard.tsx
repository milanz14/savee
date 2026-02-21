import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";
import Navbar from "../components/Dashboard/Navbar";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("home");

  return (
    <div className="flex h-dvh">
      <Navbar />
      <div className="flex pt-16 h-full">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </div>
      <div className="flex pt-16 h-full w-full">
        <MainContent activePage={activePage} />
      </div>
    </div>
  );
};

export default Dashboard;
