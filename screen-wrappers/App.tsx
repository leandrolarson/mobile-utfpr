import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Fullscreen from "./components/screen-wrappers/Fullscreen";
import Login from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Fullscreen>
        <Login />
      </Fullscreen>
      <StatusBar style="auto" />*/}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
