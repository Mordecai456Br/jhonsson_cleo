
import * as React from "react";
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from "react-native";

const FeedDeProdutos = () => {

    return (
        <View style={styles.feedDeProdutos}>
            <View style={styles.frameParent}>
                <View style={[styles.frameChild, styles.frameChildFlexBox]} />
                <View style={styles.jhonssonCleoParent}>
                    <Text style={styles.jhonssonCleo}>{`Jhonsson & Cleo`}</Text>
                    <Image style={styles.geminiGeneratedImage59ijhv5Icon} resizeMode="cover" />
                    <View style={styles.frameWrapper}>
                        <View style={[styles.searchParent, styles.searchParentBorder]}>
                            <Image style={styles.searchIcon} resizeMode="cover" />
                            <Text style={[styles.oQueSeu, styles.raesTypo]}>O que seu pet precisa?</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={[styles.localizationParent, styles.feedLayout]} horizontal={true} contentContainerStyle={styles.frameContainer3Content}>
                    <View style={[styles.localization, styles.localizationLayout]}>
                        <Image style={styles.searchIcon} resizeMode="cover" />
                        <Image style={styles.chevronDownIcon} resizeMode="cover" />
                    </View>
                    <View style={[styles.localization2, styles.localizationSpaceBlock1]}>
                        <Text style={[styles.promo, styles.promoTypo]}>Promo</Text>
                    </View>
                    <View style={[styles.localization3, styles.localizationSpaceBlock1]}>
                        <Text style={[styles.promo, styles.promoTypo]}>🔥 Hits</Text>
                    </View>
                    <View style={styles.localizationSpaceBlock}>
                        <Text style={[styles.raes, styles.raesTypo]}>Rações</Text>
                    </View>
                    <View style={[styles.localization5, styles.localizationSpaceBlock]}>
                        <Text style={[styles.raes, styles.raesTypo]}>Sachês</Text>
                    </View>
                    <View style={[styles.localization5, styles.localizationSpaceBlock]}>
                        <Text style={[styles.raes, styles.raesTypo]}>Acessórios</Text>
                    </View>
                    <View style={[styles.localization7, styles.localizationLayout]}>
                        <Text style={[styles.raes, styles.raesTypo]}>Brinquedos</Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={[styles.feed, styles.feedLayout]} contentContainerStyle={styles.feedContainerContent}>
                <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                    <ImageBackground style={[styles.cachorrosAudoramEssesParent, styles.frameSpaceBlock]} resizeMode="cover">
                        <Text style={[styles.cachorrosAudoramEsses, styles.cachorrosAudoramEssesTypo]}>cachorros audoram esses:</Text>
                        <View style={styles.frameContainer}>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Rações</Text>
                            </View>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Higiene e {'\n'}Limpeza</Text>
                            </View>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Acessórios</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={[styles.cachorrosAudoramEssesParent, styles.frameSpaceBlock]} resizeMode="cover">
                        <Text style={[styles.miauravilhososParaGatos, styles.cachorrosAudoramEssesTypo]}>miauravilhosos para gatos:</Text>
                        <View style={styles.frameContainer}>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Rações</Text>
                            </View>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Caixa de areia e {'\n'}Limpeza</Text>
                            </View>
                            <View style={[styles.frameView, styles.starsSpaceBlock]}>
                                <Image style={styles.frameItem} resizeMode="cover" />
                                <Text style={[styles.raes2, styles.raes2Clr]}>Acessórios</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <Text style={[styles.cachorrosAudoramEsses, styles.cachorrosAudoramEssesTypo]}>Recomendado</Text>
                </View>
                <ScrollView style={[styles.products, styles.feedLayout]} contentContainerStyle={styles.productsContainerContent}>
                    <View style={[styles.productsectionleft, styles.frameGroupSpaceBlock]}>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.raoMidaPedigreeSachCarWrapper, styles.raoWrapperPosition]}>
                                        <Text style={styles.raoMidaPedigree} numberOfLines={2}>                             Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>130 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>3.9</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={styles.textTypo}>
                                            <Text style={styles.textLayout}>3,</Text>
                                            <Text style={styles.rLayout}>60</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-8%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.packsDeRaoMidaPedigreeWrapper, styles.raoWrapperPosition]}>
                                        <Text style={[styles.packsDeRao, styles.vendidosTypo]} numberOfLines={2}>                                   Packs de Ração Úmida Pedigree para Cães Adultos Sênior 7+ Anos, Sachê Carne ao Molho, 36 Sachês de 100 g</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag4, styles.tagFlexBox]}>
                                            <Text style={[styles.senior, styles.gTypo]}>Senior</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>21 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>4.7 (9)</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={styles.textTypo}>
                                            <Text style={styles.textLayout}>106,</Text>
                                            <Text style={styles.rLayout}>92</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-14%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.raoMidaPedigreeSachCarWrapper, styles.raoWrapperPosition]}>
                                        <Text style={styles.raoMidaPedigree} numberOfLines={2}>                                  Laser Musket - 100 de dano e 1 round</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>One Shot</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent16, styles.parentLayout]}>
                                    <View style={[styles.parent, styles.starsFlexBox]}>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>2k+</Text>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>vendido(s)</Text>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                    <View style={[styles.starrating, styles.starsFlexBox]}>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>4.6 (445)</Text>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <View style={styles.rParent}>
                                            <Text style={[styles.text16, styles.textLayout]}>16.000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-10%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.raoMidaPedigreeSachCarWrapper, styles.raoWrapperPosition]}>
                                        <Text style={styles.raoMidaPedigree} numberOfLines={2}>                               M4 - 26 rounds 20 damage precisão moderada</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag10, styles.tagFlexBox]}>
                                            <Text style={[styles.g3, styles.gTypo]}>🔥 Hits</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent16, styles.parentLayout]}>
                                    <View style={[styles.parent, styles.starsFlexBox]}>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>14k+</Text>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>vendido(s)</Text>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                    <View style={[styles.starrating, styles.starsFlexBox]}>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>4.9 (1129)</Text>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <View style={styles.rParent}>
                                            <Text style={[styles.text16, styles.textLayout]}>4.300</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-8%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.packsDeRaoMidaPedigreeWrapper, styles.raoWrapperPosition]}>
                                        <Text style={[styles.packsDeRao, styles.vendidosTypo]} numberOfLines={2}>                                   Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>130 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>4.8</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={[styles.text16, styles.textLayout]}>3,60</Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-8%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productsectionleftChild} />
                    </View>
                    <View style={[styles.productsectionleft, styles.frameGroupSpaceBlock]}>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.packsDeRaoMidaPedigreeWrapper, styles.raoWrapperPosition]}>
                                        <Text style={[styles.packsDeRao, styles.vendidosTypo]} numberOfLines={2}>                                   Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag16, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag10, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>🔥 Hits</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>280 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>4.2 (20)</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={styles.textTypo}>
                                            <Text style={styles.textLayout}>3,</Text>
                                            <Text style={styles.rLayout}>20</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.packsDeRaoMidaPedigreeWrapper, styles.raoWrapperPosition]}>
                                        <Text style={[styles.packsDeRao, styles.vendidosTypo]} numberOfLines={2}>                                   Pack Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos 100 g - 36 unidades</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>90 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>4.9</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={styles.textTypo}>
                                            <Text style={styles.textLayout}>95,</Text>
                                            <Text style={styles.rLayout}>42</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-24%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.packsDeRaoMidaPedigreeWrapper, styles.raoWrapperPosition]}>
                                        <Text style={[styles.packsDeRao, styles.vendidosTypo]} numberOfLines={2}>                                   Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag, styles.tagFlexBox]}>
                                            <Text style={[styles.g, styles.gTypo]}>100 G</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.frameFlexBox1}>
                                    <View style={[styles.frameWrapper3, styles.frameSpaceBlock]}>
                                        <View style={[styles.vendidosParent, styles.parentLayout]}>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>130 vendido(s)</Text>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                            <View style={[styles.stars, styles.starsFlexBox]}>
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                                <Image style={styles.iconLayout} resizeMode="cover" />
                                            </View>
                                            <Text style={[styles.vendidos, styles.vendidosTypo]}>4.8</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <Text style={[styles.text16, styles.textLayout]}>3,60</Text>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-8%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.raoMidaPedigreeSachCarWrapper, styles.raoWrapperPosition]}>
                                        <Text style={styles.raoMidaPedigree} numberOfLines={2}>             Ballist Fist double barrel 10 rounds</Text>
                                    </View>
                                    <View style={[styles.tagWrapper, styles.tagPosition]}>
                                        <View style={[styles.tag25, styles.tagFlexBox]}>
                                            <Text style={[styles.g3, styles.gTypo]}>Hand</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent16, styles.parentLayout]}>
                                    <View style={[styles.parent, styles.starsFlexBox]}>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>1.4k+</Text>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>vendido(s)</Text>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                    <View style={[styles.starrating, styles.starsFlexBox]}>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>4.6 (561)</Text>
                                </View>
                                <View style={styles.frameFlexBox}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <View style={styles.rParent}>
                                            <Text style={[styles.text16, styles.textLayout]}>8.500</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productcard}>
                            <Image style={styles.imageIcon} resizeMode="cover" />
                            <View style={styles.frameParent8}>
                                <View style={[styles.frameParent9, styles.frameParentCommon]}>
                                    <View style={[styles.raoMidaPedigreeSachCarWrapper, styles.raoWrapperPosition]}>
                                        <Text style={styles.raoMidaPedigree} numberOfLines={2}>                              Ak-47 - 32 rounds 18 damage precisão média</Text>
                                    </View>
                                    <View style={[styles.tagParent, styles.tagPosition]}>
                                        <View style={[styles.tag10, styles.tagFlexBox]}>
                                            <Text style={[styles.g3, styles.gTypo]}>🔥 Hits</Text>
                                        </View>
                                        <View style={[styles.tag2, styles.tagFlexBox]}>
                                            <Text style={[styles.promo2, styles.gTypo]}>Promo</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.frameParent16, styles.parentLayout]}>
                                    <View style={[styles.parent, styles.starsFlexBox]}>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>2k+</Text>
                                        <Text style={[styles.vendidos, styles.vendidosTypo]}>vendido(s)</Text>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>{`| `}</Text>
                                    <View style={[styles.starrating, styles.starsFlexBox]}>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                        <View style={styles.iconLayout}>
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                            <Image style={[styles.maskGroupIcon, styles.iconLayout]} resizeMode="cover" />
                                        </View>
                                    </View>
                                    <Text style={[styles.vendidos, styles.vendidosTypo]}>4.6 (445)</Text>
                                </View>
                                <View style={[styles.frameParent10, styles.frameFlexBox]}>
                                    <View style={styles.rParent}>
                                        <Text style={[styles.r, styles.textTypo]}>R$</Text>
                                        <View style={styles.rParent}>
                                            <Text style={[styles.text16, styles.textLayout]}>3.500</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag3}>
                                        <Text style={[styles.text6, styles.gTypo]}>-10%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
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
