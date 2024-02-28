import {Home} from "./pages/home";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import StartScreen from "./pages/start-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
