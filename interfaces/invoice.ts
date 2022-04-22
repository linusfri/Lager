interface invoice {
    id: number,
    order_id: number,
    total_price: number,
    creation_date: Date,
    due_date: Date
};

export default invoice;