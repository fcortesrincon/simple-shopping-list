import { IMaterial } from "../material/material.interface";
export interface IProduct {
    name: string;
    materials: IMaterial[];
}
export interface IMaterialQuantity {
    material: IMaterial;
    quantity: number;
}
export declare class Product {
    private name;
    private materials;
    constructor(name: string, materials: IMaterialQuantity[]);
    getProductPrice(): number;
}
