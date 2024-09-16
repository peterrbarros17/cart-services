class Item {
  constructor(
    private name: string,
    private price: number,
    private amount: number
  ) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  public getTotalValueItem(): number {
    return this.price * this.amount;
  }
}

export { Item };
