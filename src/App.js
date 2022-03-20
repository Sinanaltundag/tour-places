import './App.css';
import Header from './components/header/Header';
import Card from './components/cards/Card';
import { data } from './helper/data';


function App() {
  return (
    <div className="App bg-info ">
      <Header/>
      <div id="image-container" className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
{data.map((cardItem)=>{
  return (

      <Card title={cardItem.title.toUpperCase()} imgSrc= {cardItem.image}  desc= {cardItem.desc}/>
 
  )
})}
     </div>
    </div>
  );
}

export default App;
