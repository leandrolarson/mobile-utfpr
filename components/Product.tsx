import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dataList = [
  {
    name: "AMD Ryzen 7 7700",
    price: 1649.99,
    category: "Hardware",
    onSale: true,
  },
  {
    name: "Keyboard Redragon Finke",
    price: 469.99,
    category: "Peripheral",
    onSale: true,
  },
  {
    name: "GeForce RTX 5060",
    price: 2599.99,
    category: "Hardware",
    onSale: false,
  },
  {
    name: "Acer Nitro V15",
    price: 7499.99,
    category: "Notebook",
    onSale: false,
  },
];

const Product = () => {
  const userName = "";

  return (
    <View style={styles.container}>
      <Text style={styles.salute}>Welcome, {userName}! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  salute: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Product;
