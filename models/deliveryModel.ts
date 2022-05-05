import delivery from '../interfaces/delivery';
import config from "../config/config.json";

const deliveryModel = {
    addDelivery: async function addDelivery(delivery:Partial<delivery>) {
        if (!delivery.product_id || !delivery.amount || !delivery.delivery_date) {
            return {
                title: "Fel",
                message: "Du måste fylla i alla uppgifter för inleveransen!",
                type: "danger"
            };
        }
        const response = await fetch(`${config.url}/deliveries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...delivery,
                api_key: config.api_key
            })
        })
        return {
            title: "Ok",
            message: "Inleveransen är skapad!",
            type: "success"
        };
    },

    getAllDeliveries: async function getAllDeliveries() {
        const response = await fetch(`${config.url}/deliveries?api_key=${config.api_key}`);
        const deliveries = await response.json();

        return await deliveries.data;
    }
}

export default deliveryModel;