import { HashRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import Home from "./components/Home/Home";
import {Logo} from "./styled"
import List from "./components/List/List";
import AddToList from "./components/AddToList/AddToList";
// import NoResult from "./common/NoResult";
// import List from "./components/List";
// import AddToList from "./components/AddToList";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationBar />
      {/* <ThemeProvider theme={lightMode === "yellow" ? yellowTheme :
           orange ? orange :
           red ? red :
           violet ? violet :
           lightMode}></ThemeProvider> */}
      <Logo>BLOOD PRESSURE PANEL</Logo>
      {/* <List/>
      <AddToList></AddToList> */}
     
        <Routes>
          {/* <Route
            path="*"
            element={
              <NoResult
                error404={<h1>404  </h1>}
                title={`Oops! This page doesn't exist! Please go back to Main Page :)`}
              />
            }
          /> */}
          {/* <Route path="/" element={<Navigate to="movies" />} />
          <Route path="/movies" element={<Navigate to="1" />} />
          <Route path="/people" element={<Navigate to="1" />} /> */}
           <Route path="/" element={<Home/>}/>
           <Route path="/test" element={<><List/><AddToList/></>}/>
          {/* <Route path="/movies/:page" element={<MovieList />} />
          <Route path="/people/:page" element={<PersonList />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/personDetails/:id" element={<PersonDetails />} />
          <Route path="/search" element={<SearchResults />} /> */}
        </Routes>
      </nav>
    </HashRouter>
  );
}

export default App;

