import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";
import Navbar from "../components/Dashboard/Navbar";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("home");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex flex-1 pt-16 overflow-hidden">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          setModalOpen={setModalOpen}
        />
        <div className="flex-1 overflow-y-auto">
          <MainContent
            activePage={activePage}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
