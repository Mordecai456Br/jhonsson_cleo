
import * as React from "react";
import { Pressable, Text, View } from "react-native";

export interface CartSummaryProps {
    total: number;
    selectedCount: number;
    onCheckout?: () => void;
}

const CartSummary = ({
    total,
    selectedCount,
    onCheckout,
}: CartSummaryProps) => {
    const formattedTotal = `R$ ${total.toFixed(2).replace(".", ",")}`;

    return (
        <View className="w-full border-t border-[#e6e6e6] bg-white px-4 py-3">

            {/* Quantidade selecionada */}
            <View className="mb-2 flex-row items-center justify-between">
                <Text className="text-xs text-[#808080]">
                    {selectedCount} produto(s) selecionado(s)
                </Text>

                <Text className="text-xs text-[#808080]">
                    Total
                </Text>
            </View>

            {/* Valor total */}
            <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-sm font-medium text-[#434343]">
                    Total da compra
                </Text>

                <Text className="text-lg font-semibold text-black">
                    {formattedTotal}
                </Text>
            </View>

            {/* Finalizar compra */}
            <Pressable
                disabled={selectedCount === 0}
                onPress={onCheckout}
                className={`h-11 w-full items-center justify-center rounded-lg ${
    selectedCount > 0
        ? "bg-[#730099]"
        : "bg-[#d9d9d9]"
}`}
            >
                <Text
                    className={`text-sm font-semibold ${
    selectedCount > 0
        ? "text-white"
        : "text-[#808080]"
}`}
                >
                    Finalizar compra
                </Text>
            </Pressable>
        </View>
    );
};

export default CartSummary;

