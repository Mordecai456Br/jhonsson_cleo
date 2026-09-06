import { Stack } from "expo-router";
import '@/global.css'
import {useFonts} from "expo-font";

export default function RootLayout() {
  const [ fontLoaded ] = useFonts({

    'inter-extralight': require('../../assets/fonts/static/Inter_18pt-ExtraLight.ttf'),
    'inter-light': require('../../assets/fonts/static/Inter_18pt-Light.ttf'),
    'inter-regular': require('../../assets/fonts/static/Inter_18pt-Regular.ttf'),
    'inter-medium': require('../../assets/fonts/static/Inter_18pt-Medium.ttf'),
    'inter-semibold': require('../../assets/fonts/static/Inter_18pt-SemiBold.ttf'),
    'inter-bold': require('../../assets/fonts/static/Inter_18pt-Bold.ttf'),
    'inter-extrabold': require('../../assets/fonts/static/Inter_18pt-ExtraBold.ttf')

  })

  return <Stack screenOptions={{headerShown: false}} />;
}
