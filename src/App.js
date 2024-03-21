import {Home} from "./pages/home";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import StartScreen from "./pages/start-screen";
import {GoalsScreen} from "./pages/goals-screen";
import {CostsScreen} from "./pages/costs-screen";
import {IncomesScreen} from "./pages/incomes-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/goals" element={<GoalsScreen/>}/>
        <Route path="/costs" element={<CostsScreen/>}/>
        <Route path="/incomes" element={<IncomesScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
