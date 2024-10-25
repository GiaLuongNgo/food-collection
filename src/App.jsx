import './App.css';
// import '../src/assets/scss/global.scss';
// import Container from "./components/Container";
import { FoodsCollectionContext } from "./contexts/FoodsCollectionContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      aaaaaaâa
      <FoodsCollectionContext>
        <HomePage />
      </FoodsCollectionContext>
    </div>
  );
}

export default App;
