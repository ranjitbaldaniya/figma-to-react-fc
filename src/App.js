import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import SecondPage from "./component/secondPage/SecondPage";
import TiredPage from "./component/tiredPage/TiredPage";
import FourthPage from "./component/fourthPage/FourthPage";
import FifthPage from "./component/firftPage/FifthPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <SecondPage />
      <TiredPage />
      <FourthPage />
      <FifthPage />
    </div>
  );
}

export default App;
