import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  continer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
    width: "100%",
  },
  label: {
    width: "100%",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default commonStyles;
