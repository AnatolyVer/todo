import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React from "react";  

function Element({task, plan, setPlan, max, setMax, setPage, setDisplay}) {

  const del = (task) => {
    setPlan(plan.filter(p => p.id !== task.id))
    if (plan.length % 4 === 1) {setMax(max - 1); setPage(max - 1); setDisplay(false)}
  }

  return (
    <div className="element">
        <p style={{paddingLeft: '30px', paddingTop : '10px', fontSize: '24px'}}>{task.text}</p>
        <button onClick={() => del(task)} style={{marginRight: '30px' , marginTop : '35px'}}>Delete</button>
    </div>
  );
}

export default Element;