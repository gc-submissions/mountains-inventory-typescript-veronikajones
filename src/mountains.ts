//Boolean number bigint string symbol null undefined
//objects are a way of grouping data together
//interface

interface Mountain {
  name: string;
  height: number;
  // the "?" makes it optional
  hasBeenClimbed?: boolean;
}

let newMountain: Mountain = {
  name: "Kilaminjaro",
  height: 10000,
  hasBeenClimbed: true,
};

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

let numberArray: number[] = [1, 3, 5, 10];

let stringArray: string[] = [];

// function Calculate(a:number, b:number, type:string) : void {
// //functions that return 'void' don't return anything

// }

// function Calculate(a: number, b: number, type: string): void {}

//function signature
function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallest = 0;
  let currentName = "";
  for (let mountain of mountains) {
    if (mountain.height > currentTallest) {
      currentTallest = mountain.height;
      currentName = mountain.name;
    }
  }
  return currentName;
}

function Calculate(a: number, b: number, c?: number) {}
Calculate(1, 2);
Calculate(1, 2, 3);

let thisVariableCanBeAnything: any;

thisVariableCanBeAnything = "Jonathan";

thisVariableCanBeAnything = 0;

thisVariableCanBeAnything = true;

let stringOrNumber: string | number | boolean | null;

stringOrNumber = "Jonathan";
stringOrNumber = 0;
stringOrNumber = false;
stringOrNumber = null;

export { findNameOfTallestMountain, Mountain };
