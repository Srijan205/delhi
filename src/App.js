import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import Find_a_scheme from "./pages/Find_a_scheme";
import Example from "./components/dropdown";
import Essential_docs from "./pages/Essential_docs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <Find_a_scheme></Find_a_scheme> */}
      <Essential_docs></Essential_docs>
      
    </div>
  );
}

export default App;
