const API = (location: string) => {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:3000/api/${location}`;
  }
  return `/api/${location}`;
};

export default {};
