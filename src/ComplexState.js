import {useState,React} from "react"
import Button from "./Button"

const History =({click})=>{
    if(click.length===0)
    {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history:{click.join(' ')}
        </div>
    )
}

const ComplexState=()=>{
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [total,setTotal] = useState(0)
  console.log('initializing state to zero') 
  const [click,setClick] = useState([])
   console.log('Value of left after initialization ',left)
   console.log('value of right after initialization', right)
   
   const handleLeftClick =()=>{
    console.log('added L to click')
    setClick(click.concat('L'))
   
    console.log('increase, left count')
    const updatedLeft = left +1
    setLeft(updatedLeft)
    console.log('increase total',left + right)
    setTotal(updatedLeft + right)
   }

   const handleRightClick =()=>{
    
     console.log('added L to click')
    setClick(click.concat('R'))
    console.log('increase right count')
    const updatedRight= right +1
    setRight(updatedRight)
    console.log('increase total',left+right)
    setTotal(left + updatedRight)
   }
  return(
    <div>
      {left}

     <Button text='Left' handleClick={handleLeftClick} />
     <Button text='Right' handleClick={handleRightClick} />
     {right}
     
      <p>total {total}</p> 
      <History click={click} />
    </div>
  )
}

export default ComplexState