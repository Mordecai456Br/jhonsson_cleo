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

export function validateCpf(cpf: string): string | null {
  // Remove caracteres não numéricos
  const cleanCpf = cpf.replace(/\D/g, "");

  if (!cleanCpf) {
    return "O CPF é obrigatório.";
  }

  if (cleanCpf.length !== 11) {
    return "O CPF deve conter 11 dígitos.";
  }

  // Elimina CPFs invalidos conhecidos (todos os dígitos iguais, ex: 111.111.111-11)
  if (/^(\d)\1+$/.test(cleanCpf)) {
    return "CPF inválido.";
  }

  // Validação do 1º dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCpf.charAt(i), 10) * (10 - i);
  }
  let digit = 11 - (sum % 11);
  if (digit === 10 || digit === 11) digit = 0;
  if (digit !== parseInt(cleanCpf.charAt(9), 10)) {
    return "CPF inválido (dígito verificador incorreto).";
  }

  // Validação do 2º dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCpf.charAt(i), 10) * (11 - i);
  }
  digit = 11 - (sum % 11);
  if (digit === 10 || digit === 11) digit = 0;
  if (digit !== parseInt(cleanCpf.charAt(10), 10)) {
    return "CPF inválido (dígito verificador incorreto).";
  }

  return null; // Retorna null se estiver tudo correto
}

// src/utils/validation.ts

export function formatCpf(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})/, "$1-$2") // Coloca o hífen
    .replace(/(-\d{2})\d+?$/, "$1"); // Impede digitar mais do que o necessário
}