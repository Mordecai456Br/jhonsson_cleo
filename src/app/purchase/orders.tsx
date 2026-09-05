import {Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function orders() {
  return (
    <SafeAreaView className="flex-1">
        <Text>Aqui tem seus pedidos</Text>
        <Link href={"/account/[id]"}>Account</Link>
        <Link href={"/home"}>Go back to home</Link>
    </SafeAreaView>
  );
}