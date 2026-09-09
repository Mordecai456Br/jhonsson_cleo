import React from "react";
import { View, Text, Button } from "react-native";

export function Filters() {
  return (
    <View>
      <Text>Filtros:</Text>
      <Button title="Todos" onPress={() => console.log("Filtro: Todos")} />
      <Button title="Ração" onPress={() => console.log("Filtro: Ração")} />
      <Button title="Brinquedos" onPress={() => console.log("Filtro: Brinquedos")} />
      <Button title="Acessórios" onPress={() => console.log("Filtro: Acessórios")} />
    </View>
  );
}
