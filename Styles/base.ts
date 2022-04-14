import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        marginTop: 12,
        padding: 20,
        backgroundColor: "rgb(33,150,243)",
        borderRadius: 2,
    },

    picker: {
        marginBottom: 20,
    },

    defaultColor: {
        backgroundColor: '#fff',
    },

    appMainContainer: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12
    },

    container: {
        flex: 1,
    },

    base: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginTop: 12
    },

    scrollView: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 12
    },
    
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    mainImage: {
        height: 75, 
        width: 75, 
        resizeMode:'stretch'
    },
    
    productGrid: {
        flex: 1,
        flexDirection: 'row'
    },

    productItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(33,150,243)',
        marginVertical: 5,
        marginHorizontal: 5,
        height: 80,
    },
    deliveryItem: {
        flexDirection: "column",
        alignItems: "center",
        borderColor: 'rgb(33,150,243)',
        borderWidth: 1,
        borderRadius: 2,
        margin: 12
    },
    baseColumn: {
        flex: 1,
        marginTop: 12,
    }
});

export {styles};
