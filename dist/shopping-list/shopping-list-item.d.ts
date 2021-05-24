import { Product } from "../product/product";
export declare class ShoppingListItem {
    private product;
    private quantity;
    constructor(product: Product, quantity: number);
    getShoppingListItemPrice(): number;
}
