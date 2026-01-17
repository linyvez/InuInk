import allHiragana from "../data/allHiragana.json";

const allChars = allHiragana.map((char) => String.fromCharCode(char.charCode));
const allCharsLength = allChars.length;

export const getRandomChar = () => {
  return allChars[Math.floor(Math.random() * allCharsLength)];
};
