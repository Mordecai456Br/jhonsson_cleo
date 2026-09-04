import FeedDeProdutos from "@/src/screens/HomeScreen";
import { Link } from "expo-router";
import {View} from "react-native";

export default function Home() {
  return (
      <View>
      <Link href={{ pathname:"/(tabs)/account/[id]",
                    params: {id: "begs"}}}>Minha conta</Link>

      <FeedDeProdutos />
      </View>
  );
}
