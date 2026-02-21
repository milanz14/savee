export const categories = {
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
};

export const USER = {
  name: "Alex Morgan",
  email: "alex.morgan@email.com",
  memberSince: "March 2022",
  monthlyBudget: 3200,
  avatar: "AM",
};

export const ALL_TRANSACTIONS = [
  {
    id: 1,
    merchant: "Whole Foods Market",
    category: "Groceries",
    amount: -94.32,
    date: "2026-02-17",
    icon: "🛒",
  },
  {
    id: 2,
    merchant: "Netflix",
    category: "Subscriptions",
    amount: -15.99,
    date: "2026-02-17",
    icon: "📺",
  },
  {
    id: 3,
    merchant: "Salary Deposit",
    category: "Income",
    amount: 3800.0,
    date: "2026-02-16",
    icon: "💰",
  },
  {
    id: 4,
    merchant: "Shell Gas Station",
    category: "Transport",
    amount: -58.4,
    date: "2026-02-16",
    icon: "⛽",
  },
  {
    id: 5,
    merchant: "Sweetgreen",
    category: "Dining",
    amount: -16.75,
    date: "2026-02-15",
    icon: "🥗",
  },
  {
    id: 6,
    merchant: "Amazon",
    category: "Shopping",
    amount: -129.99,
    date: "2026-02-14",
    icon: "📦",
  },
  {
    id: 7,
    merchant: "Spotify",
    category: "Subscriptions",
    amount: -9.99,
    date: "2026-02-14",
    icon: "🎵",
  },
  {
    id: 8,
    merchant: "CVS Pharmacy",
    category: "Health",
    amount: -43.2,
    date: "2026-02-13",
    icon: "💊",
  },
  {
    id: 9,
    merchant: "Uber",
    category: "Transport",
    amount: -22.5,
    date: "2026-02-13",
    icon: "🚗",
  },
  {
    id: 10,
    merchant: "Trader Joe's",
    category: "Groceries",
    amount: -67.89,
    date: "2026-02-12",
    icon: "🛒",
  },
  {
    id: 11,
    merchant: "Starbucks",
    category: "Dining",
    amount: -8.45,
    date: "2026-02-12",
    icon: "☕",
  },
  {
    id: 12,
    merchant: "Planet Fitness",
    category: "Health",
    amount: -24.99,
    date: "2026-02-11",
    icon: "🏋️",
  },
  {
    id: 13,
    merchant: "Con Edison",
    category: "Utilities",
    amount: -112.0,
    date: "2026-02-10",
    icon: "⚡",
  },
  {
    id: 14,
    merchant: "Freelance Payment",
    category: "Income",
    amount: 650.0,
    date: "2026-02-09",
    icon: "💰",
  },
  {
    id: 15,
    merchant: "Chipotle",
    category: "Dining",
    amount: -13.25,
    date: "2026-02-09",
    icon: "🌯",
  },
  {
    id: 16,
    merchant: "Apple One",
    category: "Subscriptions",
    amount: -29.95,
    date: "2026-02-08",
    icon: "🍎",
  },
  {
    id: 17,
    merchant: "Target",
    category: "Shopping",
    amount: -87.6,
    date: "2026-02-07",
    icon: "🎯",
  },
  {
    id: 18,
    merchant: "Venmo Transfer",
    category: "Transfer",
    amount: -200.0,
    date: "2026-02-06",
    icon: "💸",
  },
  {
    id: 19,
    merchant: "Duane Reade",
    category: "Health",
    amount: -31.5,
    date: "2026-02-05",
    icon: "💊",
  },
  {
    id: 20,
    merchant: "HelloFresh",
    category: "Groceries",
    amount: -79.99,
    date: "2026-02-04",
    icon: "🥦",
  },
];

export const CHART_DATA = [
  { day: "Feb 1", spend: 45, income: 0 },
  { day: "Feb 3", spend: 120, income: 0 },
  { day: "Feb 4", spend: 80, income: 650 },
  { day: "Feb 5", spend: 32, income: 0 },
  { day: "Feb 6", spend: 200, income: 0 },
  { day: "Feb 7", spend: 88, income: 0 },
  { day: "Feb 8", spend: 30, income: 0 },
  { day: "Feb 9", spend: 13, income: 0 },
  { day: "Feb 10", spend: 112, income: 0 },
  { day: "Feb 11", spend: 25, income: 0 },
  { day: "Feb 12", spend: 76, income: 0 },
  { day: "Feb 13", spend: 65, income: 0 },
  { day: "Feb 14", spend: 140, income: 0 },
  { day: "Feb 15", spend: 17, income: 0 },
  { day: "Feb 16", spend: 58, income: 3800 },
  { day: "Feb 17", spend: 110, income: 0 },
];

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "⊡" },
  { id: "details", label: "My Details", icon: "◎" },
  { id: "recent", label: "Recent Transactions", icon: "⊙" },
  { id: "all", label: "All Transactions", icon: "≡" },
];

// export const formatCurrency = (n) =>
//   new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
//     Math.abs(n),
//   );

// export const formatDate = (d) =>
//   new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export default categories;
