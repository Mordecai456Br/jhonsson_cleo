import {View, Text} from "react-native";
import React from 'react';
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);
import {Header} from "@/src/components/Header";
import HeaderPetshop from "@/src/components/header/HeaderPetshop";
import {categories} from "@/constants/data";
import Cart from "@/src/components/productCards/Cart";

export default function cart() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5">
            <HeaderPetshop
                logo={require("@/assets/images/searchBarAndHeaderDogIcon.png")}
                searchIcon={require("@/assets/icons/searchIcon.png")}
                locationIcon={require("@/assets/icons/locationIcon.png")}
                chevronIcon={require("@/assets/icons/chevron-down.png")}
                categories={categories}
                onSearchChange={(text) => {
                    console.log(text);
                }}
                onCategoryPress={(key) => {
                    console.log("Categoria:", key);
                }}
            />
            <Cart
                products={[
                    {
                        id: "1",
                        title: "Ração Úmida Pedigree Sachê Carne ao Molho",
                        image: require("@/assets/mock/productImages/perdigreeAdulto.jpg"),
                        price: 3.6,
                        quantity: 2,
                        variant: "100 G",
                    },
                    {
                        id: "2",
                        title: "Ração Premier para Cães Seniors",
                        image: require("@/assets/mock/productImages/perdigreeSenior.jpg"),
                        price: 89.9,
                        quantity: 1,
                    },
                    {
                        id: "3",
                        title: "Disguiser, para seu cão virar um SkinWalker",
                        image: require("@/assets/mock/productImages/disguiser.png"),
                        price: 24.9,
                        quantity: 1,
                    },
                    {
                        id: "4",
                        title: "Jetpack, para seu cão te acompanhar em todos cantos",
                        image: require("@/assets/mock/productImages/jetpack.png"),
                        price: 24.9,
                        quantity: 1,
                    },
                ]}
            />
                </View>
        </SafeAreaView>
    );
}