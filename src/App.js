//importing components here, responsible for rendering apps main structure
import './App.css';
import Menuitems from './components/menuitems';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Functional Components - Menu Items</h1>
      <Menuitems dishName={"Calamari"} price={12.99} likes={5}/>
      <Menuitems dishName={"Tacos"} price={2.99} likes={57}/>
      <Menuitems dishName={"Fettuccini Alfredo"} price={15.99} likes={15}/>
      <Menuitems dishName={"Eggrolls"} price={99.00} likes={100}/>
    </div>
  );
}

export default App;
