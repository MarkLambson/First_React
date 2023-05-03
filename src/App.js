import './App.css';
import MenuItems from './components/menuitems';

function App() {
  return (
    <div className="App">
      <h1>React Into - Menu Items</h1>
      <MenuItems dishName = {"Lasagana"} price = {20.00}>
    <p>It's great Italian food</p>
      </MenuItems>
      <MenuItems dishName = {"Pizza"} price = {25.00}>
    <p>It's great Italian food</p>
      </MenuItems>
      <MenuItems dishName = {"Sushi - Dragon Roll"} price = {15.00}>
    <p>May cause food illness if not properly handled</p>
      </MenuItems>
    </div>
  );
}

export default App;
