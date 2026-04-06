import { useState, useMemo } from "react";
import { MOCK_BUDGETS, MOCK_TRANSACTIONS, MONTHS } from "../data/mockData";
import { formatCurrency } from "../utils/format";
import type { Budget } from "../types";

function BudgetCard({ budget, spent }: { budget: Budget; spent: number }) {
  const pct = Math.min(100, Math.round((spent / budget.limit) * 100));
  const over = spent > budget.limit;
  const remaining = budget.limit - spent;

  return (
    <div className="bg-[#171b26] border border-[#2a2f42] rounded-xl p-5">
      <div className="flex items-start justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <span className="text-[20px]">{budget.icon}</span>
          <span className="text-[14px] font-semibold text-[#e8eaf0]">
            {budget.category}
          </span>
        </div>
        <div className="text-right">
          <p
            className={`text-[17px] font-semibold ${over ? "text-[#f87171]" : "text-[#e8eaf0]"}`}>
            {formatCurrency(spent)}
          </p>
          <p className="text-[12px] text-[#7b82a0]">
            of {formatCurrency(budget.limit)}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#1e2333] rounded-full overflow-hidden mb-2">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: over ? "#f87171" : budget.color,
          }}
        />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-[11px] text-[#7b82a0]">{pct}% used</span>
        {over ? (
          <span className="text-[11px] font-medium text-[#f87171]">
            {formatCurrency(Math.abs(remaining))} over budget
          </span>
        ) : (
          <span className="text-[11px] text-[#7b82a0]">
            {formatCurrency(remaining)} remaining
          </span>
        )}
      </div>
    </div>
  );
}
const BudgetsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const { year, month } = MONTHS[selectedMonth];

  const spendingByCategory = useMemo(() => {
    const map: Record<string, number> = {};
    MOCK_TRANSACTIONS.filter((t) => {
      const d = new Date(t.date);
      return (
        t.type === "expense" &&
        d.getFullYear() === year &&
        d.getMonth() + 1 === month
      );
    }).forEach((t) => {
      map[t.category] = (map[t.category] ?? 0) + t.amount;
    });
    return map;
  }, [year, month]);

  const totalBudget = MOCK_BUDGETS.reduce((acc, b) => acc + b.limit, 0);
  const totalSpent = MOCK_BUDGETS.reduce(
    (acc, b) => acc + (spendingByCategory[b.category] ?? 0),
    0,
  );
  const overallPct = Math.round((totalSpent / totalBudget) * 100);

  const selectClass =
    "bg-[#171b26] border border-[#2a2f42] text-[#e8eaf0] text-[13px] rounded-lg px-3 py-2 outline-none focus:border-[#6c7bff] cursor-pointer";

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-semibold text-[#e8eaf0] tracking-tight">
            Budgets
          </h1>
          <p className="text-[13px] text-[#7b82a0] mt-0.5">
            Monthly limits and progress
          </p>
        </div>
        <select
          className={selectClass}
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}>
          {MONTHS.map((m, i) => (
            <option key={m.label} value={i}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {/* Overall summary */}
      <div className="bg-[#171b26] border border-[#2a2f42] rounded-xl p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[13px] font-semibold text-[#e8eaf0]">
            Overall budget
          </span>
          <span className="text-[13px] text-[#7b82a0]">
            {formatCurrency(totalSpent)} / {formatCurrency(totalBudget)}
          </span>
        </div>
        <div className="h-2 bg-[#1e2333] rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(100, overallPct)}%`,
              background: overallPct > 100 ? "#f87171" : "#6c7bff",
            }}
          />
        </div>
        <p className="text-[12px] text-[#7b82a0]">
          {overallPct}% of total budget used
        </p>
      </div>

      {/* Budget cards grid */}
      <div className="grid grid-cols-2 gap-4">
        {MOCK_BUDGETS.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            spent={spendingByCategory[budget.category] ?? 0}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetsPage;
