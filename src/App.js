import logo from "./logo.svg";
import "./App.css";

import AddStudentsPage from "./pages/student-pages/AddStudentsPage";
import AddClassesPage from "./pages/AddClassesPage";
import AddSectionsPage from "./pages/AddSectionsPage";
import ClassesPage from "./pages/ClassesPage";
import Studentspage from "./pages/student-pages/StudentsPage";
import Admin from "./pages/admin-pages/AdminPage";
import AddAdminPage from "./pages/admin-pages/AddAdminsPage";
import SelectStudent from "./pages/student-pages/SelectStudentPage";
import EditStudentsPage from "./pages/student-pages/EditStudentPage";
import SelectAdminsPage from "./pages/admin-pages/SelectAdminPage";
import EditAdminsPage from "./pages/admin-pages/EditAdminPage";
import EditclassesPage from "./pages/EditclassesPage";
import AddSectionPage from "./pages/AddSectionsPage";
import EditSectionPage from "./pages/EditSectionPage";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import SecondSelectPage from "./pages/SecondSelectPage";
import Home from "./pages/Home";
import AttendancePage from "./pages/AttendancePage";
import LoginPage from "./component/login/login.jsx";
import Test from "./pages/Test.jsx";
import Newatt from "./component/Newatt";
import Test1 from "./component/FatimaComponents/test1";
import StudentssPage from "./pages/StudedntssPage";
function App() {
  return (
    <div>

      <Routes>
       
      <Route exact path='/SecondSelect' element={< SecondSelectPage />}></Route>
      <Route exact path='/admin' element={< Admin />}></Route>
      <Route exact path='/test' element={< Test />}></Route>
      <Route exact path='/test' element={< Test1 />}></Route>
      <Route exact path='/test12' element={< Newatt />}></Route>
      <Route exact path='/' element={< LoginPage />}></Route>
      <Route exact path='/Addclasses' element={< AddClassesPage />}></Route>
      <Route exact path='/sections' element={< AddSectionsPage />}></Route>
      <Route exact path='/add-students' element={< AddStudentsPage />}></Route>
      <Route exact path='/Classespage' element={< ClassesPage />}></Route>
      <Route exact path='/Home' element={< Home />}></Route>
      <Route exact path='/Attendance' element={< AttendancePage/>}></Route>
      <Route exact path='/students' element={< StudentssPage/>}></Route>


      
      <Route exact path='/editClassespage' element={< EditclassesPage />}></Route>
      <Route exact path='/newSection' element={< AddSectionsPage />}></Route>
      <Route exact path='/EditSections' element={< EditSectionPage />}></Route>

      newSection   </Routes>
    </div>
  );
}

export default App;