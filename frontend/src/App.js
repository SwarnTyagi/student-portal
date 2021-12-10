import "./App.css";

import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
function App() {
  return (
    <div className="App">
      <Drawer>
        <Routes>
          <Route path={"/students"} exact={true} element={<Students />} />
        </Routes>
      </Drawer>
    </div>
  );
}

export default App;
