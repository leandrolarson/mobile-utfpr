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

const ProductList = () => {
  const userName = "Leandro";

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.salute}>Welcome, {userName}! </Text>
        <Ionicons name="sparkles-outline" size={30} color={"orange"}></Ionicons>
      </View>

      {dataList.map((item, index) => (
        <View key={index} style={styles.itemCard}>
          <Text style={styles.itemName}>{item.name}</Text>

          <Text
            style={[styles.itemPrice, { color: item.onSale ? "red" : "green" }]}
          >
            {item.price}
          </Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
          {item.onSale && (
            <View style={styles.saleBadge}>
              <Ionicons name="pricetag" size={14} color="#e93333" />
              <Text style={styles.sale}>On Sale</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  greetingContainer: {
    flexDirection: "row",
    padding: 20,
  },
  salute: {
    fontSize: 26,
    fontWeight: "bold",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  itemCategory: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  itemCard: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: "orange",
  },
  sale: {},
  saleBadge: {},
});

export default ProductList;
