
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';

function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element= {<Auth/>} />
          <Route path='/auth' element= {<Dashboard/>} />
        </Routes>
       </Router>
    </>
  )
}

export default App;
