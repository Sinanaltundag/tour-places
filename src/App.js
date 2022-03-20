import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import NavBar from "./components/navbar/Navbar";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App bg-info ">
      <NavBar />
      <Header />

      <Card cards={data} />
    </div>
  );
}

export default App;

// {/* <Card title={cardItem.title.toUpperCase()} imgSrc= {cardItem.image}  desc= {cardItem.desc}/> */}
