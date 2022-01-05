import "./App.css";

import { ThemeProvider } from "@mui/material/styles";

import { Route, Routes, useLocation } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
import Teachers from "./containers/teachers/Teachers";
import Calendar from "./containers/calendar/AcademicPlan";

import theme from "./customTheme";
import Teacherlogin from "./containers/teachers/Teacherlogin";
import StudentDetails from "./containers/students/StudentDetails";
import TeacherDetails from "./containers/teachers/TeacherDetails";
import AcademicPlan from "./containers/calendar/AcademicPlan";
import Examination from "./containers/exams/Examination";
import Results from "./containers/exams/Results";
import Login from "./containers/login/Login";

const UNAUTHORISED_URL = ["/login", "/register"];

function App() {
  const location = useLocation();
  const isLoggedIn = !UNAUTHORISED_URL.includes(location.pathname);
  console.log("the location is", location);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {isLoggedIn ? (
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
                path={"/students/details"}
                exact={true}
                element={<StudentDetails />}
              />
              <Route
                path={"/teachers/details"}
                exact={true}
                element={<TeacherDetails />}
              />
              <Route
                path={"/Examination"}
                exact={true}
                element={<Examination />}
              />
              <Route
                path={"Examination/Results"}
                exact={true}
                element={<Results />}
              />
            </Routes>
          </Drawer>
        ) : (
          <Routes>
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Teacherlogin />} />
          </Routes>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
