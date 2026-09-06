import * as React from "react";
import { Image, Text, View } from "react-native";

const ProductCard = () => {
    return (
        <View className="w-full flex-1 gap-2 justify-center items-start">
            {/* Imagem do Produto */}
            <Image
                className="w-[179.5px] h-[179.5px] rounded-lg"
                resizeMode="cover"
            />

            <View className="self-stretch items-start">

                {/* Título e Tags (Layout original com recuo de espaços preservado) */}
                <View className="flex-row flex-wrap gap-x-1 items-start content-start relative">
                    <Text
                        className="w-[179px] pt-[1px] text-[#3d3d3d] text-left font-normal text-xs tracking-tighter leading-4 overflow-hidden"
                        numberOfLines={2}
                    >
                        {/* Mantido o espaçamento original do seu código para as tags absolutas */}
                        {"                             Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g"}
                    </Text>

                    <View className="absolute z-10 left-0 top-0 flex-row items-center gap-1">
                        <View className="bg-[#f5d6ff] py-0.5 px-1.5 rounded flex-row items-center justify-center overflow-hidden">
                            <Text className="text-[#730099] font-semibold text-[10px] text-left">100 G</Text>
                        </View>
                        <View className="bg-[#fc3850] py-0.5 px-1.5 rounded flex-row items-center justify-center overflow-hidden">
                            <Text className="text-white font-semibold text-[10px] text-left">Promo</Text>
                        </View>
                    </View>
                </View>

                {/* Avaliações e Vendas */}
                <View className="h-[15px] self-stretch flex-row items-center gap-1 mt-1">
                    <Text className="text-[10px] text-[#808080] font-normal tracking-tighter">
                        0 vendido(s)
                    </Text>
                    <Text className="text-[10px] text-[#808080] font-normal tracking-tighter">|</Text>

                    <View className="flex-row items-start gap-[2px]">
                        {/* Renderizando as 5 estrelas dinamicamente */}
                        {[...Array(5)].map((_, index) => (
                            <View key={index} className="w-[9px] h-[9px]">
                                <Image className="absolute left-0 top-0 w-full h-full" resizeMode="cover" />
                                <Image className="absolute left-0 top-0 w-full h-full" resizeMode="cover" />
                            </View>
                        ))}
                    </View>

                    <Text className="text-[10px] text-[#808080] font-normal tracking-tighter">3.9</Text>
                </View>

                {/* Preço e Desconto */}
                <View className="flex-row flex-wrap gap-x-1 items-center self-stretch mt-1">
                    <View className="flex-row items-center">
                        <Text className="h-4 text-black font-medium text-left tracking-tighter items-end flex leading-[12px] text-[8px] w-[11px]">
                            R$
                        </Text>
                        <View className="flex-row items-center">
                            <Text className="text-black font-medium text-left tracking-tighter leading-[17px] text-xs">3</Text>
                            <Text className="-ml-[1px] text-black font-medium text-left tracking-tighter leading-[17px] text-xs">,</Text>
                            <Text className="-ml-[1px] h-[15.5px] text-black font-medium text-left tracking-tighter items-end flex leading-[12px] text-[8px] w-[11px]">
                                60
                            </Text>
                        </View>
                    </View>

                    <View className="bg-[#fecdd3] px-1 py-[1px] items-center flex-row rounded-lg justify-center overflow-hidden">
                        <Text className="text-[#fc3850] text-[10px] text-left font-normal">-8%</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default ProductCard;