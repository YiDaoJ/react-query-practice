import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CoffeeList } from "./components/CoffeeList";
import { Route, Routes } from "react-router-dom";
import { CoffeeItem } from "./components/CoffeItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoffeeList />} />
        <Route path="/coffee/:coffeeId" element={<CoffeeItem />} />
      </Routes>
    </div>
  );
}

export default App;
