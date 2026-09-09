import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextInputProps } from "react-native";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import { colors, spacing } from "@/constants/theme";

interface AuthInputProps extends TextInputProps {
  label: string;
  icon: LucideIcon;
  error?: string | null;
  isPassword?: boolean;
}

export function AuthInput({ label, icon: Icon, error, isPassword, ...rest }: AuthInputProps) {
  const [secure, setSecure] = useState(!!isPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          error ? styles.inputWrapperError : null,
        ]}
      >
        <Icon size={18} color={colors.mutedForeground} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(8, 17, 38, 0.4)"
          secureTextEntry={isPassword ? secure : false}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword ? (
          <TouchableOpacity onPress={() => setSecure((prev) => !prev)} hitSlop={10}>
            {secure ? (
              <EyeOff size={18} color={colors.mutedForeground} />
            ) : (
              <Eye size={18} color={colors.mutedForeground} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[4],
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing[3],
    paddingHorizontal: spacing[3],
    height: spacing[11],
  },
  inputWrapperError: {
    borderColor: colors.destructive,
  },
  icon: {
    marginRight: spacing[2],
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.foreground,
    height: "100%",
  },
  errorText: {
    marginTop: spacing[1],
    fontSize: 12,
    color: colors.destructive,
  },
});
