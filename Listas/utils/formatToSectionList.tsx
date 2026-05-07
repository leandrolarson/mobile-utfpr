import { Motorcycle, SectionData } from "../types/motorcycle";

export function formatToSectionList(items: Motorcycle[]): SectionData[] {
  const grouped = items.reduce<Record<string, Motorcycle[]>>((acc, item) => {
    const category = item.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(item);

    return acc;
  }, {});

  return Object.entries(grouped).map(([category, data]) => ({
    title: category,
    data,
  }));
}
