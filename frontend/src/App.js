import "./App.css";

import { ThemeProvider } from "@mui/material/styles";

import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
import Teachers from "./containers/teachers/Teachers";
import Calendar from "./containers/calendar/AcademicPlan";

import theme from "./customTheme";
import Teacherlogin from "./containers/teachers/Teacherlogin";
import StudentDetails from "./containers/students/StudentDetails";
import TeacherDetails from "./containers/teachers/TeacherDetails";
import AcademicPlan from "./containers/calendar/AcademicPlan";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Drawer>
          <Routes>
            <Route path={"/students"} exact={true} element={<Students />} />
            <Route path={"/teachers"} exact={true} element={<Teachers />} />
            <Route
              path={"/academicplan"}
              exact={true}
              element={<AcademicPlan />}
            />
            <Route
              path={"/teachers/login"}
              exact={true}
              element={<Teacherlogin />}
            />
            <Route
              path={"/students/details"}
              exact={true}
              element={<StudentDetails />}
            />
            <Route
              path={"/teachers/details"}
              exact={true}
              element={<TeacherDetails />}
            />
          </Routes>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}

export default App;
