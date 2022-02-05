import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomeCarousell from "./Carousell/HomeCarousell";
import PolaroidPhoto from "./PolaroidPhoto/PolaroidPhoto";

function App() {
  return (
    <div>
      <HomeCarousell />
      <NavigationBar />
      <PolaroidPhoto />
      <PolaroidPhoto />
      <PolaroidPhoto />
    </div>
  );
}

export default App;
