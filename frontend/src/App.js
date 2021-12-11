import "./App.css";

import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
import Teachers from "./containers/teachers/Teachers";
function App() {
  return (
    <div className="App">
      <Drawer>
        <Routes>
          <Route path={"/students"} exact={true} element={<Students />} />
          <Route path={"/teachers"} exact={true} element={<Teachers />} />
        </Routes>
      </Drawer>
    </div>
  );
}

export default App;
