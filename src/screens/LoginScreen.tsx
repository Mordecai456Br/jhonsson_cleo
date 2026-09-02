import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthButton } from "../components/AuthButton";
import { useRouter } from "expo-router";

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Mock login attempt with:", email, password);
    router.replace("/home");
  };

  const navigateToHome = () => {
    router.replace("/home");
  };

  return (
    <View>
      <Text>Login</Text>
      
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />

      <Text>Ou entre com:</Text>
      <AuthButton
        provider="google"
        onPress={() => {
          console.log("Login Google");
          navigateToHome();
        }}
      />
      <AuthButton
        provider="github"
        onPress={() => {
          console.log("Login Github");
          navigateToHome();
        }}
      />

      <Button
        title="Entrar sem conta"
        onPress={() => {
          console.log("Entrar sem conta");
          navigateToHome();
        }}
      />
    </View>
  );
}
