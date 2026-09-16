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
import { Mail, Lock } from "lucide-react-native";
import { AuthInput } from "../components/AuthInput";
import { AuthButton } from "../components/propsAndButtons/AuthButton";
import { colors, spacing } from "@/constants/theme";
import { validateEmail, validatePassword } from "../utils/validation";

interface FormErrors {
  email?: string | null;
  password?: string | null;
}

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const navigateToHome = () => {
    router.replace("/(tabs)/home");
  };

  const validate = (): boolean => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleLogin = () => {
    setFormError(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    // Simulação de chamada de autenticação
    setTimeout(() => {
      setLoading(false);
      console.log("Login attempt with:", email, password);
      navigateToHome();
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
          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>

          <View style={styles.form}>
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
              placeholder="Digite sua senha"
              isPassword
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
              }}
              onBlur={() =>
                setErrors((prev) => ({ ...prev, password: validatePassword(password) }))
              }
              error={errors.password}
            />

            {formError ? <Text style={styles.formError}>{formError}</Text> : null}

            <TouchableOpacity
              style={[styles.primaryButton, loading && styles.buttonDisabled]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.primaryButtonText}>Entrar</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou entre com</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
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
          </View>

          <TouchableOpacity onPress={navigateToHome}>
            <Text style={styles.skipText}>Entrar sem conta</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text style={styles.footerLink}>Cadastre-se</Text>
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
  formError: {
    color: colors.destructive,
    fontSize: 13,
    marginBottom: spacing[3],
    textAlign: "center",
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
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing[5],
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing[3],
    fontSize: 12,
    color: colors.mutedForeground,
  },
  socialButtons: {
    gap: spacing[2],
    marginBottom: spacing[6],
  },
  skipText: {
    textAlign: "center",
    color: colors.mutedForeground,
    fontSize: 13,
    marginBottom: spacing[8],
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
