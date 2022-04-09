import config from "../config/config.json";

const orders = {
    getOrders: async function getOrders() {
        const response = await fetch(`${config.url}/orders?api_key=${config.api_key}`);
        const result = await response.json();
        return await result.data;
    },
    pickOrder: async function pickOrder(order: object) {
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad
    }
}

export default orders;