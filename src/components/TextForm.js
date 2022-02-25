import React ,{useState} from 'react'



export default function TextForm(props) {
const handleUpClick = () =>{
 // console.log("UpperCase was clicked " + text);
  let newText = text.toUpperCase();
  setText(newText);
}

const handleLoClick = () =>{
  // console.log("UpperCase was clicked " + text);
   let newText = text.toLowerCase();
   setText(newText);
 }
const handleOnChange = (event) => {
 // console.log("On Change");
  setText(event.target.value);
}
  // text variable can't be updated just by changing the value , it can be updated only by using a function(HOOKS)
  const [text , setText] = useState(''); // state variable
 // text = "hkvdjbkdv"; // Wrong way to change the state
 // setText("kndvndvom"); // Correct way to change the state
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="9" ></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}  >Convert to
        UpperCase  </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} > Convert to Lowercase </button>
</div>

 <div className="container my-3">
       <h2>Your text Summary</h2>
       <p> <b>{text.split(" ").length} words and {text.length} characters </b></p>
       <p> <b>{0.008*text.split(" ").length} Minutes read</b></p>
       <h2>Preview</h2>
       <p>{text}</p> 
 </div>

</>
  )
}


