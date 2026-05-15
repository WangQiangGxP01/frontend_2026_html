import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

//最低限三つの画面を作って、一つは子ルートとして扱う

const pageTable = [
  ...("12345".split("").map(i => ({ url: `/page_${i}`, title: `Page ${i}`, content: `YOU ARE IN PAGE:${i}` }))),
]
const nestpageTable = [
  ...("12345".split("").map(i => ({ url: `:${i}`, title: `Page ${i}`, content: `YOU ARE IN PAGE:${i}` }))),
]



const genPage = (content) => {
  return <div>
    <h1>content</h1>
    <Link to="/">back2home</Link>
  </div>
}

//React Routeを作成する (Nest Route込み)
export default function App() {
  return (
    <BrowserRouter>
      <nav>
        {pageTable.map(item => <Link to={item.url} style={{ border: "1px solid black", margin: "10px" }}>{item.title}</Link>)}
        <Link to="/nestpage" style={{ border: "1px solid black", margin: "10px" }}>nestpage</Link>
      </nav>
      <Routes>
        {pageTable.map(item => <Route path={item.url} element={<h1>{item.content}</h1>}></Route>)}
        <Route path="/nestpage" element={{}}></Route>
      </Routes>

    </BrowserRouter>
  );
}
