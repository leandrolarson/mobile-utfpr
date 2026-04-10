import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type FullScreenProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: string;
  gap?: string;
};

export default function FullScreenWrapper({
  children,
  center,
  padding,
  gap,
}: FullScreenProps) {
  return (
    <View
      style={[
        styles.screen,
        { justifyContent: center ? "flex-start" : "center" },
      ]}
    >
      {}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
