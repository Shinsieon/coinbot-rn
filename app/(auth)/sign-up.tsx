import { Pressable, Text, View } from "react-native";
import commonStyles from "../styles";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import KeyboardAwareTextInput from "@/components/textfields/TextField";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };
  useEffect(() => {
    validatePasswords();
  }, [password, confirmPassword]);

  const validatePasswords = () => {
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  // const handleSignup = async () => {
  //   try {
  //     const userCredential = await auth.createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     const user = userCredential.user;
  //     await db.collection("users").doc(user.uid).set({
  //       email: user.email,
  //       createdAt: new Date(),
  //     });
  //     navigation.navigate("Home");
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };
  return (
    <View style={commonStyles.continer}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
        Sign Up!
      </Text>
      <KeyboardAwareTextInput
        label="email"
        value={email}
        onChangeText={(text: string) => {
          setEmail(text);
          validateEmail(text);
        }}
        keyboardType="email-address"
        placeholder="type your email"
      />
      {emailError ? (
        <Text style={commonStyles.errorText}>{emailError}</Text>
      ) : null}
      <KeyboardAwareTextInput
        label="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="type your email"
      />
      <KeyboardAwareTextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        placeholder="Re-type your password"
      />
      {passwordError ? (
        <Text style={commonStyles.errorText}>{passwordError}</Text>
      ) : null}
    </View>
  );
}
