import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, {useEffect} from "react";
import Element from "./Element";

function Plan({plan, setPlan, page, setPage, max, setMax, setDisplay}) {

  let i = 4*(page-1);

  const temp = plan.slice(i,i+4);

  if (plan.length === 0 )
    return ( <div className="plans"> <p style = {{ fontSize: '40px', display: 'flex', justifyContent: 'center', marginTop: '25%'}}>There are no tasks</p></div>);

  return (    
    <div className="plans">
      <div className="stats">
        <p>Page {page}</p>
        <p>Total: {plan.length}</p>
      </div>
      {temp.map((e) => <Element plan = {plan} setPlan = {setPlan} setPage = {setPage} max = {max} setMax = {setMax} setDisplay = {setDisplay} task = {e} key = {e.id}/>)}
    </div>
  );
}

export default Plan;