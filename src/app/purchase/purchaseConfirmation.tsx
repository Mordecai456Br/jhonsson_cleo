import * as React from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const PurchaseConfirmation = () => {
    const router = useRouter();

    // Recebe a quantidade de produtos selecionados no carrinho.
    const { quantity } = useLocalSearchParams<{ quantity?: string }>();

    // Converte o parâmetro da rota para número.
    // Caso não seja informado, considera 0 como valor padrão.
    const purchasedQuantity = Number(quantity ?? 0);

    return (
        <View style={styles.purchaseConfirmation}>
            <ScrollView
                style={styles.feed}
                contentContainerStyle={styles.feedContainerContent}
            >
                <View style={styles.confirmationContainer}>
                    {/* Mensagem principal */}
                    <Text style={styles.confirmationTitle}>
                        Compra realizada com sucesso!
                    </Text>

                    {/* Quantidade comprada */}
                    <Text style={styles.quantityText}>
                        Você comprou {purchasedQuantity}{" "}
                        {purchasedQuantity === 1 ? "produto" : "produtos"}.
                    </Text>

                    {/* Status do pedido */}
                    <Text style={styles.pickupText}>
                        Seu pedido está pronto para retirada.
                    </Text>

                    {/* Ações */}
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.primaryButton}
                            onPress={() => router.replace("/")}
                        >
                            <Text style={styles.primaryButtonText}>
                                Voltar ao início
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.secondaryButton}
                            onPress={() => router.push("/purchase/orders")}
                        >
                            <Text style={styles.secondaryButtonText}>
                                Conferir pedidos
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    purchaseConfirmation: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },

    feed: {
        flex: 1,
    },

    feedContainerContent: {
        flexGrow: 1,
    },

    confirmationContainer: {
        flex: 1,
        minHeight: 700,
        paddingHorizontal: 20,
        paddingVertical: 80,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },

    confirmationTitle: {
        fontSize: 20,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "center",
        color: "#000",
    },

    quantityText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "center",
        color: "#434343",
    },

    pickupText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        textAlign: "center",
        color: "#388455",
    },

    buttonContainer: {
        marginTop: 24,
        gap: 8,
        alignItems: "center",
    },

    primaryButton: {
        height: 36,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: "#fc3850",
        alignItems: "center",
        justifyContent: "center",
    },

    primaryButtonText: {
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#fff",
    },

    secondaryButton: {
        height: 36,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    secondaryButtonText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#808080",
    },
});

export default PurchaseConfirmation;