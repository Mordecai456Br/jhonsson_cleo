import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { User, Mail, Lock } from "lucide-react-native";
import { AuthInput } from "../components/AuthInput";
import { colors, spacing } from "@/constants/theme";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validation";

interface FormErrors {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

export function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    return !nameError && !emailError && !passwordError && !confirmPasswordError;
  };

  const handleRegister = () => {
    setSuccess(false);

    if (!validate()) {
      return;
    }

    setLoading(true);

    // Simulação de chamada de cadastro
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log("Cadastro realizado:", { name, email, password });

      setTimeout(() => {
        router.replace("/login");
      }, 1200);
    }, 900);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Preencha os dados para se cadastrar</Text>

          <View style={styles.form}>
            <AuthInput
              label="Nome"
              icon={User}
              placeholder="Digite seu nome completo"
              autoCapitalize="words"
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
              }}
              onBlur={() => setErrors((prev) => ({ ...prev, name: validateName(name) }))}
              error={errors.name}
            />

            <AuthInput
              label="Email"
              icon={Mail}
              placeholder="Digite seu email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              }}
              onBlur={() => setErrors((prev) => ({ ...prev, email: validateEmail(email) }))}
              error={errors.email}
            />

            <AuthInput
              label="Senha"
              icon={Lock}
              placeholder="Mínimo 6 caracteres, com letra e número"
              isPassword
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                if (errors.confirmPassword && confirmPassword) {
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: validateConfirmPassword(text, confirmPassword),
                  }));
                }
              }}
              onBlur={() =>
                setErrors((prev) => ({ ...prev, password: validatePassword(password) }))
              }
              error={errors.password}
            />

            <AuthInput
              label="Confirmar senha"
              icon={Lock}
              placeholder="Repita sua senha"
              isPassword
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: null }));
              }}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: validateConfirmPassword(password, confirmPassword),
                }))
              }
              error={errors.confirmPassword}
            />

            {success ? (
              <Text style={styles.successText}>Cadastro realizado com sucesso! Redirecionando...</Text>
            ) : null}

            <TouchableOpacity
              style={[styles.primaryButton, loading && styles.buttonDisabled]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.primaryButtonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.replace("/login")}>
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing[6],
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  subtitle: {
    fontSize: 14,
    color: colors.mutedForeground,
    marginBottom: spacing[8],
  },
  form: {
    marginBottom: spacing[6],
  },
  successText: {
    color: colors.success,
    fontSize: 13,
    marginBottom: spacing[3],
    textAlign: "center",
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: spacing[3],
    height: spacing[11],
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing[2],
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 13,
    color: colors.mutedForeground,
  },
  footerLink: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: "700",
  },
});
