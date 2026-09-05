import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { LoadingScreen } from "../components/LoadingScreen";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
      <SafeAreaView className="flex-1">
        <LoadingScreen />
    </SafeAreaView>
    );
}
