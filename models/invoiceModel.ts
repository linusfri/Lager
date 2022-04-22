import storage from "./storage";
import config from "../config/config.json";
import order from "../interfaces/order";
import invoice from '../interfaces/invoice';
import orders from "./orderModel";

const invoices = {
    createInvoice: async function createInvoice(order:Partial<order>, invoice: Partial<invoice>) {
        const JWT = await storage.readToken();

        const response = await fetch(`${config.url}/invoices`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": JWT.token
            },

            method: "POST",

            body: JSON.stringify({
                ...invoice,
                api_key: config.api_key
            })
        });

        const orderResponse = await orders.setOrderStatus(order, 600);

    },

    getInvoices: async function getInvoices() {
        const JWT = await storage.readToken();

        const response = await fetch(`${config.url}/invoices?api_key=${config.api_key}`, {
            headers: {
                "x-access-token": JWT.token,
            },
        });

        const jsonData = await response.json();
        return await jsonData.data;
    }
}


export default invoices;