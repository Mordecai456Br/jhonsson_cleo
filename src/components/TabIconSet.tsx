import * as React from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text,
    View,
} from "react-native";

export interface TabIconSetProps {
    label: string;
    icon: ImageSourcePropType;
    active?: boolean;
    onPress?: () => void;
}

const TabIconSet = ({
                        label,
                        icon,
                        active = false,
                        onPress,
                    }: TabIconSetProps) => {
    return (
        <Pressable
            onPress={onPress}
            className="h-full flex-1 items-center justify-center"
        >
            <View className="w-full flex-1 items-center justify-center">
                <Image
                    source={icon}
                    resizeMode="contain"
                    className="h-[30px] w-[30px]"
                />
                <Text className="mt-0.5 text-center font-normal text-[10px] leading-[15px] text-black">
                    {label}
                </Text>
                <View
                    className={`mt-1 h-[2px] w-full rounded ${
                        active
                            ? "bg-[#434343]"
                            : "bg-transparent"
                    }`}
                />
            </View>
        </Pressable>
    );
};

export default TabIconSet;