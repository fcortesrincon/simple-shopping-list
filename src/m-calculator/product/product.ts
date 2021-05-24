import { IMaterial } from "../material/material.interface";


export interface IProduct {
    name: string;
    materials: IMaterial[];
}

export interface IMaterialQuantity {
    material: IMaterial;
    quantity: number;
}

export class Product {
    private name: string;
    private materials: IMaterialQuantity[];
    
    
    constructor(name: string, materials: IMaterialQuantity[]){
        this.name = name;
        this.materials = materials;
    }


    getProductPrice(): number {
        return this.materials.reduce((accumulator: number, material: IMaterialQuantity)=> accumulator + (material.material.price * material.quantity),0);
    }

}