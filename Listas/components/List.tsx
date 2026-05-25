import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { MOCK_DATA, Motorcycle } from "../mocks/mock-data";
import { formatToSectionList } from "../utils/formatToSectionList";

export default function List() {
  // Chamada direta da função de formatação
  const sectionsData = formatToSectionList(MOCK_DATA);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionsData}
        keyExtractor={(item: Motorcycle) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.model}</Text>
            <Text style={styles.itemSubtitle}>
              {item.brand} • {item.year}
            </Text>
          </View>
        )}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  listContent: {
    paddingBottom: 24,
  },
  headerContainer: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
});
