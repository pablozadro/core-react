import { useState, useEffect } from 'react';
import Article from '../../elements/article/Article';
import Loading from '../../elements/loading/Loading';
import Message from '../../elements/message/Message';

export default function Users() {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ err, setErr ] = useState('');
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsFetching(true);
    try {
      const res = await fetch('http://localhost:9000/api/v1/users?delay=1500');
      const data = await res.json();
      setUsers(data.payload.users);
      setErr('');
    } catch (e) {
      setErr(e.message);
    }
    setIsFetching(false)
  };

  return (
    <Article title="Users">
      { isFetching && <Loading /> }
      { err && <Message theme="error" txt={ err } /> }
      <ul className="list">
      { users && users.map((user: any, i: number) => {
        return <li key={i}>{i}: { user.email }</li>
      })}
      </ul>
    </Article>
  );
};