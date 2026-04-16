import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Fullscreen from "./components/screen-wrappers/Fullscreen";
import Login from "./components/Login";
import Scrollable from "./components/screen-wrappers/Scrollable";
import Card from "./components/Card";

export default function App() {
  const handleRefresh = async () => {
    console.log("Atualizando...");

    // simula requisição
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Atualizado!");
  };

  return (
    // <Fullscreen center={true} padding={0} gap={10}>
    //  <StatusBar style="auto" />
    //  <Login />
    // </Fullscreen>

    <Scrollable gap={25} padding={50} onRefresh={handleRefresh}>
      <Card
        name="Michael Scott"
        role="Regional Manager"
        image="https://i.pravatar.cc/100?img=1"
      />

      <Card
        name="Jim Halpert"
        role="Sales Representative"
        image="https://i.pravatar.cc/100?img=2"
      />

      <Card
        name="Pam Beesly"
        role="Receptionist"
        image="https://i.pravatar.cc/100?img=3"
      />

      <Card
        name="Dwight Schrute"
        role="Assistant to the Regional Manager"
        image="https://i.pravatar.cc/100?img=4"
      />

      <Card
        name="Michael Scott"
        role="Regional Manager"
        image="https://i.pravatar.cc/100?img=1"
      />

      <Card
        name="Jim Halpert"
        role="Sales Representative"
        image="https://i.pravatar.cc/100?img=2"
      />

      <Card
        name="Pam Beesly"
        role="Receptionist"
        image="https://i.pravatar.cc/100?img=3"
      />

      <Card
        name="Dwight Schrute"
        role="Assistant to the Regional Manager"
        image="https://i.pravatar.cc/100?img=4"
      />

      <Card
        name="Michael Scott"
        role="Regional Manager"
        image="https://i.pravatar.cc/100?img=1"
      />

      <Card
        name="Jim Halpert"
        role="Sales Representative"
        image="https://i.pravatar.cc/100?img=2"
      />

      <Card
        name="Pam Beesly"
        role="Receptionist"
        image="https://i.pravatar.cc/100?img=3"
      />

      <Card
        name="Dwight Schrute"
        role="Assistant to the Regional Manager"
        image="https://i.pravatar.cc/100?img=4"
      />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
