import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function VisitorScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>WELCOME TO TOURIST CENTER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 0,
  },
  label: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
