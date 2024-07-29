import { SessionProvider } from "@/ctx";
import { Slot, Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
