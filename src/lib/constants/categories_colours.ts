export const categoryOptions = {
  Groceries: "#a78bfa",
  Dining: "#f472b6",
  Transport: "#60a5fa",
  Subscriptions: "#818cf8",
  Health: "#34d399",
  Shopping: "#fb923c",
  Utilities: "#94a3b8",
  Income: "#34d399",
  Rent: "#64748b",
  Phone: "#1a759f",
  Savings: "#94a3b8",
  Investment: "#94a3b8",
};

export const categoryTypeMap = {
  Groceries: "Expense",
  Dining: "Expense",
  Transport: "Expense",
  Subscriptions: "Expense",
  Health: "Expense",
  Shopping: "Expense",
  Utilities: "Expense",
  Income: "Income",
  Rent: "Expense",
  Phone: "Expense",
  Savings: "Transfer",
  Investments: "Transfer",
};

// export const formatCurrency = (n) =>
//   new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
//     Math.abs(n),
//   );

// export const formatDate = (d) =>
//   new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
