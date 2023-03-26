import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";


function App() {


  return (
    <div className="App">
      {/* <ThemeProvider theme={lightMode === "yellow" ? yellowTheme :
           orange ? orange :
           red ? red :
           violet ? violet :
           lightMode}></ThemeProvider> */}
      <h1>My blood pressure control panel</h1>
      <List/>
      <AddToList></AddToList>
    </div>
  );
}

export default App;
