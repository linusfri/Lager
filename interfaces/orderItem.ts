import products from '../models/products';

interface orderItem {
    order_id: number,
    product_id: number,
    amount: number,
    stock: number,
    name: string
}

export default orderItem;