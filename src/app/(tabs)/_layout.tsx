import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

const tabBar = components.tabBar;

const TabIcon = ({
    focused,
    icon,
    title,
}: TabIconProps & { title: string }) => {
    return (
        <View className="h-full w-full items-center justify-center">
            {/*
             * O conteúdo ocupa toda a largura disponível da tab.
             * O item da tab é quem define essa largura.
             */}
            <View className="h-full w-full items-center justify-center">
                {/* Ícone */}
                <Image
                    source={icon}
                    resizeMode="contain"
                    className="h-[30px] w-[30px]"
                />

                {/* Nome da tab */}
                <Text className="mt-0.5 text-center text-[10px] font-normal leading-[15px] text-black">
                    {title}
                </Text>

                {/* Indicador da tab ativa */}
                <View
                    className={`mt-1 h-[2px] w-full rounded ${
    focused ? "bg-[#434343]" : "bg-transparent"
}`}
                />
            </View>
        </View>
    );
};

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(
                        insets.bottom,
                        tabBar.horizontalInset
                    ),

                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,

                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,

                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },

                tabBarItemStyle: {
                    flex: 1,
                    width: "100%",
                    paddingVertical: 0,
                }
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={tab.icon}
                                title={tab.title}
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;

