import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import './global.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Quicksand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "Quicksand-Light": require('../assets/fonts/Quicksand-Light.ttf')
  });

  // impede que o splash seja escondido automaticamente
  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch(() => {});
  }, []);

  // quando as fontes estiverem carregadas, oculta o splash
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  // manter a tela vazia até as fontes carregarem (e o splash continuar visível)
  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}