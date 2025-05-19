import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Página no encontrada' }} />
        <Stack.Screen name="pages/help" options={{ title: 'Ayuda' }} />
        <Stack.Screen name="pages/Informe" options={{ title: 'Informe' }} />
        <Stack.Screen name="pages/production" options={{ title: 'Producción' }} />
        <Stack.Screen name="pages/Qrcamera" options={{ title: 'Escanear QR' }} />
        <Stack.Screen name="pages/explore" options={{ title: 'Explorar' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
