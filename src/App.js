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
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>

      <Routes>
      <Route exact path='/' element={< AddAminPage />}></Route>
      <Route exact path='/classes' element={< AddClassesPage />}></Route>
      <Route exact path='/sections' element={< AddSectionsPage />}></Route>
      <Route exact path='/addstudent' element={< AddStudentsPage />}></Route>
      <Route exact path='/Classespage' element={< ClassesPage />}></Route>
      <Route exact path='/Home' element={< Home />}></Route>


    </Routes>
    </div>
  );
}

export default App;
