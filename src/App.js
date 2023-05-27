import AddMovie from "./components/AddMovie";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Moviedetails from "./components/Moviedetails";
import Favourites from "./components/Favourites";
import Search from "./components/Search";
import EditMovie from "./components/EditMovie";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      < Route path="/" element={<Home/>}/>
      < Route path="/add" element={<AddMovie/>}/>
      <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
      <Route path="/fav" element={<Favourites/>}/>
      <Route path="/search/:searchword" element={<Search/>}/>
      <Route path="/edit/:id" element={<EditMovie/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
