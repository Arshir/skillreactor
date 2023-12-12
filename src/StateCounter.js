
import { useState ,React} from "react"
import Display from './Display' 
import Button from './Button'

const StateCounter=()=>{
    const [counter,setCounter]= useState(0)
    
   //setTimeout(()=>setCounter(counter+1),1000)
    console.log('rendering with counter value...',counter)

    const IncreaseCounter=()=>
    {  console.log('increasing, value before',counter)
        setCounter(counter +1)
    }
    const ResetToZero=()=>{
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

    const DecreaseCounter=()=>
    {
        console.log('decreasing , value before', counter)
        setCounter(counter -1)
    }
    return(
        <div>
            <Display counter={counter} />
            <Button text='Plus' handleClick={IncreaseCounter} />

             <Button text= 'Zero' handleClick={ResetToZero} />
        
            <Button text= 'Minus' handleClick={DecreaseCounter} /> 
        </div>
    )

}

export default StateCounter