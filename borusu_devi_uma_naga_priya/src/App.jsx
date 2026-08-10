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
import ComponentCssPage from "./pages/CompoenetCssPage";
import TailwindPluginPage from "./pages/TailwindPluginPage";
import SubmitFormPage from "./pages/SubmitFormPage";
import AsyncAPIPage from "./pages/AsyncAPIPage";
import PayLoadsPage from "./pages/PayLoadsPage";
import ParamPage from "./pages/ParamPage";
import RequestBodyPage from "./pages/RequestBodyPage";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/project-setup"
          element={<ProjectSetup />}
        />

        <Route
          path="/components"
          element={<ComponentsPage />}
        />

        <Route
          path="/props"
          element={<PropsPage />}
        />

        <Route
          path="/state"
          element={<StatePage />}
        />

        <Route
          path="/state/name-changer"
          element={<NameChangerPage />}
        />

        <Route
          path="/state/counter"
          element={<CounterPage />}
        />

        <Route
          path="/hooks"
          element={<HooksPage />}
        />

        <Route
          path="/hooks/useState"
          element={<UseStatePage />}
        />

        <Route
          path="/hooks/welcome"
          element={<WelcomePage />}
        />

        <Route
          path="/hooks/useEffect"
          element={<UseEffectPage />}
        />

        <Route
          path="/hooks/context-api"
          element={<ContextAPIPage />}
        />

        <Route
          path="/component-with-css"
          element={<ComponentCssPage />}
        />

        <Route
          path="/TailwindPlugin"
          element={<TailwindPluginPage />}
        />

        <Route
          path="/SubmitForm"
          element={<SubmitFormPage />}
        />

        <Route
          path="/AsyncAPI"
          element={<AsyncAPIPage />}
        />

        <Route
          path="/payloads"
          element={<PayLoadsPage />}
        />

        <Route
          path="/payloads/params"
          element={<ParamPage />}
        />

        <Route
          path="/payloads/requestbody"
          element={<RequestBodyPage />}
        />
      </Routes>

  
    </>
  );
}

export default App;