function showWeatherMessage() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #weather-select の value を取得する
   * - if / else if / else で天気に応じたメッセージを決める
   *   - 'sunny'  → 「今日は晴れです。お出かけ日和ですね！」
   *   - 'cloudy' → 「今日は曇りです。念のため傘を持っていきましょう。」
   *   - 'rainy'  → 「今日は雨です。傘を忘れずに！」
   *   - 'snowy'  → 「今日は雪です。暖かくして出かけましょう。」
   *   - それ以外 → 「天気情報が不明です。」
   * - #weather-message の textContent にメッセージを設定する
   *
   * ヒント:
   * - document.getElementById('weather-select').value で選択値を取得できる
   * =========================================
   */
  const weather = document.getElementById("weather-select").value
  const msg_dom = document.getElementById("weather-message")
  if (weather === "sunny") {
    msg_dom.innerHTML = "「今日は晴れです。お出かけ日和ですね！」"
    return
  } else if (weather === "cloudy") {
    msg_dom.innerHTML = "「今日は曇りです。念のため傘を持っていきましょう。」"
    return
  } else if (weather === "rainy") {
    msg_dom.innerHTML = "「今日は雨です。傘を忘れずに！」"
    return
  } else if (weather === "snowy") {
    msg_dom.innerHTML = "「今日は雪です。暖かくして出かけましょう。」"
    return
  } else {
    msg_dom.innerHTML = "「天気情報が不明です。」"
    return
  }
}
