import { Item } from "./item";

class Cart {
  private items: Item[] = [];
  private frete: number = 0;
  private subTotal: number = 0;
  private total: number = 0;

  constructor() {}

  public addItem(item: Item) {
    this.items.push(item);
  }

  public addFrete(value: number) {
    this.frete = value;
  }

  calculateTotal() {
    this.subTotal = this.items.reduce(
      (acum, item) => acum + item.getTotalValueItem(),
      0
    );
    return this.subTotal + this.frete;
  }

  finalizePurchase() {
    if (this.items.length === 0) {
      throw new Error("Cart is empty");
    }

    this.total = this.calculateTotal();

    return {
      subTotal: this.subTotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export { Cart };
