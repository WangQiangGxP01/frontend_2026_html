import "./styles.css";
import NavBar from "./components/Navbar";
import MainContent from "./components/MainContent";

export default function App() {
  return <div className="App">
    <NavBar title="My Favorate Foods App"></NavBar>
    <MainContent items={["fish", "sichuan cuisine", "pizza"]} ></MainContent>
  </div>;
}
