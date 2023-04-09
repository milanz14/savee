// React imports
import { useState } from "react";

// interfaces
import { Budgets } from "../interfaces/Budgets";

const BudgetSetting = () => {
  const INITIAL_BUDGETS: Budgets = {
    salary: 0,
    otherIncome: 0,
    housing: 0,
    foodAndGroceries: 0,
    shopping: 0,
    transportation: 0,
    utilities: 0,
    medical: 0,
    debtPayments: 0,
    miscSpending: 0,
  };

  const [budgets, setBudgets] = useState<Budgets>(INITIAL_BUDGETS);

  return <div>BudgetSetting</div>;
};

export default BudgetSetting;
