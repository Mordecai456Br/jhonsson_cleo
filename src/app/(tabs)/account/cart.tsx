import {View, Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function cart() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Aqui é o seu carrinho</Text>
            <Link href={"/purchase/checkout"}>Finalizar compra</Link>
            <Link href={"/account/[id]"}>Account</Link>
            <Link href={"/home"}>Go back to home</Link>
        </SafeAreaView>
    );
}