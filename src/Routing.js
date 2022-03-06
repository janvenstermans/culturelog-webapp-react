import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Experience from "./components/Experience";
import Experiences from "./components/Experiences";


const RouteNoMatch = () => {
  return (<div>
    Unknown Route 
    </div> );
}

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="experiences" element={<Experiences />}></Route>
          <Route path="experiences/:experienceId" element={<Experience />} />
        </Route>
        <Route path="*" element={<RouteNoMatch/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
