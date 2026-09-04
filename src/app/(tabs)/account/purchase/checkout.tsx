import {View, Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";

export default function checkout() {
    return (
        <View>
            <Text>Aqui finaliza sua compra</Text>
            <Link href={"/account/[id]"}>Account</Link>
            <Link href={"/home"}>Go back to home</Link>
        </View>
    );
}