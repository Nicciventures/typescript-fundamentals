import { Product } from "./interfaces";
// abstract indicates building block class / makes a foundation. can't new it up
// implement ensure that the class does as the 'Product' says you should
abstract class ProductBase implements Product {
  // constructor (auto implemented properties)
  constructor(public id: number, public name: string, public icon: string) { }

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  // functions
  validate() : boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

// class SportingGoodProduct extends ProductBase {
//   constructor (id: number, name: string, icon: string) {
//     super(id, name, icon)
//   }
// }

// BELOW IS GITHUB CODE ALREADY PROVIDE. ABOVE IS IMPLEMENTED DURING THE EXPLANATION

// import { Product } from './interfaces';

// // This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
// abstract class ProductBase implements Product {
//   constructor(public id: number, public name: string, public icon: string) {}
//   validate(): boolean {
//     throw new Error('Not implemented');
//   }
// }

// export class FoodProduct extends ProductBase {
//   validate(): boolean {
//     return !!this.id && !!this.name && !!this.icon;
//   }
// }
