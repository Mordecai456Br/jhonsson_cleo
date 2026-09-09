import * as React from "react";
import { Text, View } from "react-native";

export interface CategoryTabProps {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
}

const CategoryTab = ({
                         label,
                         backgroundColor = "transparent",
                         textColor = "#808080",
                         borderColor = "transparent",
                     }: CategoryTabProps) => {
    return (
        <View
            className="min-h-[24px] flex-row items-center rounded-full px-1.5 py-1"
            style={{
                backgroundColor,
                borderColor,
            }}
        >
            <Text
                className="text-center text-[14px] font-normal"
                style={{
                    color: textColor,
                }}
            >
                {label}
            </Text>
        </View>
    );
};

export default CategoryTab;