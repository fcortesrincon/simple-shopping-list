import { ShoppingListItem } from "./shopping-list-item";
export declare class ShoppingList {
    private shoppingListItem;
    constructor(products: ShoppingListItem[]);
    getShoppingListPrice(): number;
}
