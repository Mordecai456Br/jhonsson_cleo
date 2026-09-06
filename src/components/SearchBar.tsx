import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <TextInput
        style={{ flex: 1, borderWidth: 1, padding: 8, marginRight: 8 }}
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar produtos..."
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
}

