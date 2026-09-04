import {View, Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";

export default function orders() {
  return (
    <View>
        <Text>Aqui tem seus pedidos</Text>
        <Link href={"/account/[id]"}>Account</Link>
        <Link href={"/home"}>Go back to home</Link>
    </View>
  );
}