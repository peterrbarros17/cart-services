import { Item } from "../services/item";

describe("Item service", () => {
  let itemService: Item;

  beforeEach(() => {
    itemService = new Item("T-Shirt", 16, 2);
  });

  it("the total amount must be correct according to the price and quantity", () => {
    const res = itemService.getTotalValueItem();

    expect(res).toBe(32);
  });
});
