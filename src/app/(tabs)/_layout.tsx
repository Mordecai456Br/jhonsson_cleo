import {Tabs} from "expo-router";

const TabLayout = () => (
    <Tabs>
        <Tabs.Screen name="index" options={{title: "Inicio"}}></Tabs.Screen>
        <Tabs.Screen name="account/purchase/cart" options={{title: "Meu Carrinho"}}></Tabs.Screen>
        <Tabs.Screen name="account/[id]" options={{title: "Minha Conta"}}></Tabs.Screen>
        <Tabs.Screen name="account/purchase/checkout" options={{href: null}}></Tabs.Screen>
        <Tabs.Screen name="account/purchase/orders" options={{href: null}}></Tabs.Screen>
    </Tabs>
)

export default TabLayout;