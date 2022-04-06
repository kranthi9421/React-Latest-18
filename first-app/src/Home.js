import React,{useState} from 'react'


function Home() {

const [count,setCount] = useState(0)

console.log('Componund')

const handleClick = ()=>{
  setCount(curCount => curCount + 1)
  setCount(curCount => curCount + 2)
}

const handleCount = ()=>{
    setTimeout(()=>{
        setCount(curCount => curCount + 1)
        setCount(curCount => curCount + 2)
    },1000)
}

  return (
    <div>
        <h1>{count}</h1>
       
        <button onClick={handleClick}>Click</button>
        <button onClick={handleCount}>With Time</button>
    </div>
  )
}

export default Home