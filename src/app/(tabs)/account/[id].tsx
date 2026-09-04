import {View, Text} from "react-native";
import React from 'react';
import {Link, useLocalSearchParams} from "expo-router";

export default function Account() {
    const { id } = useLocalSearchParams<{ id: string }>();

  return (
  <View>
    <Text>Olá {id}</Text>
      <Link href={"/account/purchase/cart"}>Meu carrinho</Link>
      <Link href={"/account/purchase/orders"}>Meus pedidos</Link>
  </View>
  );
}