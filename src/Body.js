import React, {useState} from "react";
import Menu from "./Menu"
import List from "./List";

function Body() {

const [plan, setPlan] = useState([]);
const [display, setDisplay] = useState(false);
const [page, setPage] = useState(1);
const [max, setMax] = useState(1);

return (
    <div className="list">
      <Menu plan = {plan} setPlan = {setPlan} setDisplay = {setDisplay} page = {page} max = {max} setPage = {setPage} setMax = {setMax}/>
      <List plan = {plan} setPlan = {setPlan} display = {display} setDisplay = {setDisplay} page = {page} setPage = {setPage} max = {max} setMax = {setMax}/>
    </div>
  );
}

export default Body;