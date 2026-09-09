import {icons} from "@/constants/icons";

export const tabs = [
    {name: "home", title: "Home", icon: icons.houseIcon},
    {name: "account/cart", title: "Meu Carrinho", icon: icons.cartIcon},
    {name: "account/[id]", title: "Minha Conta", icon: icons.accountIcon},
]

export const categories = [
    {
        key: "promo",
        label: "Promo",
        backgroundColor: "#ff4141",
        textColor: "#fff",
    },
    {
        key: "hits",
        label: "🔥 Hits",
        backgroundColor: "#fc8a38",
        textColor: "#fff",
    },
    {
        key: "racoes",
        label: "Rações",
        backgroundColor: "transparent",
        textColor: "#808080",
    },
    {
        key: "saches",
        label: "Sachês",
        backgroundColor: "transparent",
        textColor: "#808080",
    },
    {
        key: "higiene",
        label: "Higiene e Limpeza",
        backgroundColor: "transparent",
        textColor: "#808080",
    },
    {
        key: "acessorios",
        label: "Acessórios",
        backgroundColor: "transparent",
        textColor: "#808080",
    },
];