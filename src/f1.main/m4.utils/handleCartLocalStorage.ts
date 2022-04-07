export const getCartLocalStorage = () => localStorage.getItem("cart");
export const setCartLocalStorage = (value: any) =>
  localStorage.setItem("cart", JSON.stringify(value));
