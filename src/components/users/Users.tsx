import { connect } from 'react-redux';
import Article from '../../elements/article/Article';
import {
  fetchUsersInprogress,
  fetchUsersOk,
  fetchUsersError
} from './actions';

interface IUsersProps {
  fetchUsersInprogress: Function;
  fetchUsersOk: Function;
  fetchUsersError: Function;
}

function Users({fetchUsersInprogress, fetchUsersOk, fetchUsersError}: IUsersProps) {
  fetchUsersInprogress();
  return (
    <Article title="Users">
      <p>Users list:</p>
    </Article>
  );
};

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = {   
  fetchUsersInprogress,
  fetchUsersOk,
  fetchUsersError
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
