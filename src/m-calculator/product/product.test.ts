import { Done } from "mocha"
import { IMaterial } from "../material/material.interface";
import { IMaterialQuantity, Product } from "./product";
import * as chai from "chai";

describe('Product Test', () => {
    const woodPlate: IMaterial = {name: 'Wood Plate', price: 5};
    const woodLeg: IMaterial = {name: 'Wood Leg', price: 3.52};
    const screw: IMaterial= {name: 'Screw', price: 0.05};
    let chair: Product;

    beforeEach((done: Done) => {
        let materialQuantity: IMaterialQuantity[] = [{material: woodPlate,quantity:2},{material: woodLeg, quantity: 4}, {material: screw, quantity: 6}] 
        chair = new Product('Chair',materialQuantity);
        done();
    })


    it('SHould calculate product price', () => {
        chai.expect(chair.getProductPrice()).to.equal(24.38);
    })

})