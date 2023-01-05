interface Product {
  price: number;
  name: string;
}

//implement
let newProduct: Product = {
  price: 2.5,
  name: "Graham crackers",
};

let products: Product[] = [
  { name: "Graham crackers", price: 2.5 },
  { name: "Goldfish crackers", price: 3.0 },
  { name: "Orange juice", price: 4.0 },
];

function calcAverageProductPrice(products: Product[]): number {
  let sum: any = 0;
  if (products.length === 0) {
    return 0;
  }
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }

  let average = sum / products.length;

  return average;
}

export { calcAverageProductPrice, Product };
// function findNameOfTallestMountain(mountains: Mountain[]): string {
//     let currentTallest = 0;
//     let currentName = "";
//     for (let mountain of mountains) {
//       if (mountain.height > currentTallest) {
//         currentTallest = mountain.height;
//         currentName = mountain.name;
//       }
//     }
//     return currentName;
//   }
