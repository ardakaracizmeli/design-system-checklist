export const encode = (str) => {
  return btoa(str);
};

export const decode = (str) => {
  return atob(str);
};
