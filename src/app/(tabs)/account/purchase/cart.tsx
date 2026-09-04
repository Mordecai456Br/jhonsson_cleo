import {View, Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";

export default function cart() {
    return (
        <View>
            <Text>Aqui é o seu carrinho</Text>
            <Link href={"/account/purchase/checkout"}>Finalizar compra</Link>
            <Link href={"/account/[id]"}>Account</Link>
            <Link href={"/home"}>Go back to home</Link>
        </View>
    );
}