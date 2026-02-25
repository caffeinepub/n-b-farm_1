import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PreOrder {
    customerName: string;
    packagingSize: string;
    timestamp: Time;
    quantity: bigint;
    phone: string;
    mangoVariant: string;
    totalPrice: bigint;
}
export type Time = bigint;
export interface backendInterface {
    getAllPreOrders(): Promise<Array<PreOrder>>;
    submitPreOrder(customerName: string, phone: string, mangoVariant: string, packagingSize: string, quantity: bigint, unitPrice: bigint): Promise<void>;
}
