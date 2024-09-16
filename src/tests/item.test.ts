import { Item } from "../services/item";

describe("", () => {
  let itemService: Item;

  beforeEach(() => {
    itemService = new Item("T-Shirt", 16, 2);
  });
  it("", () => {
    const res = itemService.getTotalValueItem();

    expect(res).toBe(32);
  });
});
