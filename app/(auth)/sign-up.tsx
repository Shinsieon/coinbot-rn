import { Text, View } from "react-native";
import commonStyles from "../styles";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

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
    </View>
  );
}
