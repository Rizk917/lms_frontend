import React from "react";
import "./first.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AddSection() {

const [sectionname,setsectionname]=useState();

  const { state } = useLocation();

  const [clas_id, setclas_id] = useState(state.class_id);


  useEffect(() => {
    console.log(clas_id)

  }, [clas_id]);




  const postnewsection =async ()=>{
    const data={Section_Name:sectionname,
    Class_ID:clas_id,
    User_ID:1}
  
  try {
 await axios.post(`http://127.0.0.1:8000/api/sections`,data)
  
  }catch(error){
    console.log("error ",error);
  }
  }












  return (
    <div className="addadmins">
           <div className="editclass-border">

<label className="label-Addadmins" htmlFor="">
Section Name 
</label>
<input className="input-Classes" type="text"  

onChange={(event) => setsectionname(event.target.value)}


/>




<div className="buttons-classes">
  <Link className="cancel-classes" to='/editClassespage' state={{class_id: clas_id}}> Cancel</Link>

  <Link className="submit-classes" to='/editClassespage' state={{class_id: clas_id}}  onClick={()=>postnewsection()}> Submit</Link>

</div>

</div>
    </div>
  );
}

export default AddSection;
