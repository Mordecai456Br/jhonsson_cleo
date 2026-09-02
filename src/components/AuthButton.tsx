import React from "react";
import { Button } from "react-native";

interface AuthButtonProps {
  provider: "email" | "google" | "github";
  onPress: () => void;
}

export function AuthButton({ provider, onPress }: AuthButtonProps) {
  const getTitle = () => {
    switch (provider) {
      case "google":
        return "Login com Google";
      case "github":
        return "Login com Github";
      case "email":
        return "Login por email";
      default:
        return "Login";
    }
  };

  return <Button title={getTitle()} onPress={onPress} />;
}
