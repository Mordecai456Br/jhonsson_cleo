import * as React from "react";
import {
    Image,
    ImageSourcePropType,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CategoriesTab, {
    CategoriesTabItem,
} from "./CategoriesTab";

export interface HeaderProps {
    logo: ImageSourcePropType;
    brandName?: string;
    searchIcon?: ImageSourcePropType;
    searchPlaceholder?: string;
    locationIcon?: ImageSourcePropType;
    chevronIcon?: ImageSourcePropType;
    categories: CategoriesTabItem[];
    backgroundColor?: string;
    onSearchChange?: (text: string) => void;
    onCategoryPress?: (key: string) => void;
}

const Header = ({
                    logo,
                    brandName = "Jhonsson & Cleo",
                    searchIcon,
                    searchPlaceholder = "O que seu pet precisa?",
                    locationIcon,
                    chevronIcon,
                    categories,
                    backgroundColor = "#fff",
                    onSearchChange,
                    onCategoryPress,
                }: HeaderProps) => {
    return (
        <SafeAreaView
            edges={["top"]}
            className="w-full"
            style={{
                backgroundColor,
            }}
        >
            <View className="w-full items-start gap-2 px-2 py-1">

                <View className="h-[150px] w-full items-center justify-center">

                    <Image
                        source={logo}
                        resizeMode="cover"
                        className="absolute inset-0 h-full w-full"
                    />

                    <Text
                        className="z-10 text-center text-[20px] font-normal tracking-[1.2px]"
                        style={{
                            color: "#265a4a",
                            fontFamily: "LuckiestGuy-Regular",
                        }}
                    >
                        {brandName}
                    </Text>
                    <View className="z-10 w-full items-center px-6 py-5">

                        <View className="h-[42px] w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[#ccc] bg-white px-3">
                            {searchIcon && (
                                <Image
                                    source={searchIcon}
                                    resizeMode="contain"
                                    className="h-5 w-5"
                                />
                            )}
                            <TextInput
                                className="flex-1 text-[14px] text-[#434343]"
                                placeholder={searchPlaceholder}
                                placeholderTextColor="#434343"
                                onChangeText={onSearchChange}
                                numberOfLines={1}
                            />
                        </View>
                    </View>
                </View>
                <CategoriesTab
                    categories={categories}
                    locationIcon={locationIcon}
                    chevronIcon={chevronIcon}
                    onCategoryPress={onCategoryPress}
                />
            </View>
        </SafeAreaView>
    );
};

export default Header;