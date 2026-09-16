import FeedDeProdutos from "@/src/screens/HomeScreen";
import { Link } from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import FloatingAI from "@/src/components/FloatingAI";
const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
      <SafeAreaView className="flex-1">
          <FloatingAI />
      <FeedDeProdutos />
      </SafeAreaView>
  );
}
