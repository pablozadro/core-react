import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  fetchUsersOk,
  fetchUsersErr,
  fetchUsersFetching 
} from './actions';

interface IUsersProps { 
  fetchUsersFetching: Function;
  fetchUsersOk: Function;
  fetchUsersErr: Function;
}

const Users = function({ fetchUsersFetching, fetchUsersOk, fetchUsersErr }: IUsersProps) {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    console.log('- use effect -');
    // fetchUsersFetching();
    fetch('http://localhost:9000/api/v1/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.payload.users);
      }).catch(e => {
        console.log('- Error -', e.message);
      });
  }, [ users ]);

  return (
    <article>
      <p>Users component</p>
      <p>Users: { users.length }</p>
    </article>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }

const mapDispatchToProps = { fetchUsersErr, fetchUsersFetching, fetchUsersOk }

export default connect(null, mapDispatchToProps)(Users);