import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/base";
import { Typo, Forms, Base } from '../../Styles/index';

export default function AuthFields({ auth, setAuth, title, submit, navigation}:any) {
    return (
        <View style={Forms.styles.base}>
            <Text style={Typo.styles.h2}>{title}</Text>
            <Text style={Typo.styles.label}>E-post</Text>
            <TextInput
                style={Forms.styles.input}
                onChangeText={(text:string) => {
                    setAuth({...auth, email: text})
                }}
                value={auth?.email}
                keyboardType="email-address"
            />
            <Text style={Typo.styles.label}>Lösenord</Text>
            <TextInput
                style={Forms.styles.input}
                onChangeText={(text:string) => {
                    setAuth({ ...auth, password: text })
                }}
                value={auth?.password}
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={Base.styles.button}
                onPress={() => {
                    submit();
                    navigation.navigate("Login");
                }}
            >
                <Text style={Typo.styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {title === "Logga in" &&
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                    style={Base.styles.button}
                >
                    <Text style={Typo.styles.buttonText}>Registrera istället</Text>
                </TouchableOpacity>
            }
        </View>
    );
};