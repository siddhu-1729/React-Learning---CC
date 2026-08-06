import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProjectSetup from "./pages/ProjectSetup";
import ComponentsPage from "./pages/ComponentsPage";
import PropsPage from "./pages/PropsPage";
import StatePage from "./pages/StatePage";
import HooksPage from "./pages/HooksPage";

import NameChangerPage from "./pages/NameChangerPage";
import CounterPage from "./pages/CounterPage";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import ContextAPIPage from "./pages/ContextAPIPage";


import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project-setup" element={<ProjectSetup />} />

        <Route path="/components" element={<ComponentsPage />} />

        <Route path="/props" element={<PropsPage />} />

        <Route path="/state" element={<StatePage />} />

        <Route path="/hooks" element={<HooksPage />} />

     
        <Route path="/state" element={<StatePage />} />

<Route
  path="/state/name-changer"
  element={<NameChangerPage />}
/>

<Route
  path="/state/counter"
  element={<CounterPage />}
/>
<Route path="/hooks" element={<HooksPage />} />

<Route path="/hooks/useState" element={<UseStatePage />} />


<Route path="/hooks/welcome" element={<WelcomePage />} />

<Route path="/hooks/useEffect" element={<UseEffectPage />} />

<Route path="/hooks/context-api" element={<ContextAPIPage />} />


      </Routes>
    </div>
  );
}

export default App;