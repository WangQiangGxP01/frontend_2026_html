import curryrice from "./images/curryrice.png";
import sushi from "./images/sushi.jpg";
import ramen from "./images/ramen.jpg";

const recipes = [
  {
    id: 1,
    name: "カレーライス",
    img: curryrice,
    ingredients: "玉ねぎ、にんじん、じゃがいも、牛肉、カレールー",
    description:
      "定番の家庭料理です。スパイスの香りとやわらかい具材が楽しめる、人気の高い一皿です。",
  },
  {
    id: 2,
    name: "寿司",
    img: sushi,
    ingredients: "酢飯、まぐろ、サーモン、海老、海苔",
    description:
      "新鮮な魚介と酢飯を組み合わせた日本を代表する料理です。見た目も美しく、特別感があります。",
  },
  {
    id: 3,
    name: "ラーメン",
    img: ramen,
    ingredients: "麺、スープ、チャーシュー、ネギ、卵",
    description:
      "コクのあるスープと麺の組み合わせが魅力です。トッピングによっていろいろな味を楽しめます。",
  },
];
export default recipes