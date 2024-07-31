import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Component, useRef, useState } from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import { useSession } from "@/ctx";
import Button from "@/components/buttons/Button";
import { StatusBar } from "expo-status-bar";
import KeyboardAwareTextInput from "@/components/textfields/TextField";
import Spacer from "@/components/Spacer";
import commonStyles from "../styles";
export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useSession();
  return (
    <View style={commonStyles.continer}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
        Sign In!
      </Text>
      <KeyboardAwareTextInput
        label="email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="type your email"
      />
      <KeyboardAwareTextInput
        label="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="type your email"
      />
      <Link href="/(auth)/sign-up">I don't have accounts</Link>
      <Spacer height={20} />
      <Button label="LOGIN" onPressFunction={() => {}} />
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log(credential);
            // signed in
          } catch (e: any) {
            if (e.code === "ERR_REQUEST_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 44,
  },
});
