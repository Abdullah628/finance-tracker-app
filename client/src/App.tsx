
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element= {<h1>Dashboard</h1>} />
          <Route path='/auth' element= {<h1>SignUp</h1>} />
        </Routes>
       </Router>
    </>
  )
}

export default App
