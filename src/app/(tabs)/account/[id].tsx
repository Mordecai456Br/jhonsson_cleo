import {View, Text} from "react-native";
import React from 'react';
import {Link, useLocalSearchParams} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function Account() {
    const { id } = useLocalSearchParams<{ id: string }>();

  return (
  <SafeAreaView className="flex-1">
    <Text>Olá {id}</Text>
      <Link href={"/account/cart"}>Meu carrinho</Link>
      <Link href={"/purchase/orders"}>Meus pedidos</Link>
  </SafeAreaView>
  );
}