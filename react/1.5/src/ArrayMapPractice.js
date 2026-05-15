/*
チャレンジ1：
数値の配列が与えられています。
各数値を2乗した新しい配列を作成してください。
*/
const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// ここにコードを書いてください
console.log(nums.map(x => x ** 2))
/*
チャレンジ2：
文字列の配列が与えられています。
それぞれの文字列の先頭文字を大文字にした新しい配列を作成してください。
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// ここにコードを書いてください
console.log(names.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()))
/*
チャレンジ3：
文字列の配列が与えられています。
各文字列をHTMLのような <p></p> タグで囲んだ新しい配列を作成してください。

例：
["Bulbasaur", "Charmander", "Squirtle"]
↓
["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// ここにコードを書いてください
console.log(pokemon.map(x => `<p>${x}</p>`))

//終わったら「5.7 Props⑤.md」に続く
