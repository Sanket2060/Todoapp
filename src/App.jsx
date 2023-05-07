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
     <Body titled={"Eat meal"}/>
     <Body titled={"Hello"}/>
     <Body titled={"hey"}/>
     <Body titled={"Get back to coding"}/>
    </div>
     
    </>
  )
}

export default App
