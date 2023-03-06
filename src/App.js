import {Route, Routes} from "react-router-dom";

import './App.css';
import './components/whiteStyle/whiteStyle.css'
import {HeaderLayout} from "./Layout";
import {AboutProj, Contacts, Footer, Home, Portfolio} from "./components";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path={'/'} element={<HeaderLayout/>}>
            <Route index element={<Home/>} />
            <Route path={'portfolio'} element={<Portfolio/>}/>
            <Route path={'portfolio/:id'} element={<AboutProj/>}/>
            <Route path={'contacts'} element={<Contacts/>}/>
        </Route>
    </Routes>
        <Footer/>
    </div>
  );
}

export default App;
