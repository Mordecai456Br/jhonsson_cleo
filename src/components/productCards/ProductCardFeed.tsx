import * as React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";



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


    const formattedPrice = `R$ ${price.toFixed(2).replace(".", ",")}`;

    return (
        <View className="w-full h-[268.5px] flex-1 items-start justify-center gap-2">
            {/* Imagem do Produto */}
            <Image
                className="h-[179.5px] w-[179.5px] rounded-lg"
                source={imageUrl}
                resizeMode="cover"
            />

            <View className="w-[179px] items-start">


                {/* Container vertical: tags em cima e título abaixo */}
                <View className="w-full items-start">

                    {/* Container horizontal: permite múltiplas tags lado a lado */}
                    <View className="w-full flex-row flex-wrap items-start">
                        {tags.map((tag, index) => {
                            const isPromo = tag.variant === "promo";

                            return (
                                <View
                                    key={`${tag.label}-${index}`}
                                    className={`mr-1 mb-0.5 flex-row items-center justify-center rounded px-1.5 py-0.5 ${
                                        isPromo
                                            ? "bg-[#fc3850]"
                                            : "bg-[#f5d6ff]"
                                    }`}
                                >
                                    <Text
                                        className={`text-[10px] font-semibold ${
                                            isPromo
                                                ? "text-white"
                                                : "text-[#730099]"
                                        }`}
                                    >
                                        {tag.label}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <Text
                        className="w-full text-xs font-normal leading-4 text-[#3d3d3d]"
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {title}
                    </Text>

                </View>

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
                            <Image key={i} className="h-[9px] w-[9px]" source={require("@/assets/mock/starIcon.png")} />
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
                    <View className="flex-row items-center justify-center overflow-hidden rounded-lg bg-[#f5d6ff] px-2 py-1">
                        <Text className="text-[10px] font-semibold text-[#730099]">
                            Adicionar ao carrinho
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductCardMainRecommendations;