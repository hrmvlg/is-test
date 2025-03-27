import UserCard from './components/UserCard';
import UserList from './components/UserList';
import { useEffect } from 'react';
import { fetchInitialUsers } from './app/store/actions/fetchAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchInitialUsers());

  }, [dispatch]);

  return (
    <div className="container">
      <UserList />
      {user.id && <UserCard />}
    </div>
  )
}

export default App
