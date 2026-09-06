import FeedDeProdutos from "@/src/screens/HomeScreen";
import { Link } from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
      <SafeAreaView className="flex-1">
      <Link href={{ pathname:"/(tabs)/account/[id]",
                    params: {id: "begs"}}}>Minha conta</Link>

      <FeedDeProdutos />
      </SafeAreaView>
  );
}
