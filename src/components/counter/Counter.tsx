import { connect } from 'react-redux';
import Article from '../../elements/article/Article';
import Button from '../../elements/button/Button';
import { incrementCounter, decrementCounter } from './actions';

interface ICounterProps {
  counter: { value: number };
  decrementCounter: Function;
  incrementCounter: Function;
}

function Counter({counter, incrementCounter, decrementCounter}: ICounterProps) {
  return (
    <Article title="Counter">
      <div className="flex-center">
        <Button theme="white" txt="-" onClick={ () => decrementCounter(1) }/>
        <p className="box-mg-h">counter: { counter.value }</p>
        <Button theme="white" txt="+" onClick={ () => incrementCounter(1) }/>
      </div>
    </Article>
  );
};

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = { incrementCounter, decrementCounter }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
