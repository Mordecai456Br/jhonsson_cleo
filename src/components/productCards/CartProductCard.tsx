
import * as React from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text,
    View,
} from "react-native";

export interface CartProduct {
    id: string;
    title: string;
    image: ImageSourcePropType;
    price: number;
    quantity: number;
    variant?: string;
}

export interface CartProductCardProps {
    product: CartProduct;

    /**
     * Indica se o produto está selecionado para compra.
     */
    checked: boolean;

    /**
     * Chamado quando o usuário marca/desmarca o produto.
     */
    onCheckChange: (checked: boolean) => void;

    /**
     * Alteração da quantidade.
     */
    onQuantityChange?: (quantity: number) => void;
}

const CartProductCard = ({
    product,
    checked,
    onCheckChange,
    onQuantityChange,
}: CartProductCardProps) => {
    const formattedPrice = `R$ ${product.price
    .toFixed(2)
    .replace(".", ",")}`;

    const increaseQuantity = () => {
        onQuantityChange?.(product.quantity + 1);
    };

    const decreaseQuantity = () => {
        // Impede que a quantidade fique abaixo de 1.
        if (product.quantity <= 1) {
            return;
        }

        onQuantityChange?.(product.quantity - 1);
    };

    return (
        <View className="w-full flex-row items-center gap-3 bg-white px-4 py-3">

            {/* Checkbox */}
            <Pressable
                onPress={() => onCheckChange(!checked)}
                className={`h-5 w-5 items-center justify-center rounded border ${
    checked
        ? "border-[#730099] bg-[#730099]"
        : "border-[#ccc] bg-white"
}`}
            >
                {checked && (
                    <Text className="text-[13px] font-bold text-white">
                        ✓
                    </Text>
                )}
            </Pressable>

            {/* Imagem */}
            <Image
                source={product.image}
                resizeMode="cover"
                className="h-[80px] w-[80px] rounded-lg"
            />

            {/* Informações */}
            <View className="min-w-0 flex-1 justify-between gap-1">

                {/* Nome */}
                <Text
                    className="text-xs leading-4 text-[#3d3d3d]"
                    numberOfLines={2}
                >
                    {product.title}
                </Text>

                {/* Variante */}
                {product.variant && (
                    <Text
                        className="text-[10px] text-[#808080]"
                        numberOfLines={1}
                    >
                        {product.variant}
                    </Text>
                )}

                {/* Preço */}
                <Text className="text-sm font-medium text-black">
                    {formattedPrice}
                </Text>

                {/* Quantidade */}
                <View className="flex-row items-center self-start overflow-hidden rounded border border-[#ddd]">

                    <Pressable
                        onPress={decreaseQuantity}
                        className="h-7 w-7 items-center justify-center"
                    >
                        <Text className="text-sm text-[#434343]">
                            −
                        </Text>
                    </Pressable>

                    <Text className="min-w-[28px] text-center text-xs text-[#434343]">
                        {product.quantity}
                    </Text>

                    <Pressable
                        onPress={increaseQuantity}
                        className="h-7 w-7 items-center justify-center"
                    >
                        <Text className="text-sm text-[#434343]">
                            +
                        </Text>
                    </Pressable>

                </View>
            </View>
        </View>
    );
};

export default CartProductCard;

