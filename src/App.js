import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Timer from './Timer';
import myComponent from './UserContext';
import UserContext from './UserContext';
import TimerWrapper from './Timerwraer';
import UserContextWrapper from './UserContextWraer';

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<TimerWrapper />} />
      <Route path="/usercontext" element={<UserContextWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
