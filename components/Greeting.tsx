import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Greeting = () => {
  const userName = "Leandro";
  return (
    <View style={styles.container}>
      <Text style={styles.salute}>Welcome, {userName}! </Text>
      <View style={styles.iconContainer}>
        <Ionicons name="sparkles-outline" size={30} color={"orange"}></Ionicons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  salute: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconContainer: {},
});

export default Greeting;
