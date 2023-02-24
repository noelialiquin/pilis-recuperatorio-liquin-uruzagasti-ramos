import './App.css';
import { Routes, Route } from 'react-router-dom';
import Trivia from './routes/Trivia';
import Login from './routes/Login';
import Nav from './routes/Nav';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route  path="/" element={<Nav />}> 
          <Route path="/login" element={<Login />} />
          <Route path="/trivia" element={<Trivia/>} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
