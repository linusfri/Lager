import { Picker } from '@react-native-picker/picker';

import { useState, useEffect } from 'react';
import OrderModel from "../models/orderModel";
import Order from "../interfaces/order";
import orderItem from '../interfaces/orderItem';


export default function OrderDropDown(props) {
    const [orders, setOrders] = useState<Order[]>([]);

    const priceList:Array<number> = [];

    const pickedOrdersPickerItems = orders
        .filter(order => order.status === "Packad")
        .map((order, index) => {
            let totalPrice = 0;
            for (const order_item of order.order_items) {
                totalPrice += (order_item.price * order_item.amount);
            }
            priceList.push(totalPrice)
            return (
                <Picker.Item key={index} label={order.name} value={order.id}/>
            );
        });
    
    const pickedOrders = orders.filter(order => order.status === "Packad");

    useEffect(async () => {
        setOrders(await OrderModel.getOrders());
        props.setOrder(pickedOrders[0] || {});
    }, []);
    
    return(
        <Picker
            style={props.style}
            selectedValue={pickedOrdersPickerItems[0] || null}
            onValueChange={(itemValue, index) => {
                props.setInvoice({...props.invoice, order_id: itemValue, total_price: priceList[index]});
                props.setOrder(pickedOrders[index]);
            }}>
            {pickedOrdersPickerItems}
        </Picker>
    )
}