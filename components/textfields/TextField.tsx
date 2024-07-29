import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
  secureTextEntry?: boolean;
  placeholder?: string;
};

const TextField = ({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  placeholder = "",
}: TextFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const KeyboardAwareTextInput = ({
  label,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  placeholder,
}: TextFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextField
            label={label}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 80,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  label: {
    width: "100%",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default KeyboardAwareTextInput;
