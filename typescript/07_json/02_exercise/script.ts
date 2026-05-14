function addItem(text: string): void {
  const list = document.getElementById("list") as HTMLUListElement;
  const li: HTMLLIElement = document.createElement("li");

  li.textContent = text;
  list.appendChild(li);
}

const jsonData: string = `{
  "store": "サンプルショップ",
  "products": [
    { "name": "りんご",   "price": 150, "inStock": true  },
    { "name": "バナナ",   "price": 90,  "inStock": true  },
    { "name": "いちご",   "price": 400, "inStock": false },
    { "name": "メロン",   "price": 800, "inStock": true  }
  ]
}`;

/**
 * =============================================
 * ここに型定義を書いてください
 *
 * 例:
 * type Product = { ... }
 * =============================================
 */

type Product = {
  store: string;
  products: {
    name: string,
    price: number,
    inStock: boolean,
  }[]
}

function run(): void {
  const list = document.getElementById("list") as HTMLUListElement;
  list.innerHTML = "";

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * 要件:
   * - JSON.parse の結果に型を付ける
   * - products をループする
   * - 表示形式:
   *   ○○: ○○円（在庫:あり）
   *   ○○: ○○円（在庫なし）
   * =============================================
   */

  // 型チェック
  // data.products[0].price = "100";

  const shop: Product = JSON.parse(jsonData)
  console.log(shop)
  for (const item of shop.products) {
    const result = String(item.name) + ": " + item.price + "円（在庫:" + (Boolean(item.inStock) ? "あり" : "なし") + "）"
    console.log(result)
    addItem(result)
  }
}

(window as any).run = run;