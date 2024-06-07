import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import SecondPage from "./component/secondPage/SecondPage";
import TiredPage from "./component/tiredPage/TiredPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <SecondPage />
      <TiredPage />
    </div>
  );
}

export default App;
