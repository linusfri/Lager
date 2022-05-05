import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Base, Typo, Forms } from '../../Styles/index';
import { showMessage } from 'react-native-flash-message';

import AuthFields from './AuthFields';
import Auth from "../../interfaces/auth";
import AuthModel from "../../models/auth";

export default function Register({ navigation }:any) {
    const [auth, setAuth] = useState<Partial<Auth>>({})

    async function doRegister() {
        if (auth.email && auth.password) {
            const result = await AuthModel.register(auth.email, auth.password);
            
            if (result.type === "success") {
                showMessage({
                    description: result.title,
                    message: result.message,
                    type: result.type
                });
            }
        } else {
            showMessage({
                description: "Fel",
                message: "Felaktiga uppgifter i registreringsformuläret",
                type: "warning"
            });
        }
    }

    return (
        <AuthFields
            title={"Registrera"}
            setAuth={setAuth}
            auth={auth}
            navigation={navigation}
            submit={doRegister}
        />
    );
};