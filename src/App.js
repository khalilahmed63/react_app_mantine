import './App.css';
import Main from './components/VariantA/Layouts/Main';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar SiteName={'Khalil'} About={'myAbout'} mode={mode} togglemode={togglemode} togglemode2={togglemode2} /> */}
        <Main>
          <Routes>
            asdfasdfasfgasdfasdf
            {/* <Route path="/" element={<Textbox mode={mode} showalert={showalert} />} /> */}
            {/* <Route path="About" element={<About mode={mode} />} /> */}
          </Routes>
        </Main>
      </BrowserRouter>

    </>
  );
}

export default App;
