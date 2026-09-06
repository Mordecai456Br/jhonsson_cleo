import catFoodIcon from "@/assets/icons/catFoodIcon.png";
import dogFoodIcon from "@/assets/icons/dogFoodIcon.png";
import petHygieneIcon from "@/assets/icons/petHygieneIcon.png";
import petAccessoriesIcon from "@/assets/icons/petAccessoriesIcon.png";

import houseIcon from "@/assets/icons/houseIcon.png";
import cartIcon from "@/assets/icons/cartIcon.png";
import accountIcon from "@/assets/icons/accountIcon.png";
import searchIcon from "@/assets/icons/searchIcon.png";
import starIcon from "@/assets/mock/starIcon.png";

export const icons = {
    catFoodIcon,
    dogFoodIcon,
    petHygieneIcon,
    petAccessoriesIcon,
    houseIcon,
    cartIcon,
    accountIcon,
    searchIcon,
    starIcon

} as const;

export type IconKey = keyof typeof icons;