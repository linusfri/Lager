import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';

import { Base, Typo } from "../Styles/index";

export default function DateDropDown(props) {
    const [dropDownDate, setDropDownDate] = useState<Date>(new Date());
    const [show, setShow] = useState<Boolean>(false);
    const todaysDate = new Date();

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <View>
            {Platform.OS === "android" && (
                <TouchableOpacity style={Base.styles.button} onPress={showDatePicker}>
                    <Text style={Typo.styles.buttonText}>Visa datumväljare</Text>
                </TouchableOpacity>
            )}
            {(show || Platform.OS === "ios") && (
                <DateTimePicker
                    onChange={(event, date?:Date) => {
                        setDropDownDate(date || todaysDate);
                        setShow(false);
                        props.setInvoice({
                            ...props.invoice,
                            due_date: date?.toISOString().slice(0, 10) || todaysDate.toISOString().slice(0, 10),
                            creation_date: todaysDate.toISOString().slice(0, 10)
                        });
                    }}
                    value={dropDownDate}
                    
                />
            )}
        </View>
    )
}