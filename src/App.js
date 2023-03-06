import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import AddAdmins from "./component/AddAdmins";
import AddAminPage from "./pages/AddAdminsPage";
import AddStudentsPage from "./pages/AddStudentsPage";
import AddClassesPage from "./pages/AddClassesPage";
import AddSectionsPage from "./pages/AddSectionsPage";
import ClassesPage from "./pages/ClassesPage";
import EditclassesPage from "./pages/EditclassesPage";
import AddSectionPage from "./pages/AddSectionsPage";
import EditSectionPage from "./pages/EditSectionPage";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>
      <Route exact path='/' element={< AddAminPage />}></Route>
      <Route exact path='/Addclasses' element={< AddClassesPage />}></Route>
      <Route exact path='/sections' element={< AddSectionsPage />}></Route>
      <Route exact path='/addstudent' element={< AddStudentsPage />}></Route>
      <Route exact path='/Classespage' element={< ClassesPage />}></Route>
      
      <Route exact path='/editClassespage' element={< EditclassesPage />}></Route>
      <Route exact path='/newSection' element={< AddSectionPage />}></Route>
      <Route exact path='/EditSections' element={< EditSectionPage />}></Route>

      newSection   </Routes>
    </div>
  );
}

export default App;
