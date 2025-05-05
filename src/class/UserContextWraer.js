import { useLocation } from 'react-router-dom';
import UserContext from './UserContext';

function UserContextWrapper(props) {
  const location = useLocation();
  const { name, age, user } = location.state ;

  return <UserContext {...props} name={name} age={age} user={user} />;
}

export default UserContextWrapper;
