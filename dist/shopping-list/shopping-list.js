"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingList = void 0;
var ShoppingList = /** @class */ (function () {
    function ShoppingList(products) {
        this.shoppingListItem = products;
    }
    ShoppingList.prototype.getShoppingListPrice = function () {
        return this.shoppingListItem.reduce(function (accumulator, shippingListItem) { return accumulator + shippingListItem.getShoppingListItemPrice(); }, 0);
    };
    return ShoppingList;
}());
exports.ShoppingList = ShoppingList;
