import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Timer from './Timer';
import myComponent from './UserContext';
import UserContext from './UserContext';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer/>} />
        <Route path="/UserContext" element={<UserContext />} />
      </Routes>
    </Router>
  );
}

export default App;
