import { useAuth } from "../../../context/AuthContext";
import Chart from "./Chart";
import Performance from "./Performance";
import RecentTransactions from "./RecentTransactions";
import Tiles from "./Tiles";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Welcome, {user!.displayName}!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[375px] gap-2">
        <Performance />
        <Tiles />
        <Chart />
        <RecentTransactions />
      </div>
    </>
  );
};

export default Home;
