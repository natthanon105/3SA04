import React from 'react';
import { StyleSheet, Text ,View } from 'react-native';
export default function Forecast(props) {
    return (
        <View >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text>{props.temp} °C</Text>
            </View>
        </View >
    );
}
