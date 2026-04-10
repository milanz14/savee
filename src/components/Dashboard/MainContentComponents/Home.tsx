// import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useTransactions } from "../../../hooks/useTransaction";
import Chart from "./Chart";
import Performance from "./Performance";
import RecentTransactions from "./RecentTransactions";
import Tiles from "./Tiles";

const Home = () => {
  const { user } = useAuth();

  const { data: transactions } = useTransactions(user?.uid);

  return (
    <div className="h-full overflow-y-auto bg-white p-4">
      <h1>Welcome, {user!.displayName}!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[375px] gap-2">
        <Performance />
        <Tiles />
        <Chart transactions={transactions ?? []} />
        <RecentTransactions transactions={transactions ?? []} />
      </div>
    </div>
  );
};

export default Home;
