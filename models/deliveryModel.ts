import delivery from '../interfaces/delivery';
import config from "../config/config.json";

const deliveryModel = {
    addDelivery: async function addDelivery(delivery:Partial<delivery>) {
        if (!delivery.product_id || !delivery.amount || !delivery.delivery_date) {
            alert("You have to fill in the product, number of items to deliver and a valid date.");
            return false;
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
        if (!response.ok) {
            alert("Something went wrong with the API request.")
            return false;
        }
        return true;
    },

    getAllDeliveries: async function getAllDeliveries() {
        const response = await fetch(`${config.url}/deliveries?api_key=${config.api_key}`);
        const deliveries = await response.json();

        return await deliveries.data;
    }
}

export default deliveryModel;