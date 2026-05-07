import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function VisitorScreen() {
  const [name, setName] = useState("");
  const [accessAuthorized, setAccessAuthorized] = useState(false);

  const handleReset = () => {
    setName("");
    setAccessAuthorized(false);
  };

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text></Text>
        <Text style={styles.headerText}>WELCOME TO COMIC SHOP CENTER</Text>
      </View>

      {/* CORPO DA TELA */}
      <View style={styles.content}>
        <Text style={styles.title}>VISITOR{"\n"}IDENTIFICATION</Text>

        <TextInput
          style={styles.input}
          placeholder="Type your full name..."
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Envolvemos o botão em uma View para dar a margem e largura */}
        <View style={styles.primaryButtonWrapper}>
          <Button
            title="REQUEST ACCESS"
            color="#ED1D24"
            onPress={() => setAccessAuthorized(true)}
          />
        </View>

        {/* View para o botão de reset */}
        <View style={styles.secondaryButtonWrapper}>
          <Button title="RESET" color="#34495E" onPress={handleReset} />
        </View>

        {accessAuthorized && (
          <Text style={styles.successText}>
            Access granted! Welcome, {name}.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#ED1D24",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 15,
    // fontWeight: "bold", <-- Comentado para driblar o bug do Android
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    color: "#000000",
    textAlign: "center",
    marginBottom: 40,
    // fontWeight: "bold", <-- Comentado para driblar o bug do Android
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#4A90E2",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 30,
  },
  primaryButtonWrapper: {
    width: "100%",
    minHeight: 45, // <-- Forçando uma altura mínima para o botão não sumir
    justifyContent: "center",
    marginBottom: 20,
  },
  secondaryButtonWrapper: {
    width: "50%",
    minHeight: 45, // <-- Forçando uma altura mínima
    justifyContent: "center",
  },
  successText: {
    marginTop: 30,
    fontSize: 16,
    color: "#27AE60",
    // fontWeight: "bold",
  },
});
