"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = __importStar(require("chai"));
var product_1 = require("../product/product");
var shopping_list_1 = require("./shopping-list");
var shopping_list_item_1 = require("./shopping-list-item");
describe('Product Test', function () {
    var woodPlate = { name: 'Wood Plate', price: 5 };
    var woodLeg = { name: 'Wood Leg', price: 3.52 };
    var screw = { name: 'Screw', price: 0.05 };
    var myShoppingList;
    beforeEach(function (done) {
        var materialQuantityChair = [{ material: woodPlate, quantity: 2 }, { material: woodLeg, quantity: 4 }, { material: screw, quantity: 6 }];
        var materialQuantityTable = [{ material: woodPlate, quantity: 1 }, { material: woodLeg, quantity: 4 }, { material: screw, quantity: 25 }];
        var chairs = new shopping_list_item_1.ShoppingListItem(new product_1.Product('Chair', materialQuantityChair), 50);
        var tables = new shopping_list_item_1.ShoppingListItem(new product_1.Product('Table', materialQuantityTable), 20);
        var ShoppingListItems = [chairs, tables];
        myShoppingList = new shopping_list_1.ShoppingList(ShoppingListItems);
        done();
    });
    it('SHould calculate product item price in shopping list', function () {
        chai.expect(myShoppingList.getShoppingListPrice()).to.equal(1625.6);
    });
});
