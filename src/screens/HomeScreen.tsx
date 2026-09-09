
import * as React from "react";
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from "react-native";
import ProductCardMainRecommendations from "@/src/components/productCards/ProductCardFeed";
import {categories} from "@/constants/data";
import Header from "@/src/components/header/Header";
import CategoryBanner from "@/src/components/banner/CategoryBanner";

const FeedDeProdutos = () => {
    const tagsArray: ProductTag[] = [
        { label: "100g", variant: "default" },
        { label: "Promo", variant: "promo" },
    ];

    return (
        <View style={styles.feedDeProdutos}>
            <Header
                logo={require("@/assets/images/searchBarAndHeaderDogIcon.png")}
                searchIcon={require("@/assets/icons/searchIcon.png")}
                locationIcon={require("@/assets/icons/locationIcon.png")}
                chevronIcon={require("@/assets/icons/chevron-down.png")}
                categories={categories}
                onSearchChange={(text) => {
                    console.log(text);
                }}
                onCategoryPress={(key) => {
                    console.log("Categoria:", key);
                }}
            />
            <ScrollView style={[styles.feed, styles.feedLayout]} contentContainerStyle={styles.feedContainerContent}>
                <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                    <CategoryBanner
                        backgroundImage={require("@/assets/images/catBannerBackground2.png")}
                        title="miauravilhosos para gatos:"
                        categories={[
                            {
                                id: "racoes",
                                image: require("@/assets/icons/catFoodIcon.png"),
                                label: "Rações",
                            },
                            {
                                id: "limpeza",
                                image: require("@/assets/icons/petHygieneIcon.png"),
                                label: "Caixa de areia e Limpeza",
                            },
                            {
                                id: "acessorios",
                                image: require("@/assets/icons/petHygieneIcon.png"),
                                label: "Acessórios",
                            },
                        ]}
                    />
                    <CategoryBanner
                        backgroundImage={require("@/assets/images/dogBannerBackground2.png")}
                        title="cachorros audoram esses:"
                        categories={[
                            {
                                id: "racoes",
                                image: require("@/assets/icons/dogFoodIcon.png"),
                                label: "Rações",
                            },
                            {
                                id: "limpeza",
                                image: require("@/assets/icons/petHygieneIcon.png"),
                                label: "Caixa de areia e Limpeza",
                            },
                            {
                                id: "acessorios",
                                image: require("@/assets/icons/petHygieneIcon.png"),
                                label: "Acessórios",
                            },
                        ]}
                    />
                    <Text style={[styles.cachorrosAudoramEsses, styles.cachorrosAudoramEssesTypo]}>Recomendado</Text>
                </View>
                <ScrollView style={[styles.products, styles.feedLayout]} contentContainerStyle={styles.productsContainerContent}>
                    <View style={[styles.productsectionleft, styles.frameGroupSpaceBlock]}>
                        <ProductCardMainRecommendations
                            productCardType="promo"
                            title="Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g"
                            imageUrl={require("@/assets/mock/productImages/perdigreeAdulto.jpg")}
                            tags={[
                                {
                                    label: "100 G",
                                    variant: "default",
                                },
                                {
                                    label: "Promo",
                                    variant: "promo",
                                },
                            ]}
                            soldCount={130}
                            rating={3.9}
                            price={3.60}
                            discountPercentage={8}
                        />
                    </View>
                    <View style={[styles.productsectionleft, styles.frameGroupSpaceBlock]}>
                        <ProductCardMainRecommendations
                            productCardType="promo"
                            title="Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g"
                            imageUrl={require("@/assets/mock/productImages/perdigreeAdulto.jpg")}
                            tags={[
                                {
                                    label: "100 G",
                                    variant: "default",
                                },
                                {
                                    label: "Promo",
                                    variant: "promo",
                                },
                            ]}
                            soldCount={130}
                            rating={3.9}
                            price={3.60}
                            discountPercentage={8}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
            <View style={[styles.feedDeProdutosInner, styles.searchParentBorder1]}>
                <View style={[styles.minhaContaParent, styles.frameChildFlexBox]}>
                    <View style={styles.minhaConta}>
                        <Image style={styles.homePageIcon} resizeMode="cover" />
                        <Text style={[styles.inicio, styles.gTypo]}>Inicio</Text>
                    </View>
                    <View style={styles.minhaConta}>
                        <Image style={styles.homePageIcon} resizeMode="cover" />
                        <Text style={[styles.inicio, styles.gTypo]}>Pesquisar</Text>
                    </View>
                    <Image style={styles.ellipseIcon} resizeMode="cover" />
                    <View style={styles.minhaConta}>
                        <Image style={styles.homePageIcon} resizeMode="cover" />
                        <Text style={[styles.inicio, styles.gTypo]}>Carrinho</Text>
                    </View>
                    <View style={styles.minhaConta}>
                        <Image style={styles.homePageIcon} resizeMode="cover" />
                        <Text style={[styles.inicio, styles.gTypo]}>Minha Conta</Text>
                    </View>
                </View>
            </View>
            <Image style={styles.feedDeProdutosChild} resizeMode="cover" />
        </View>);
};

