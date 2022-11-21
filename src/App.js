import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import Find_a_scheme from "./pages/Find_a_scheme";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Find_a_scheme></Find_a_scheme>
    </div>
  );
}

export default App;
