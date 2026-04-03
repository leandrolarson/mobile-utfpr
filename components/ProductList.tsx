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
     {dataList.map((item, index) => (
      <View key={index} style={styles.itemCard}>
        <View></View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      
       </View>
))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemPrice:{
    fontSize: 16,
    fontWeight: '600',
  },
  itemCategory:{
    fontSize: 16,
    fontWeight: '600',
  },
  itemCard:{
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: 'orange',
  }
});

export default Product;
