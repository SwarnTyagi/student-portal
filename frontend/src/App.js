import "./App.css";

import { ThemeProvider } from "@mui/material/styles";

import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
import Teachers from "./containers/teachers/Teachers";

import theme from "./customTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Drawer>
          <Routes>
            <Route path={"/students"} exact={true} element={<Students />} />
            <Route path={"/teachers"} exact={true} element={<Teachers />} />
          </Routes>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}

export default App;
