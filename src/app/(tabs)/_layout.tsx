import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

const tabBar = components.tabBar;

/**
 * Componente visual de cada item da TabBar.
 *
 * Ele substitui o antigo TabIcon e agora possui:
 * - Ícone
 * - Texto
 * - Indicador da tab ativa
 *
 * O flex-1 da TabBar distribui automaticamente o espaço
 * disponível entre todas as tabs.
 */
const TabIcon = ({
    focused,
    icon,
    title,
}: TabIconProps & { title: string }) => {
    return (
        <View className="h-full flex-1 items-center justify-center">

            {/* Área responsável pelo ícone + texto */}
            <View className="w-full flex-1 items-center justify-center">

                {/* Ícone */}
                <Image
                    source={icon}
                    resizeMode="contain"
                    className="h-[30px] w-[30px]"
                />

                {/* Nome da tab */}
                <Text
                    className="mt-0.5 text-center text-[10px] font-normal leading-[15px] text-black"
                >
                    {title}
                </Text>

                {/*
                 * Indicador da tab ativa.
                 *
                 * Mantemos os 2px de altura mesmo quando inativo.
                 * Assim, quando a tab muda, o conteúdo não "pula".
                 */}
                <View
                    className={`mt-1 h-[2px] w-full rounded ${
    focused
        ? "bg-[#434343]"
        : "bg-transparent"
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

                /*
                 * O label padrão do Expo Router será desativado.
                 *
                 * O texto é renderizado pelo nosso TabIcon,
                 * permitindo controlar exatamente o espaçamento
                 * entre ícone, texto e indicador.
                 */
                tabBarShowLabel: false,

                tabBarStyle: {
                    position: "absolute",

                    /*
                     * Respeita o Safe Area do aparelho.
                     *
                     * Em aparelhos com barra de navegação/home indicator,
                     * a TabBar não ficará encostada nessa área.
                     */
                    bottom: Math.max(
                        insets.bottom,
                        tabBar.horizontalInset
                    ),

                    height: tabBar.height,

                    /*
                     * Mantemos o espaçamento horizontal do componente,
                     * mas não colocamos padding fixo em cada item.
                     */
                    marginHorizontal: tabBar.horizontalInset,

                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,

                    borderTopWidth: 0,
                    elevation: 0,

                    /*
                     * Remove possíveis sombras/bordas nativas.
                     */
                    shadowOpacity: 0,
                },

                /*
                 * Cada tab recebe a mesma quantidade de espaço.
                 *
                 * Exemplo com 4 tabs:
                 *
                 * 360px / 4 = 90px por tab
                 *
                 * 430px / 4 = 107.5px por tab
                 */
                tabBarItemStyle: {
                    flex: 1,
                    paddingVertical: 0,
                },

                /*
                 * Permite que o nosso TabIcon ocupe naturalmente
                 * o espaço disponibilizado pelo item.
                 */
                tabBarIconStyle: {
                    width: "100%",
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
                        /*
                         * O título ainda fica definido para o sistema
                         * de navegação, acessibilidade etc.
                         */
                        title: tab.title,

                        /*
                         * O nosso componente controla a representação
                         * visual completa da tab.
                         */
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

