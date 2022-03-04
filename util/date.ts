export const formatPostDate = (date: Date) => {
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
  const ti = new Intl.DateTimeFormat("en", { timeStyle: "short" }).format(date);

  return `${mo} ${da} ${ye} ${ti}`;
};

export const formatBirthday = (date: Date) => {
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);

  return `${mo} ${da}`;
};
