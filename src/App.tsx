import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Banner } from "./components/Banner";
import DriverList from "./components/DriverList";
import { NavMenu } from "./components/NavMenu";
import { HoldingPage } from "./components/HoldingPage";

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <ul className="app-layout">
          <li>
            <NavMenu />
          </li>
          <li>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<DriverList />} />
                  <Route path="drivers" element={<HoldingPage />} />
                  <Route path="vehicles" element={<HoldingPage />} />
                  <Route path="about" element={<HoldingPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
