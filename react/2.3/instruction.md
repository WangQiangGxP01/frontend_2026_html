# 🧪 Challenge
以下の手順に従って実装してください：
---

## ■ Part 1

### 1. state の初期化
- `pads.js` から取得した配列を初期値として、state を定義する

### 2. 配列の描画
- state の配列を `map` でループし、それぞれを `<button>` として表示する

### 3. darkMode の適用
- `index.tsx` に `darkMode` が定義されている
- 三項演算子（ternary）を使って、ボタンの背景色を切り替える

```js
darkMode ? "#222222" : "#cccccc"
```

# Part 2
---

### 1. コンポーネント作成
- 新しいファイル `Pad.jsx` を作成する
- `Pad` というコンポーネントを定義する
- 既存の `<button>` を `<Pad />` に置き換える

### 2. props の受け渡し
- `padsData` の各オブジェクトから `color` を取得する
- `Pad` コンポーネントに `color` を props として渡す
- Pad コンポーネント内で、button に inline style を設定する
- backgroundColor に color を適用する

### 3.CSS の調整
- `styles.css` のコメントアウトを解除し、重複しているコードを削除する
- `pad.on` が true の場合、`className="on"` を付与する

---
# Part 3
### 1.useState導入
- ボタンをクリックすると、「on」のときは明るく、「off」のときは暗く表示されるようにする  
- ボタンの「on / off」を制御する state を作成する

---
# Part 4
### 1. toggle 関数の作成

- `toggle()` 関数を作成する  
- クリック時に `"clicked!"` をコンソールに出力する  
- idを確認するため、クリックされたボタンの id をコンソールに出力するように修正する

### 2. state の更新
- `setPads` を呼び出す  
- 前の state（`prevPads`）を取得する  
- `map` を使って配列をループする  
- 各要素について、以下の条件で処理する：
```
item.id === id の場合
    → on の値を反転した新しいオブジェクトを返す  

それ以外の場合  
    → そのままの `item` を返す  
```