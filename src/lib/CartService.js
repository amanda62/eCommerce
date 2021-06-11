import { uniq } from "lodash";

const CartService = {
  getCart() {
    const sessionCart = sessionStorage.getItem("cart") || "[]";
    return JSON.parse(sessionCart);
  },
  addToCart(sku) {
    const oldCart = this.getCart();
    const newCart = uniq([...oldCart, sku]);
    // instead of adding the product.id you should be adding the sku that is defined on the state
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  },
  clear() {
    sessionStorage.removeItem("cart");
  },
};

export default CartService;
