import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { LoadingScreen } from "../components/LoadingScreen";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return <LoadingScreen />;
}
