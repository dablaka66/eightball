import React, {useState} from "react";
import "./EightBall.css"
function EightBall(){
    const initial = () => "Think of a Question";
    const initialColor = () => "#000" ;
    const restart = () => {
      setColor(initialColor());
      initial();
    }
    const [msg,changeMsg] = useState(initial);
    const [color,setColor] = useState(initialColor);
    const answers = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
    let style ="";
      let changeMsg1 = () =>  {
        let num =  Math.floor(Math.random()*20);
        setColor(changeColor(num));
        
        return answers[num].msg;
      }
      function changeColor (num) {
        return answers[num].color;
      }
     
      return <div>
        <div className="ball"
      style={{ backgroundColor: color }}
      onClick={() => changeMsg(changeMsg1())}>
           <h3>{msg}</h3> 
      </div>
      <button className="button" onClick={ () => changeMsg(restart)} >Restart</button>
      </div>
}
export default EightBall;