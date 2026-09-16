import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

const tabBar = components.tabBar;

const TabIcon = ({
                     focused,
                     icon,
                 }: TabIconProps) => {
    return (
        <View className="w-full items-center justify-center">
            {/*
             * O container agora usa apenas o espaço necessário
             * e o alinhamento vertical é controlado pelo próprio
             * container da tab.
             */}
            <Image
                source={icon}
                resizeMode="contain"
                className="h-[30px] w-[30px]"
            />

            {/* Indicador da tab ativa */}
            <View
                className={`mt-1 h-[2px] w-full rounded ${
                    focused ? "bg-[#434343]" : "bg-transparent"
                }`}
            />
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

                    alignItems: "center",
                },

                tabBarItemStyle: {
                    flex: 1,
                    width: "100%",
                    paddingVertical: 0,

                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={tab.icon}
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;

