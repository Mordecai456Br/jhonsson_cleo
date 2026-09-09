import * as React from "react";
import { View } from "react-native";

import CartFeed from "./CartFeed";
import CartSummary from "./CartSummary";
import {
    CartProduct,
} from "./CartProductCard";

interface CartProps {
    products: CartProduct[];

    /**
     * HeaderPetshop da aplicação.
     *
     * É passado como componente para que o carrinho
     * não fique acoplado ao seu HeaderPetshop específico.
     */
    header?: React.ReactNode;

    /**
     * Tabs da aplicação.
     */
    tabs?: React.ReactNode;
}

const Cart = ({
                  products: initialProducts,
                  header,
                  tabs,
              }: CartProps) => {
    /*
     * Os produtos ficam na tela pai porque a quantidade
     * também influencia diretamente o valor total.
     */
    const [products, setProducts] =
        React.useState<CartProduct[]>(initialProducts);

    /*
     * Set é utilizado para guardar somente os IDs
     * dos produtos selecionados.
     *
     * É como uma lista de "produtos marcados para compra".
     */
    const [selectedProducts, setSelectedProducts] =
        React.useState<Set<string>>(new Set());

    /**
     * Marca/desmarca um produto.
     */
    const handleCheckChange = (
        productId: string,
        checked: boolean
    ) => {
        setSelectedProducts((current) => {
            const next = new Set(current);

            if (checked) {
                next.add(productId);
            } else {
                next.delete(productId);
            }

            return next;
        });
    };

    /**
     * Altera a quantidade de um produto.
     */
    const handleQuantityChange = (
        productId: string,
        quantity: number
    ) => {
        setProducts((current) =>
            current.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        quantity,
                    }
                    : product
            )
        );
    };

    /**
     * Calcula somente os produtos selecionados.
     *
     * Exemplo:
     *
     * Produto A → R$ 10 × 2 = R$ 20
     * Produto B → R$ 15 × 1 = R$ 15
     * Produto C → desmarcado
     *
     * Total = R$ 35
     */
    const total = React.useMemo(() => {
        return products.reduce((sum, product) => {
            if (!selectedProducts.has(product.id)) {
                return sum;
            }

            return sum + product.price * product.quantity;
        }, 0);
    }, [products, selectedProducts]);

    const selectedCount = selectedProducts.size;

    return (
        <View className="flex-1 bg-white">

            {/* HeaderPetshop fica acima do feed */}
            {header}

            {/* Feed ocupa o espaço disponível */}
            <View className="flex-1 pb-[100px]">
                <CartFeed
                    products={products}
                    selectedProducts={selectedProducts}
                    onCheckChange={handleCheckChange}
                    onQuantityChange={handleQuantityChange}
                />
                <CartSummary
                    total={total}
                    selectedCount={selectedCount}
                    onCheckout={() => {
                        console.log(
                            "Finalizando compra:",
                            selectedProducts
                        );
                    }}
                />
            </View>
            {/* Tabs ficam abaixo do carrinho */}
            {tabs}
        </View>
    );
};

export default Cart;