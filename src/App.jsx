import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomeCarousell from "./Carousell/HomeCarousell";

function App() {
  return (
    <div>
      <HomeCarousell />
      <NavigationBar />
    </div>
  );
}

export default App;
