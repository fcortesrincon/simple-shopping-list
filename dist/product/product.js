"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, materials) {
        this.name = name;
        this.materials = materials;
    }
    Product.prototype.getProductPrice = function () {
        return this.materials.reduce(function (accumulator, material) { return accumulator + (material.material.price * material.quantity); }, 0);
    };
    return Product;
}());
exports.Product = Product;
