

import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

import SecondselectStudent from "../component/SecondselectStudent";
function SecondSelectPage() {
  return (
    <div>
  
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
        <Header />
        <SecondselectStudent />
        </div>
      </div>
    </div>
  );
}

export default SecondSelectPage;