import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;