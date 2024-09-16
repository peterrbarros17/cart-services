import { Cart } from "../services/cart";
import { Item } from "../services/item";

describe("Cart services", () => {
  let itemService: Item;
  let cartService: Cart;

  beforeEach(() => {
    cartService = new Cart();
    itemService = new Item("Shoes", 33, 1);
  });

  it("the service item must be object", () => {
    expect(typeof cartService).toBe("object");
  });

  it("the structure of return item must be this", () => {
    cartService.addItem(itemService);

    expect(cartService).toEqual({
      frete: 0,
      items: [{ amount: 1, name: "Shoes", price: 33 }],
      subTotal: 0,
      total: 0,
    });
  });
  it("must be have this property", () => {
    expect(cartService).toHaveProperty("addFrete");
  });
  it("must be have this property", () => {
    expect(cartService).toHaveProperty("addItem");
  });
  it("must be have this property", () => {
    expect(cartService).toHaveProperty("calculateTotal");
  });
  it("must be have this property", () => {
    expect(cartService).toHaveProperty("finalizePurchase");
  });

  it("the structure  the finalize purchase must be this", () => {
    const itemService = new Item("T-Shirt", 22, 1);
    const cartService = new Cart();
    cartService.addItem(itemService);
    cartService.addFrete(10);

    expect(cartService.finalizePurchase()).toStrictEqual({
      subTotal: 22,
      frete: 10,
      total: 32,
    });
  });

  it("the empty cart must be returned this error", () => {
    const cartService = new Cart();
    expect(() => cartService.finalizePurchase()).toThrow("Cart is empty");
  });
});
