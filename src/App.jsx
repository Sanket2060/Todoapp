import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Head'
import Body from './Body'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">


     <Header />
     <Body titled="Wake up" taskid="45" />
     <Body titled={"Say hi to your crush"}/>
     <Body titled={"Ask did you ate your food"}/>
     <Body titled={"Realize she has a boyfriend"}/>
     <Body titled={"Get back to coding"}/>
    </div>
     
    </>
  )
}

export default App
