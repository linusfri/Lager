import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    h1: {
        fontSize: 42,
        color: "rgba(0,0,0, 0.4)",
    },
    
    h2: {
        fontSize: 24,
        color: "rgba(0,0,0, 0.6)",
        marginBottom: 28
    },
    
    h3: {
        fontSize: 16,
        marginBottom: 6,
        color: "rgba(0,0,0, 0.6)"
    },

    p: {
        fontSize: 12,
        marginBottom: 28,
        color: "rgba(0,0,0, 0.6)"
    },

    h2OrderList: {
        fontSize: 20,
        color: "rgba(0,0,0, 0.6)"
    },

    h2InvoiceList: {
        fontSize: 24,
        color: "rgba(0,0,0, 0.6)",
        marginBottom: 12,
        marginTop: 28
    },

    label: {
        fontSize: 12,
        marginBottom: 0
    },
    
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "700"
    },

    deliveryItemText: {
        color: "rgba(0,0,0, 0.6)",
        textAlign: "center",
        fontWeight: "500"
    },

    deliveryListStatusText: {
        textAlign: "center",
        fontWeight: "700",
        marginTop: 28
    }
});

export {styles};