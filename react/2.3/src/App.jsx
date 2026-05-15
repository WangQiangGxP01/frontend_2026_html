import { useState } from "react";
import pads from "./pads";
import "./styles.css"

export default function App() {
  /**
    instruction.mdを従って、SoundPadチャレンジを完成しましょう！
  */

  const [padConfs, setPadConfs] = useState(pads)

  const padClick = (id) => {
    setPadConfs(padConfs.map(i => { if (i.id === id) { i.on = !i.on }; return i }))
  }

  return (
    <main>
      <div className="pad-container">
        {padConfs.map(conf => <button
          onClick={() => padClick(conf.id)}
          style={{
            backgroundColor: conf.color,
          }} className={conf.on ? "on" : ""}></button>)}
      </div>
    </main>
  );
}
