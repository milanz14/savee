export const capitalizeText = (text: string): string => {
  return text.toUpperCase();
};

export const getDMY = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
