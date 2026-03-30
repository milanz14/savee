import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";
import Navbar from "../components/Dashboard/Navbar";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("home");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex h-dvh overflow-hidden">
      <Navbar />
      <div className="flex pt-16 h-full">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          setModalOpen={setModalOpen}
        />
      </div>
      <div className="flex pt-16 h-full w-full overflow-y-auto">
        <MainContent
          activePage={activePage}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
