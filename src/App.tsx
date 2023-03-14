import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";


function App() {


  return (
    <div className="App">
      <h1>My blood pressure control panel</h1>
      <List/>
      <AddToList></AddToList>
    </div>
  );
}

export default App;