const styles = StyleSheet.create({
    frameContainer3Content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 4
    },
    productsContainerContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 0
    },
    feedContainerContent: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    frameChildFlexBox: {
        height: 50,
        alignItems: "center",
        alignSelf: "stretch",
        overflow: "hidden"
    },
    searchParentBorder: {
        borderWidth: 1,
        borderStyle: "solid"
    },
    raesTypo: {
        fontSize: 14,
        textAlign: "center"
    },
    feedLayout: {
        maxWidth: "100%",
        alignSelf: "stretch"
    },
    localizationLayout: {
        minHeight: 24,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    localizationSpaceBlock1: {
        paddingHorizontal: 6,
        minHeight: 24,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4
    },
    promoTypo: {
        color: "#fff",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
    localizationSpaceBlock: {
        paddingHorizontal: 2,
        minHeight: 24,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4
    },
    frameGroupSpaceBlock: {
        paddingVertical: 20,
        overflow: "hidden"
    },
    frameSpaceBlock: {
        paddingHorizontal: 0,
        alignItems: "center"
    },
    cachorrosAudoramEssesTypo: {
        fontSize: 16,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "LuckiestGuy-Regular"
    },
    starsSpaceBlock: {
        paddingVertical: 0,
        alignItems: "center"
    },
    raes2Clr: {
        color: "#000",
        alignSelf: "center",
        fontFamily: "Inter-Regular"
    },
    frameParentCommon: {
        columnGap: 4,
        rowGap: 0
    },
    raoWrapperPosition: {
        paddingTop: 1,
        width: 179,
        flexDirection: "row",
        zIndex: 0
    },
    tagPosition: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    tagFlexBox: {
        paddingVertical: 2,
        borderRadius: 4,
        paddingHorizontal: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    gTypo: {
        fontSize: 10,
        textAlign: "left"
    },
    parentLayout: {
        height: 15,
        flexDirection: "row"
    },
    vendidosTypo: {
        lineHeight: 15,
        fontSize: 10,
        textAlign: "left",
        letterSpacing: -0.1,
        fontFamily: "Inter-Regular",
        overflow: "hidden"
    },
    starsFlexBox: {
        gap: 2,
        flexDirection: "row"
    },
    frameFlexBox: {
        alignContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch"
    },
    textTypo: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        textAlign: "left",
        color: "#000",
        overflow: "hidden"
    },
    iconLayout: {
        width: 9,
        height: 9
    },
    textLayout: {
        lineHeight: 17,
        fontSize: 12
    },
    searchParentBorder1: {
        borderColor: "#ccc",
        justifyContent: "center",
        overflow: "hidden"
    },
    feedDeProdutos: {
        height: 812,
        alignItems: "flex-start",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#fff"
    },
    frameParent: {
        paddingHorizontal: 8,
        zIndex: 0,
        paddingVertical: 4,
        gap: 8,
        alignSelf: "stretch",
        alignItems: "flex-start",
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    frameChild: {
        alignItems: "center",
        justifyContent: "center"
    },
    jhonssonCleoParent: {
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch"
    },
    jhonssonCleo: {
        width: 135,
        fontSize: 20,
        letterSpacing: 1.2,
        color: "#265a4a",
        textAlign: "center",
        fontFamily: "LuckiestGuy-Regular",
        zIndex: 0
    },
    geminiGeneratedImage59ijhv5Icon: {
        marginTop: -40,
        zIndex: 1,
        flex: 1,
        alignSelf: "stretch",
        width: "100%"
    },
    frameWrapper: {
        width: 359,
        top: 77,
        left: 8,
        paddingHorizontal: 20,
        zIndex: 2,
        paddingVertical: 0,
        position: "absolute",
        alignItems: "flex-start"
    },
    searchParent: {
        width: 303,
        borderRadius: 16,
        paddingHorizontal: 7,
        paddingVertical: 9,
        gap: 10,
        flexDirection: "row",
        borderColor: "#ccc",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    searchIcon: {
        height: 20,
        width: 20
    },
    oQueSeu: {
        color: "#434343",
        fontFamily: "Inter-Regular"
    },
    localizationParent: {
        height: 26
    },
    localization: {
        borderColor: "#e6e6e6",
        paddingHorizontal: 5,
        gap: 4,
        paddingVertical: 1,
        borderWidth: 1,
        borderStyle: "solid"
    },
    chevronDownIcon: {
        height: 10,
        width: 10
    },
    localization2: {
        backgroundColor: "#ff4141"
    },
    promo: {
        fontSize: 14,
        textAlign: "center"
    },
    localization3: {
        backgroundColor: "#fc8a38"
    },
    raes: {
        color: "#808080",
        fontFamily: "Inter-Regular"
    },
    localization5: {
        overflow: "hidden"
    },
    localization7: {
        padding: 2,
        overflow: "hidden"
    },
    feed: {
        zIndex: 1,
        flex: 1
    },
    frameGroup: {
        gap: 24,
        paddingHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch"
    },
    cachorrosAudoramEssesParent: {
        paddingVertical: 10,
        gap: 10,
        justifyContent: "center",
        alignSelf: "stretch"
    },
    cachorrosAudoramEsses: {
        color: "#388455"
    },
    frameContainer: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    frameView: {
        paddingHorizontal: 10,
        gap: 4,
        overflow: "hidden"
    },
    frameItem: {
        width: 100,
        height: 100
    },
    raes2: {
        fontSize: 14,
        textAlign: "center"
    },
    miauravilhososParaGatos: {
        color: "#730099"
    },
    products: {
        height: 1532
    },
    productsectionleft: {
        paddingHorizontal: 4,
        gap: 10,
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#fff"
    },
    productcard: {
        width: 179,
        justifyContent: "center",
        gap: 8,
        alignItems: "flex-start"
    },
    imageIcon: {
        width: 179.5,
        borderRadius: 8,
        height: 179.5
    },
    frameParent8: {
        alignSelf: "stretch",
        alignItems: "flex-start"
    },
    frameParent9: {
        alignContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    raoMidaPedigreeSachCarWrapper: {
        alignItems: "flex-start"
    },
    raoMidaPedigree: {
        lineHeight: 16,
        textAlign: "left",
        fontSize: 12,
        color: "#3d3d3d",
        letterSpacing: -0.1,
        fontFamily: "Inter-Regular",
        flex: 1,
        overflow: "hidden"
    },
    tagParent: {
        gap: 4,
        flexDirection: "row",
        zIndex: 1,
        alignItems: "center"
    },
    tag: {
        backgroundColor: "#f5d6ff",
        paddingVertical: 2,
        borderRadius: 4
    },
    g: {
        color: "#730099",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 10
    },
    tag2: {
        backgroundColor: "#fc3850",
        paddingVertical: 2,
        borderRadius: 4
    },
    promo2: {
        color: "#fff",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
    frameFlexBox1: {
        alignContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    frameWrapper3: {
        width: 179,
        paddingVertical: 1,
        flexDirection: "row"
    },
    vendidosParent: {
        flex: 1,
        alignItems: "flex-start"
    },
    vendidos: {
        color: "#808080"
    },
    stars: {
        paddingHorizontal: 4,
        paddingVertical: 0,
        alignItems: "center",
        alignSelf: "stretch"
    },
    frameParent10: {
        columnGap: 4,
        rowGap: 0
    },
    rParent: {
        flexDirection: "row",
        alignItems: "center"
    },
    r: {
        height: 16,
        width: 11,
        display: "flex",
        alignItems: "flex-end",
        lineHeight: 12,
        fontSize: 8,
        letterSpacing: -0.1,
        fontFamily: "Inter-Medium",
        fontWeight: "500"
    },
    rLayout: {
        lineHeight: 12,
        fontSize: 8
    },
    tag3: {
        backgroundColor: "#fecdd3",
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingVertical: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    text6: {
        color: "#fc3850",
        fontFamily: "Inter-Regular"
    },
    packsDeRaoMidaPedigreeWrapper: {
        height: 30,
        alignItems: "center"
    },
    packsDeRao: {
        color: "#3d3d3d",
        flex: 1,
        alignSelf: "stretch"
    },
    tag4: {
        backgroundColor: "#e6e6e6",
        paddingVertical: 2,
        borderRadius: 4
    },
    senior: {
        color: "#3d3d3d",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 10
    },
    frameParent16: {
        gap: 4,
        alignItems: "center",
        alignSelf: "stretch"
    },
    parent: {
        alignItems: "center",
        justifyContent: "center"
    },
    starrating: {
        alignItems: "flex-start"
    },
    maskGroupIcon: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    text16: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        textAlign: "left",
        color: "#000",
        overflow: "hidden",
        letterSpacing: -0.1
    },
    tag10: {
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: "#fc8a38"
    },
    g3: {
        color: "#fffff2",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 10
    },
    productsectionleftChild: {
        height: 179.5,
        alignSelf: "stretch",
        alignItems: "flex-start",
        overflow: "hidden",
        backgroundColor: "#fff"
    },
    tag16: {
        display: "none",
        backgroundColor: "#f5d6ff",
        paddingVertical: 2,
        borderRadius: 4
    },
    tagWrapper: {
        flexDirection: "row",
        zIndex: 1,
        alignItems: "center"
    },
    tag25: {
        backgroundColor: "#808080",
        paddingVertical: 2,
        borderRadius: 4
    },
    feedDeProdutosInner: {
        height: 68,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: 32,
        borderStyle: "solid",
        borderColor: "#ccc",
        zIndex: 2,
        paddingVertical: 0,
        alignSelf: "stretch",
        alignItems: "flex-start"
    },
    minhaContaParent: {
        justifyContent: "space-between",
        gap: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    minhaConta: {
        alignItems: "center"
    },
    homePageIcon: {
        width: 30,
        height: 30
    },
    inicio: {
        color: "#000",
        alignSelf: "center",
        fontFamily: "Inter-Regular"
    },
    ellipseIcon: {
        height: 36,
        width: 37
    },
    feedDeProdutosChild: {
        width: 54,
        height: 54,
        top: 676,
        left: 317,
        zIndex: 3,
        position: "absolute"
    }
});

export default FeedDeProdutos;
