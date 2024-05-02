import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ALL_PAGES} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ALL_PAGES.map((page) => <Route path={page.path} element={page.component} />)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
