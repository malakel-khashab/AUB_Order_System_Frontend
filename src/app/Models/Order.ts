import { OrderProduct } from "./Orderproduct";

export class Order {

    orderId?:number;
    order_Comments?: string;
    customer_Name?: string;
    customer_Phone?: string;
    customer_Email?: string;
    customer_Address?: string;
    customer_Country?: string;
    total?: string;
    order_Order_Date?:Date;
    orderProducts?: OrderProduct[];

}