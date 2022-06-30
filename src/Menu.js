import React, {useState, useEffect} from "react";

function Menu({plan, setPlan, setDisplay, page, max, setPage, setMax}) {

    const [text, setText] = useState('');

    const add = (e) => {
      e.preventDefault()
      
        if (text !== '') {
        setPlan([...plan, {text: text, id: Date.now()}])
        setText('');
        if (  plan.length > 3) {
          setDisplay(true);
          setPage(max);
        }
       else {
        setDisplay(false);
       }
        if (plan.length % 4 === 0 && plan.length !== 0) {setMax(max + 1); setPage(max+1);}
        }
    }

  return (
    <div className="menu">
      <form onSubmit={add} className="wrapper">
      <input value = {text} onChange = {e => setText(e.target.value)} placeholder="Type your plans"></input>
      <button>Add</button>
      </form>
    </div>
  );
}

export default Menu;
