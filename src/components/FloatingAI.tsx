import * as React from "react";
import {
    Animated,
    Dimensions,
    Modal,
    Pressable,
    Text,
    View,
} from "react-native";
import { Bot, ChevronDown, Sparkles } from "lucide-react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SHEET_HEIGHT = SCREEN_HEIGHT * 0.75;

interface Question {
    question: string;
    answer: string;
}

const questions: Question[] = [
    {
        question: "Quais produtos estão em desconto?",
        answer:
            "Temos vários produtos em promoção! Posso te ajudar a encontrar rações, brinquedos e acessórios que estão com desconto.",
    },
    {
        question: "Qual a ração ideal para meu cachorro com 12 anos?",
        answer:
            "Para um cachorro de 12 anos, normalmente são consideradas rações para cães idosos (sênior). Posso te ajudar a encontrar opções disponíveis na loja.",
    },
    {
        question: "Como recebo meus itens?",
        answer:
            "Você pode retirar seus produtos na loja. Depois que a compra estiver pronta, avisaremos que ela está disponível para retirada.",
    },
];

const FloatingAI = () => {
    const [visible, setVisible] = React.useState(false);
    const [selectedQuestion, setSelectedQuestion] =
        React.useState<Question | null>(null);

    // Começa o painel fora da tela, abaixo do dispositivo.
    const translateY = React.useRef(
        new Animated.Value(SHEET_HEIGHT),
    ).current;

    const openAI = () => {
        setVisible(true);

        // Pequeno atraso para garantir que o Modal já esteja renderizado.
        requestAnimationFrame(() => {
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
                tension: 70,
                friction: 12,
            }).start();
        });
    };

    const closeAI = () => {
        // Faz o painel descer novamente antes de fechar o Modal.
        Animated.timing(translateY, {
            toValue: SHEET_HEIGHT,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
            setSelectedQuestion(null);
        });
    };

    const handleQuestion = (question: Question) => {
        // Simula a resposta da IA ao selecionar uma pergunta.
        setSelectedQuestion(question);
    };

    return (
        <>
            {/* Botão flutuante da IA */}
            <Pressable
                onPress={openAI}
                className="absolute bottom-24 right-5 h-14 w-14 items-center justify-center rounded-full bg-[#730099] shadow-lg"
            >
                <Bot size={26} color="#fff" />

                {/* Pequeno indicador visual de IA */}
                <View className="absolute right-1 top-1 h-3 w-3 rounded-full bg-[#fc3850]" />
            </Pressable>

            <Modal
                visible={visible}
                transparent
                animationType="none"
                onRequestClose={closeAI}
            >
                <View className="flex-1 justify-end">
                    {/* Fundo escurecido atrás do chatbot */}
                    <Pressable
                        onPress={closeAI}
                        className="absolute inset-0 bg-black/30"
                    />

                    {/* Painel do chatbot */}
                    <Animated.View
                        style={{
                            height: SHEET_HEIGHT,
                            transform: [{ translateY }],
                        }}
                        className="w-full overflow-hidden rounded-t-3xl bg-white"
                    >
                        {/* Header */}
                        <View className="flex-row items-center justify-between border-b border-[#e6e6e6] px-5 py-4">
                            <View className="flex-row items-center gap-3">
                                <View className="h-10 w-10 items-center justify-center rounded-full bg-[#f5d6ff]">
                                    <Sparkles
                                        size={20}
                                        color="#730099"
                                    />
                                </View>

                                <View>
                                    <Text className="text-base font-semibold text-[#222]">
                                        Assistente IA
                                    </Text>

                                    <Text className="text-xs text-[#808080]">
                                        Como posso ajudar?
                                    </Text>
                                </View>
                            </View>

                            <Pressable
                                onPress={closeAI}
                                className="h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]"
                            >
                                <ChevronDown
                                    size={22}
                                    color="#434343"
                                />
                            </Pressable>
                        </View>

                        {/* Conteúdo */}
                        <View className="flex-1 px-5 py-5">
                            {!selectedQuestion ? (
                                <>
                                    <Text className="mb-4 text-sm font-medium text-[#434343]">
                                        Perguntas frequentes
                                    </Text>

                                    <View className="gap-3">
                                        {questions.map((item) => (
                                            <Pressable
                                                key={item.question}
                                                onPress={() =>
                                                    handleQuestion(item)
                                                }
                                                className="rounded-xl border border-[#e6e6e6] bg-white px-4 py-4"
                                            >
                                                <Text className="text-sm text-[#434343]">
                                                    {item.question}
                                                </Text>
                                            </Pressable>
                                        ))}
                                    </View>
                                </>
                            ) : (
                                <View>
                                    {/* Pergunta escolhida pelo usuário */}
                                    <View className="mb-4 self-end rounded-2xl rounded-br-md bg-[#730099] px-4 py-3">
                                        <Text className="text-sm text-white">
                                            {selectedQuestion.question}
                                        </Text>
                                    </View>

                                    {/* Resposta mockada da IA */}
                                    <View className="self-start rounded-2xl rounded-bl-md bg-[#f5f5f5] px-4 py-3">
                                        <Text className="text-sm leading-5 text-[#434343]">
                                            {selectedQuestion.answer}
                                        </Text>
                                    </View>

                                    {/* Voltar para as perguntas */}
                                    <Pressable
                                        onPress={() =>
                                            setSelectedQuestion(null)
                                        }
                                        className="mt-5 self-center"
                                    >
                                        <Text className="text-sm font-semibold text-[#730099]">
                                            Ver outras perguntas
                                        </Text>
                                    </Pressable>
                                </View>
                            )}
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        </>
    );
};

export default FloatingAI;
