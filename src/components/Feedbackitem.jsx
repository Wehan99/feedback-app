import { useState } from "react"


function Feedbackitem() {

  const[rating, setRating] = useState (7)
  
  const[text, setText] = useState (' This is a example of a feedback item')

  const handleClick = () => {
    setRating(10)
  }
  return (
    <div className="card">
        <div className="num-display"> {rating} </div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click </button>
      
    </div>
  )
}

export default Feedbackitem
