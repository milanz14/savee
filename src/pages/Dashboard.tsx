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
        <Sidebar setActivePage={setActivePage} />
      </div>
      <MainContent activePage={activePage} />
    </div>
  );
};

export default Dashboard;
