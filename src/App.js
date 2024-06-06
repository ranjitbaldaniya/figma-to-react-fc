import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
