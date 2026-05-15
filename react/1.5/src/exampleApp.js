import "./styles.css";
import recipes from "./data";
import Recipe from "./components/Recipe";
import Header from "./components/Header";

export default function ExampleApp() {
  return (
    <div className="app-shell">
      <Header />
      <main className="container">
        <Recipe
          name={recipes[1].name}
          img={recipes[1].img}
          ingredients={recipes[1].ingredients}
          description={recipes[1].description}
        />
        <Recipe />
        <Recipe />
      </main>
    </div>
  );
}
