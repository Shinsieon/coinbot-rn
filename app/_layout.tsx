import { SessionProvider } from "@/ctx";
import { Slot, Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen
          name="(app)"
          options={{
            //header 표시 안하기
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            //header 표시 안하기
            headerShown: false,
          }}
        />
      </Stack>
    </SessionProvider>
  );
}
