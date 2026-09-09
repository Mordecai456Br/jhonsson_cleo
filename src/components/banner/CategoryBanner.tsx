import * as React from "react";
import {
    Image,
    ImageBackground,
    ImageSourcePropType,
    Text,
    View,
} from "react-native";

export interface BannerCategory {
    id: string;
    image: ImageSourcePropType;
    label: string;
}

export interface CategoryBannerProps {

    backgroundImage: ImageSourcePropType;
    title: string;
    categories: BannerCategory[];
    backgroundOverlayColor?: string;
    titleColor?: string;
    categoryTextColor?: string;
    categoryImageSize?: number;
    categoryGap?: number;
    onCategoryPress?: (category: BannerCategory) => void;
}

const CategoryBanner = ({
    backgroundImage,
    title,
    categories,
    backgroundOverlayColor = "rgba(255, 255, 255, 0.15)",
    titleColor = "#730099",
    categoryTextColor = "#000",
    categoryImageSize = 100,
    categoryGap = 10,
    onCategoryPress,
}: CategoryBannerProps) => {
    return (
        <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            className="w-full items-center justify-center overflow-hidden px-0 py-2.5"
        >
            <View
                className="absolute inset-0"
                style={{
                    backgroundColor: backgroundOverlayColor,
                }}
            />
            <Text
                className="text-center text-[16px]"
                style={{
                    color: titleColor,
                    fontFamily: "LuckiestGuy-Regular",
                }}
            >
                {title}
            </Text>
            <View
                className="w-full flex-row items-center justify-center"
                style={{
                    gap: categoryGap,
                }}
            >
                {categories.map((category) => (
                    <View
                        key={category.id}
                        className="items-center overflow-hidden px-2.5"
                    >
                        <Image
                            source={category.image}
                            resizeMode="cover"
                            style={{
                                width: categoryImageSize,
                                height: categoryImageSize,
                            }}
                        />
                        <Text
                            className="mt-1 text-center text-[14px]"
                            style={{
                                color: categoryTextColor,
                            }}
                        >
                            {category.label}
                        </Text>
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
};

export default CategoryBanner;
