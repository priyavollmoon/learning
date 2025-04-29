import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

function TimerWrapper(props) {
  const navigate = useNavigate();
  return <Timer {...props} navigate={navigate} />;
}

export default TimerWrapper;
