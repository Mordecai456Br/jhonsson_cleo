const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return "Informe seu nome";
  if (trimmed.length < 2) return "Nome muito curto";
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(trimmed)) return "Nome deve conter apenas letras";
  return null;
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return "Informe seu email";
  if (!EMAIL_REGEX.test(trimmed)) return "Email inválido";
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) return "Informe sua senha";
  if (password.length < 6) return "A senha deve ter no mínimo 6 caracteres";
  if (!/[0-9]/.test(password)) return "A senha deve conter ao menos um número";
  if (!/[A-Za-z]/.test(password)) return "A senha deve conter ao menos uma letra";
  return null;
}

export function validateConfirmPassword(password: string, confirmPassword: string): string | null {
  if (!confirmPassword) return "Confirme sua senha";
  if (password !== confirmPassword) return "As senhas não coincidem";
  return null;
}
