import { useEffect } from 'react';
import { connect } from 'react-redux';
import APIService from '../../services/api-service';
import Article from '../../elements/article/Article';
import Loading from '../../elements/loading/Loading';
import Message from '../../elements/message/Message';
import UsersList from './UsersList';
import { fetchUsersInprogress, fetchUsersOk, fetchUsersError } from './actions';
import { IUsersState } from './reducer';

interface IUsersProps {
  fetchUsersInprogress: Function;
  fetchUsersOk: Function;
  fetchUsersError: Function;
  users: IUsersState
}

function Users({fetchUsersInprogress, fetchUsersOk, fetchUsersError, users}: IUsersProps) {

  useEffect(() => {
    fetchUsersInprogress();
    APIService.getUsers().then((users: any) => {
      fetchUsersOk(users);
    }).catch((e: any) => {
      fetchUsersError(e.message);
    });
  }, [fetchUsersInprogress, fetchUsersOk, fetchUsersError]);

  return (
    <Article title="Users">
      { users.isFetching && <Loading /> }
      { users.error && <Message theme="error" txt={ users.error } /> } 
      { users.items.length > 0 && <UsersList users={ users.items }/>}
    </Article>
  );
};

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {   
  fetchUsersInprogress,
  fetchUsersOk,
  fetchUsersError
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
