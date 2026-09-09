import * as React from "react";
import { FlatList, View } from "react-native";

import CartProductCard, {
    CartProduct,
} from "./CartProductCard";

export interface CartFeedProps {
    products: CartProduct[];

    selectedProducts: Set<string>;

    onCheckChange: (
        productId: string,
        checked: boolean
    ) => void;

    onQuantityChange?: (
        productId: string,
        quantity: number
    ) => void;
}

const CartFeed = ({
                      products,
                      selectedProducts,
                      onCheckChange,
                      onQuantityChange,
                  }: CartFeedProps) => {
    return (
        <FlatList
            className="flex-1"
            data={products}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: 8,
            }}
            ItemSeparatorComponent={() => (
                <View className="h-px bg-[#eeeeee]" />
            )}
            renderItem={({ item }) => (
                <CartProductCard
                    product={item}
                    checked={selectedProducts.has(item.id)}
                    onCheckChange={(checked) =>
                        onCheckChange(item.id, checked)
                    }
                    onQuantityChange={(quantity) =>
                        onQuantityChange?.(item.id, quantity)
                    }
                />
            )}
        />
    );
};

export default CartFeed;