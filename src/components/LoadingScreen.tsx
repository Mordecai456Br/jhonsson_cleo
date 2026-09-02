import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

export function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>KittyShop™</Text>
    </View>
  );
}
