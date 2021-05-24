"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItem = void 0;
var ShoppingListItem = /** @class */ (function () {
    function ShoppingListItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    ShoppingListItem.prototype.getShoppingListItemPrice = function () {
        return this.product.getProductPrice() * this.quantity;
    };
    return ShoppingListItem;
}());
exports.ShoppingListItem = ShoppingListItem;
