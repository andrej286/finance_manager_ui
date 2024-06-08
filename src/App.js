import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {ALL_PAGES, NAVIGATION_PAGES} from "./routes";
import i18n from "./i18n";
import {Suspense, useState} from "react";
import LocaleContext from "./LocaleContext";
import {FinanceNavbar} from "./components/finance-navbar";

function Loading() {
  return (
    <div>Loading...</div>
  )
}

function FinancialManager() {
  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language))

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  const location = useLocation();
  const showNavbar = NAVIGATION_PAGES.some(page => page.path === location.pathname);

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <>
          {showNavbar && <FinanceNavbar locale={locale} handleChange={handleChange}/>}
          <Routes>
            {ALL_PAGES.map((page) => <Route path={page.path} element={page.component} />)}
          </Routes>
        </>
      </Suspense>
    </LocaleContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <FinancialManager />
    </BrowserRouter>
  );
}

export default App;
