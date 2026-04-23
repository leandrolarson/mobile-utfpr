import { useState, useCallback } from "react";
import { View, RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScrollableProps = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
  onRefresh?: () => Promise<void>;
};

export default function Scrollable({
  children,
  padding = 20,
  gap = 0,
  onRefresh,
}: ScrollableProps) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshWrapper = useCallback(async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  }, [onRefresh]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshWrapper}
            />
          ) : undefined
        }
      >
        <View style={[{ padding: padding, gap: gap }]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
