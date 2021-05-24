import { Done } from "mocha"
import * as chai from "chai";
import { IMaterial } from "../material/material.interface";
import { IMaterialQuantity, Product } from "../product/product";
import { ShoppingList } from "./shopping-list";
import { ShoppingListItem } from "./shopping-list-item";

describe('Product Test', () => {

    const woodPlate: IMaterial = {name: 'Wood Plate', price: 5};
    const woodLeg: IMaterial = {name: 'Wood Leg', price: 3.52};
    const screw: IMaterial= {name: 'Screw', price: 0.05};
    let myShoppingList: ShoppingList;

    beforeEach((done: Done) => {
        let materialQuantityChair: IMaterialQuantity[] = [{material: woodPlate,quantity:2},{material: woodLeg, quantity: 4}, {material: screw, quantity: 6}];
        let materialQuantityTable: IMaterialQuantity[] = [{material: woodPlate,quantity:1},{material: woodLeg, quantity: 4}, {material: screw, quantity: 25}];
        const chairs: ShoppingListItem = new ShoppingListItem(new Product('Chair',materialQuantityChair), 50);
        const tables: ShoppingListItem = new ShoppingListItem(new Product('Table',materialQuantityTable), 20);
        const ShoppingListItems: ShoppingListItem[] = [chairs, tables]; 
        myShoppingList = new ShoppingList(ShoppingListItems)

        done();
    })

    it('SHould calculate product item price in shopping list', () => {
        chai.expect(myShoppingList.getShoppingListPrice()).to.equal(1625.6);
    })

})