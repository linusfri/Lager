import { isContinueStatement } from "@babel/types";
import config from "../config/config.json";
import order from "../interfaces/order";

const orders = {
    getOrders: async function getOrders() {
        const response = await fetch(`${config.url}/orders?api_key=${config.api_key}`);
        const result = await response.json();
        return await result.data;
    },
    pickOrder: async function pickOrder(order: order) {
        this.subtractStock(order);
        this.setOrderStatus(order, 200);
        alert("Order packed!")
    },
    subtractStock: async function subtractStock(order:order) {
        for (const item of order.order_items) {
            const newStock = item.stock - item.amount;
            item.stock = newStock;

            fetch(`${config.url}/products`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: item.product_id,
                    name: item.name, 
                    stock: newStock,
                    api_key: config.api_key
                })
            });
        }
    },
    setOrderStatus: async function setOrderStatus(order:order, status_id:number) {
        fetch(`${config.url}/orders`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: order.id,
                name: order.name,
                status_id: status_id,
                api_key: config.api_key
            })
        });
    }
}


export default orders;