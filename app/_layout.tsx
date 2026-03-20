import { AuthProvider } from '@/contexts/authContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // O AuthProvider deve envolver o Stack (que contém todas as telas)
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Aqui ficam suas rotas como (auth), (main), etc */}
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register" />
      </Stack>
    </AuthProvider>
  );
}