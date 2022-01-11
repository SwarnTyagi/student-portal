import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";

import Students from "./containers/students/Students";
import Teachers from "./containers/teachers/Teachers";
import Calendar from "./containers/calendar/AcademicPlan";
import Users from "./containers/users/User";
import theme from "./customTheme";
import Teacherlogin from "./containers/teachers/Teacherlogin";
import StudentDetails from "./containers/students/StudentDetails";
import TeacherDetails from "./containers/teachers/TeacherDetails";
import AcademicPlan from "./containers/calendar/AcademicPlan";
import Examination from "./containers/exams/Examination";
import Results from "./containers/exams/Results";
import Login from "./containers/login/Login";
import Register from "./containers/login/Register";
import { getData } from "./utils/localStorageUtils";
import { useEffect } from "react";
import Dashboard from "./containers/dashboard/Dashboard";
import store from "./redux/store";

const UNAUTHORISED_URL = ["/login", "/register"];

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = getData("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  const isLoggedIn = !UNAUTHORISED_URL.includes(location.pathname);
  console.log("the location is", location);
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {isLoggedIn ? (
            <Drawer>
              <Routes>
                <Route path={"/home"} exact={true} element={<Dashboard />} />
                <Route path={"/students"} exact={true} element={<Students />} />
                <Route path={"/teachers"} exact={true} element={<Teachers />} />
                <Route
                  path={"/academicplan"}
                  exact={true}
                  element={<AcademicPlan />}
                />
                <Route path={"/users"} exact={true} element={<Users />} />
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
              <Route path={"/register"} exact={true} element={<Register />} />
            </Routes>
          )}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
