import { ShoppingListItem } from "./shopping-list-item";

export class ShoppingList {
    private shoppingListItem: ShoppingListItem[];

    constructor(products: ShoppingListItem[]){
        this.shoppingListItem = products;
    }
    
    getShoppingListPrice(): number {
        return this.shoppingListItem.reduce((accumulator: number, shippingListItem: ShoppingListItem)=> accumulator +  shippingListItem.getShoppingListItemPrice(),0);
    }

}