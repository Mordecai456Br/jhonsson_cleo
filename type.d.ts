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

    interface ProductTag {
        label: string;
        variant: "default" | "promo" | "custom";
        // Opcional: cores customizadas caso a tag seja do tipo 'custom'
        bgColor?: string;
        textColor?: string;
    }

    interface ProductCardFeedProps {
        productCardType: "mainFeed" | "promo" | "hits";
        title: string;
        imageUrl: ImageSourcePropType;
        tags?: ProductTag[];
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


}

export {};