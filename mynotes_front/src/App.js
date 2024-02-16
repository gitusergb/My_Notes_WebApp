import './App.css';
import  {Navbar} from "./components/Navbar";
import {MainRoutes} from "./pages/MainRoutes";
function App() {
  return (
    <div className="App">
      <div id='inner'>
            {/* <h2>My Notes App</h2> */}
            <Navbar />
            <MainRoutes />
      </div>

    </div>
  );
}
export default App;