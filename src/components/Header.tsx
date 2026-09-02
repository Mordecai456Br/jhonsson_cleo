import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SearchBar } from "./SearchBar";
import { ShoppingCart } from "lucide-react-native";

export function Header() {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kitty Shop</Text>
        <TouchableOpacity onPress={() => console.log("Abrir carrinho")}>
          <ShoppingCart size={24} color="black" />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </View>
  );
}

