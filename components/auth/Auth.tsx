import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Login from "./Login";
import Register from "./Register";
import Header from "../Header";
import { Base } from "../../Styles";

const Stack = createNativeStackNavigator();

export default function Auth(props) {
    return (
        <View style={Base.styles.container}>
            <Header/>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{headerShown:false}}>
                    {(screenProps) => <Login {...screenProps} setIsLoggedIn={props.setIsLoggedIn} />}
                </Stack.Screen>
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </View>
    );
       
        
};