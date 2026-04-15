import { View } from "react-native";

type FullscreenProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function Fullscreen({
  children,
  center = false,
  padding = 20,
  gap = 0,
}: FullscreenProps) {
  return (
    <View
      style={[
        {
          justifyContent: center ? "center" : "flex-start",
          alignItems: center ? "center" : "stretch",
          padding: padding,
          gap: gap,
        },
      ]}
    >
      {children}
    </View>
  );
}
