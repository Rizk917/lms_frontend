import logo from "./logo.svg";
import "./App.css";

import AddStudentsPage from "./pages/student-pages/AddStudentsPage";
import AddClassesPage from "./pages/AddClassesPage";
import AddSectionsPage from "./pages/AddSectionsPage";
import ClassesPage from "./pages/ClassesPage";
import Studentspage from "./pages/student-pages/StudentsPage";
import { Route, Routes,  } from 'react-router-dom';
import Admin from "./pages/admin-pages/AdminPage";
import AddAdminPage from "./pages/admin-pages/AddAdminsPage";
import SelectStudent from "./pages/student-pages/SelectStudentPage";
import EditStudentsPage from "./pages/student-pages/EditStudentPage";
import SelectAdminsPage from "./pages/admin-pages/SelectAdminPage";
import EditAdminsPage from "./pages/admin-pages/EditAdminPage";
function App() {
  return (
    <div>

      <Routes>
      
      <Route exact path='/admin' element={< Admin />}></Route>
      <Route exact path='/classes' element={< AddClassesPage />}></Route>
      <Route exact path='/sections' element={< AddSectionsPage />}></Route>
      <Route exact path='/add-students' element={< AddStudentsPage />}></Route>
      <Route exact path='/Classespage' element={< ClassesPage />}></Route>
      <Route exact path='/students' element={< Studentspage  />}></Route>
      <Route exact path='/add-admins' element={< AddAdminPage  />}></Route>
      <Route exact path='/edit-student' element={< EditStudentsPage />}></Route>
      <Route exact path='/select-student' element={< SelectStudent/>}></Route>
      <Route exact path='/select-admin' element={< SelectAdminsPage/>}></Route>
      <Route exact path='/edit-admin' element={< EditAdminsPage/>}></Route>




    </Routes>
    </div>
  );
}

export default App;