import products from '../models/productModel';

interface orderItem {
    order_id: number,
    product_id: number,
    amount: number,
    stock: number,
    name: string,
    price: number
}

export default orderItem;