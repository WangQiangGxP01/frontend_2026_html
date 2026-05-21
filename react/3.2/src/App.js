import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

//最低限三つの画面を作って、一つは子ルートとして扱う

const pageTable = [
  ...("12345".split("").map(i => ({ url: `/page_${i}`, title: `Page ${i}`, content: `YOU ARE IN PAGE:${i}` }))),
]
const nestpageTable = [
  ...("12345".split("").map(i => ({ url: `${i}`, title: `NestPage ${i}`, content: `YOU ARE IN NESTPAGE:${i}` }))),
]



const NestPageLayout = () => {
  return <div style={{ border: "1px solid green", padding: "10px" }}>
    <h1>YOU ARE IN NESTPAGE LAYOUT</h1>
    <nav>
      {nestpageTable.map(item => <Link to={item.url} style={{ border: "1px solid black", margin: "10px" }}>{item.title}</Link>)}
    </nav>
    <Outlet></Outlet>
  </div>
}

//React Routeを作成する (Nest Route込み)
export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: "10px" }}>
        {pageTable.map(item => <Link to={item.url} style={{ border: "1px solid black", margin: "10px" }}>{item.title}</Link>)}
        <Link to="/nestpage" style={{ border: "1px solid black", margin: "10px" }}>nestpage</Link>
      </nav>
      <nav style={{ margin: "10px" }}>
        {nestpageTable.map(item => <Link to={`/nestpage/${item.url}`} style={{ border: "1px solid black", margin: "10px" }}>{item.title}</Link>)}
      </nav>
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <Routes>
          {pageTable.map(item => <Route path={item.url} element={<h1>{item.content}</h1>}></Route>)}
          <Route path="/nestpage" element={<NestPageLayout />}>
            {nestpageTable.map(item => <Route path={item.url} element={<h2>{item.content}</h2>}></Route>)}
          </Route>
        </Routes>
      </div>


    </BrowserRouter>
  );
}
