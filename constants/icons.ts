import catFoodIcon from "@/assets/icons/catFoodIcon.png";
import dogFoodIcon from "@/assets/icons/dogFoodIcon.png";
import petHygieneIcon from "@/assets/icons/petHygieneIcon.png";
import petAccessoriesIcon from "@/assets/icons/petAccessoriesIcon.png";

export const icons = {
    catFoodIcon,
    dogFoodIcon,
    petHygieneIcon,
    petAccessoriesIcon,

} as const;

export type IconKey = keyof typeof icons;