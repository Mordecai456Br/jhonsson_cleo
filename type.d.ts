import type { ImageSourcePropType } from "react-native";

declare global {
    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }

    interface ProductCardFeedProps {
        productCardType: "mainFeed" | "promo" | "hits";
        imageSource: ImageSourcePropType;
        title: string;
        tags?: TagProps[];
        soldCount?: number;
        rating?: number;
        price: number;
        discountPercentage?: number;
    }
    interface ProductCardDetails {
    }
    interface ProductCardCart {
        productCardType: "cart" | "checkout" | "order";
    }

    export interface TagProps {
        label: string;
        bgColorClass?: string;
        textColorClass?: string;
    }

}

export {};