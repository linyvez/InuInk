import allHiragana from "../data/allHiragana.json";

export const parseCharacter = (character: string): Character | null => {
  const data = allHiragana.find((c) => c.charCode === character.codePointAt(0));
  if (!data) return null;

  const getId = (id: string) => {
    const match = id.match(/^(\d+)/);
    return match ? match[1] : id;
  };

  const medianGroups = new Map<string, number[][]>();

  data.medians.forEach((median) => {
    const id = median.id;
    const coords = median.value;

    const groupId = getId(id);

    if (!medianGroups.has(groupId)) {
      medianGroups.set(groupId, coords);
    } else {
      const group = medianGroups.get(groupId) ?? [];
      medianGroups.set(groupId, [...group, ...coords]);
    }
  });

  const sortedMedians = Array.from(medianGroups.keys()).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );
  const validMedians = sortedMedians.map((id) => {
    return {
      id: id,
      value: medianGroups.get(id)!,
    };
  });

  const char: Character = {
    char: character,
    numStrokes: validMedians.length,
    strokes: data.strokes,
    medians: validMedians,
  };

  return char;
};
