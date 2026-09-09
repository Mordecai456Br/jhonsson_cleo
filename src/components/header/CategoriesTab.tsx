import * as React from "react";
import {
    Image,
    ImageSourcePropType,
    ScrollView,
    View,
} from "react-native";

import CategoryTab, {
    CategoryTabProps,
} from "./CategoryTab";

export interface CategoriesTabItem extends CategoryTabProps {
    key: string;
}

export interface CategoriesTabProps {
    categories: CategoriesTabItem[];

    /**
     * Ícone opcional de localização.
     */
    locationIcon?: ImageSourcePropType;

    /**
     * Ícone opcional para indicar dropdown.
     */
    chevronIcon?: ImageSourcePropType;

    /**
     * Callback quando a categoria é selecionada.
     */
    onCategoryPress?: (key: string) => void;
}

const CategoriesTab = ({
                           categories,
                           locationIcon,
                           chevronIcon,
                           onCategoryPress,
                       }: CategoriesTabProps) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="w-full"
            contentContainerClassName="flex-row items-center gap-1 px-1"
        >
            {/* Localização */}
            {(locationIcon || chevronIcon) && (
                <View className="min-h-[24px] flex-row items-center gap-1 rounded-full border border-[#e6e6e6] px-1.5 py-0.5">
                    {locationIcon && (
                        <Image
                            source={locationIcon}
                            resizeMode="contain"
                            className="h-5 w-5"
                        />
                    )}

                    {chevronIcon && (
                        <Image
                            source={chevronIcon}
                            resizeMode="contain"
                            className="h-[10px] w-[10px]"
                        />
                    )}
                </View>
            )}

            {/* Categorias */}
            {categories.map((category) => (
                <CategoryTab
                    key={category.key}
                    label={category.label}
                    backgroundColor={category.backgroundColor}
                    textColor={category.textColor}
                    borderColor={category.borderColor}
                />
            ))}
        </ScrollView>
    );
};

export default CategoriesTab;