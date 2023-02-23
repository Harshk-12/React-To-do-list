import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CheckIcon from "@mui/icons-material/Check";
import "./Todo.css";

function Todo() {
  let [inputvalue, setvalue] = useState("");
  let [array, setarray] = useState([]);
  let [edit, setedit] = useState(false);
  let [check, setcheck] = useState([]);

  function insertarrayvalue(e) {
    e.preventDefault();
    // if(inputvalue=''){
    // alert("Enter a task plz...")
    // }
    if(inputvalue===''){
     return 
    }
   if (edit === false) {
      setarray([...array, inputvalue]);
      console.log(array);
    } else {
      array[edit] = inputvalue;

      setedit(false);
    }
    setvalue("");
  }

  function handlechange(e) {
    setvalue(e.target.value);
  }

  function deletetask(e,index) {
    e.preventDefault()
    let newarray = array.filter(( a,index2) => {
      console.log(a)
      return index !== index2;
    });
    setarray(newarray);
  }
  function edititem(e,index) {
    e.preventDefault()
    setvalue(array[index]);
    setedit(index);
  }

  function checkicon(e,item) {
    e.preventDefault()
    setcheck([...check,item]);
    // console.log(check)

    // check === true ? (className = "linethrough") : "";
  }

  return (
    <div className="form">
      <form type="submit"  onSubmit={insertarrayvalue}>
        <input className="input" type="text" value={inputvalue} onChange={handlechange} />
        <button className="btn">Add Task</button>
      </form>
      <ul className="list">
        {array.map((item, index) => {
          return (
            <li
        className={ check.includes(item)?'linethrough':""} 
              key={index}
             
            > 
              {item}

            <a href="#"> <DeleteIcon onClick={(e) => deletetask(e,index)}></DeleteIcon></a>
              <a href="#"><ModeEditOutlineIcon
                onClick={(e) => edititem(e,index)}
              ></ModeEditOutlineIcon></a>
             <a href="#"> <CheckIcon onClick={(e) => checkicon(e,item)}></CheckIcon></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
