import "./App.css";

import AddStudentsPage from "./pages/student-pages/AddStudentsPage";
import AddClassesPage from "./pages/AddClassesPage";
import AddSectionsPage from "./pages/AddSectionsPage";
import ClassesPage from "./pages/ClassesPage";
// import Admin from "./pages/admin-pages/AdminPage";
import EditclassesPage from "./pages/EditclassesPage";
import EditSectionPage from "./pages/EditSectionPage";
import {  Route, Routes } from "react-router-dom";
import SecondSelectPage from "./pages/SecondSelectPage";
import Home from "./pages/Home";
import AttendancePage from "./pages/AttendancePage";
import LoginPage from "./component/login/login.jsx";
import Test from "./pages/Test.jsx";
import Newatt from "./component/Newatt";
import AddAdmins from "./component/add-admin/AddAdmins";
import EditUser from "./component/edit-admin/EditAdmins";
import Test1 from "./component/FatimaComponents/test1";
import StudentssPage from "./pages/StudedntssPage";
import Adminpage from "./pages/admin-pages/AdminPage";
function App() {
  return (
    <div>

      <Routes>
       
      <Route exact path='/SecondSelect' element={< SecondSelectPage />}></Route>
      <Route exact path='/admin' element={< Adminpage />}></Route>
      <Route exact path='/add-admins' element={< AddAdmins />}></Route>
      <Route exact path='/test' element={< Test />}></Route>
      <Route exact path='/test12' element={< Newatt />}></Route>
      <Route exact path='/' element={< LoginPage />}></Route>
      <Route exact path='/classes/new' element={< AddClassesPage />}></Route>
      <Route exact path='/sections' element={< AddSectionsPage />}></Route>
      <Route exact path='/add-students' element={< AddStudentsPage />}></Route>
      <Route exact path='/classes' element={< ClassesPage />}></Route>
      <Route exact path='/home' element={< Home />}></Route>
      <Route exact path='/attendance' element={< AttendancePage/>}></Route>
      <Route exact path='/users/:id"' element={< EditUser/>}></Route>
      <Route exact path='/students' element={< StudentssPage/>}></Route>
      <Route exact path='/classes/edit' element={< EditclassesPage />}></Route>
      <Route exact path='/newSection' element={< AddSectionsPage />}></Route>
      <Route exact path='/EditSections' element={< EditSectionPage />}></Route>

  </Routes>
    </div>
  );
}

export default App;