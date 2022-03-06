import {
  Link, Outlet
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div>
        <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>

          <Link to="/experiences">Experiences</Link>
        </nav>
      </div>
      <div className="App">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
