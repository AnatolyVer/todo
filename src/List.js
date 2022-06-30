import React from "react";
import Plan from "./Plan";

function List({plan, setPlan, display, setDisplay, page, setPage, max, setMax}) {

  const plusP = () => {
    page === max ? setPage(1) : setPage(page + 1);
  }

  const minusP = () => {
    page === 1 ? setPage (max) : setPage(page - 1);
  }

  const left = display ? <button  onClick={minusP} style={{marginTop : '12.5%', marginRight: '10px' }}>{'<'}</button> : null
  const right = display ? <button onClick={plusP} style={{marginTop : '12.5%', marginLeft: '10px', display: display}}>{'>'}</button> : null
  return (
    <div className="body">
      {left}
      <Plan plan = {plan} setPlan = {setPlan} max = {max} setMax = {setMax} page = {page} setPage = {setPage} setDisplay = {setDisplay}/>
      {right}
    </div>
  );
}

export default List;