import config from "../config/config.json";
import product from '../interfaces/product';

const products = {
    getProducts: async function getProducts() {
        const response = await fetch(`${config.url}/products?api_key=${config.api_key}`);
        const result = await response.json();
        return await result.data;
    },

    updateProduct: async function updateProduct(product:Partial<product>) {
        const response = await fetch(`${config.url}/products`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id: product.id,
                name: product.name,
                stock: product.stock,
                api_key: config.api_key
            })
        });
        if (!response.ok) {
            return false;
        }
        return true;
    }
}

export default products;