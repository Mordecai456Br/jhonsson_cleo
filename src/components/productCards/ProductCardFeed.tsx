import * as React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

export interface ProductTag {
    label: string;
    variant: "default" | "promo" | "custom";
    // Opcional: cores customizadas caso a tag seja do tipo 'custom'
    bgColor?: string;
    textColor?: string;
}

export interface ProductCardFeedProps {
    productCardType: "mainFeed" | "promo" | "hits";
    title: string;
    imageUrl: ImageSourcePropType;
    tags?: ProductTag[];
    soldCount?: number;
    rating?: number;
    price: number;
    discountPercentage?: number;
}

const ProductCardMainRecommendations = ({
                                            productCardType,
                                            title,
                                            imageUrl,
                                            tags = [],
                                            soldCount = 0,
                                            rating = 0,
                                            price,
                                            discountPercentage,
                                        }: ProductCardFeedProps) => {

    // Exemplo de formatação de moeda simples
    const formattedPrice = `R$ ${price.toFixed(2).replace(".", ",")}`;

    return (
        <View className="w-full flex-1 items-start justify-center gap-2">
            {/* Imagem do Produto */}
            <Image
                className="h-[179.5px] w-[179.5px] rounded-lg"
                source={imageUrl}
                resizeMode="cover"
            />

            <View className="w-[179px] items-start">
                {/* Título com Tags Inline fluindo com o texto */}
                <Text
                    className="text-xs font-normal leading-4 text-[#3d3d3d]"
                    numberOfLines={2}
                >
                    {tags.map((tag, index) => {
                        const isPromo = tag.variant === "promo";
                        const bgClass = isPromo ? "bg-[#fc3850]" : "bg-[#f5d6ff]";
                        const textClass = isPromo ? "text-white" : "text-[#730099]";

                        return (
                            <View
                                key={index}
                                className={`mr-1 flex-row items-center justify-center overflow-hidden rounded px-1.5 py-0.5 align-middle ${bgClass}`}
                            >
                                <Text className={`text-[10px] font-semibold ${textClass}`}>
                                    {tag.label}
                                </Text>
                            </View>
                        );
                    })}
                    {tags.length > 0 && " "}
                    {title}
                </Text>

                {/* Avaliações e Vendas */}
                <View className="mt-1 h-[15px] w-full flex-row items-center gap-1">
                    <View className="flex-row items-center justify-center gap-0.5">
                        <Text className="text-[10px] font-normal tracking-tighter text-[#808080]">
                            {soldCount} vendido(s)
                        </Text>
                    </View>

                    <Text className="text-[10px] font-normal tracking-tighter text-[#808080]">
                        |
                    </Text>

                    <View className="flex-row items-center justify-center gap-0.5">
                        {/* Aqui você pode usar uma biblioteca como react-native-heroicons (StarIcon)
                Para fins de layout, mantive os blocos como representação das estrelas */}
                        {[...Array(5)].map((_, i) => (
                            <View key={i} className="h-[9px] w-[9px] rounded-full bg-yellow-400" />
                        ))}
                    </View>

                    <Text className="text-[10px] font-normal tracking-tighter text-[#808080]">
                        {rating.toFixed(1)}
                    </Text>
                </View>

                {/* Preço e Desconto */}
                <View className="mt-1 w-full flex-row items-center flex-wrap gap-1">
                    <Text className="text-xs font-medium text-black">
                        {formattedPrice}
                    </Text>

                    {discountPercentage && (
                        <View className="flex-row items-center justify-center overflow-hidden rounded-lg bg-[#fecdd3] px-1 py-0.5">
                            <Text className="text-[10px] font-normal text-[#fc3850]">
                                -{discountPercentage}% off
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default ProductCardMainRecommendations;