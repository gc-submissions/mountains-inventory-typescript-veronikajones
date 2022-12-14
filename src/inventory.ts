import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];
function calcInventoryValue(inventory: InventoryItem[]): number {
  let sum = 0;
  if (inventory.length === 0 || inventory.length === null) {
    return 0;
  } else {
    for (let i = 0; i < inventory.length; i++) {
      sum += inventory[i].product.price * inventory[i].quantity;
    }
    return sum;
  }
}

export { calcInventoryValue, InventoryItem };
