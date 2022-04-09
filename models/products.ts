import config from "../config/config.json";

const products = {
    getProducts: async function getProducts() {
        const response = await fetch(`${config.url}/products?api_key=${config.api_key}`);
        const result = await response.json();
        return await result.data;
    }
}

export default products;