import { View, Text, Image, StyleSheet } from "react-native";

type CardProps = {
  name: string;
  role: string;
  image: string;
};

export default function Card({ name, role, image }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,

    // sombra
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  role: {
    color: "#666",
    fontSize: 13,
  },
});
