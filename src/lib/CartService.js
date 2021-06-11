import { uniq } from "lodash";

const CartService = {
  getCart() {
    const sessionCart = sessionStorage.getItem("cart") || "[]";
    return JSON.parse(sessionCart);
  },
  addToCart(sku) {
    const oldCart = this.getCart();
    const newCart = uniq([...oldCart, sku]);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  },
  clear() {
    sessionStorage.removeItem("cart");
  },
};

export default CartService;
