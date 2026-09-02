import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { Image, Scale, Tag, Star, Percent } from "lucide-react-native";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePlaceholder: string;
  weight?: string;
  isPromo?: boolean;
  soldCount: number;
  stars: number;
  discountPercentage?: number;
}

const MOCK_PRODUCTS: Product[] = [
  { 
    id: "1", 
    name: "Ração Premium para Gatos", 
    description: "Ração sabor salmão para gatos adultos...",
    price: 150.0,
    imagePlaceholder: "IMG_RACAO",
    weight: "10kg",
    isPromo: true,
    soldCount: 1205,
    stars: 4.8,
    discountPercentage: 15
  },
  { 
    id: "2", 
    name: "Varinha com Pena", 
    description: "Brinquedo interativo para gatos...",
    price: 25.5,
    imagePlaceholder: "IMG_VARINHA",
    soldCount: 340,
    stars: 4.5
  },
  { 
    id: "3", 
    name: "Arranhador de Papelão", 
    description: "Arranhador ecológico e durável...",
    price: 80.0,
    imagePlaceholder: "IMG_ARRANHADOR",
    isPromo: true,
    soldCount: 89,
    stars: 4.9,
    discountPercentage: 10
  },
  { 
    id: "4", 
    name: "Coleira com Guizo", 
    description: "Coleira ajustável vermelha...",
    price: 15.0,
    imagePlaceholder: "IMG_COLEIRA",
    soldCount: 500,
    stars: 4.2
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <View style={{ marginBottom: 20 }}>
      {/* Imagem */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image size={24} color="black" />
        <Text style={{ marginLeft: 8 }}>{product.imagePlaceholder}</Text>
      </View>

      {/* Span 1: Peso (se tiver) */}
      {product.weight && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Scale size={16} color="gray" />
          <Text style={{ marginLeft: 4 }}>{product.weight}</Text>
        </View>
      )}

      {/* Span 2: Tag de Promoção (se for promo) */}
      {product.isPromo && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Tag size={16} color="red" />
          <Text style={{ marginLeft: 4, color: "red" }}>PROMOÇÃO</Text>
        </View>
      )}

      {/* Título */}
      <Text style={{ marginTop: 8, fontWeight: "bold" }}>{product.name}</Text>

      {/* Descrição Reduzida */}
      <Text>{product.description}</Text>

      {/* Número de vendidos */}
      <Text>{product.soldCount} vendidos</Text>

      {/* Estrelas */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
        <Star size={16} color="gold" fill="gold" />
        <Text style={{ marginLeft: 4 }}>{product.stars}</Text>
      </View>

      {/* Preço */}
      <Text style={{ marginTop: 4, fontWeight: "bold" }}>R$ {product.price.toFixed(2)}</Text>

      {/* Span 3: Porcentagem de desconto */}
      {product.isPromo && product.discountPercentage && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Percent size={16} color="green" />
          <Text style={{ marginLeft: 4, color: "green" }}>{product.discountPercentage}% OFF</Text>
        </View>
      )}

      <Button title="Comprar" onPress={() => console.log("Comprado:", product.name)} />
    </View>
  );
}

export function ProductList() {
  return (
    <FlatList
      data={MOCK_PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
