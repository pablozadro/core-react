import React from 'react';
import './Input.scss';
import ControlValidators from '../validators';

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  validators: Array<IInputValidator>
}

interface IInputValidator {
  name: string;
  settings?: {[key: string]: any};
}

interface IInputState {
  value: string;
  isValid: boolean;
  errors: Array<any>;
}

export default class Input extends React.Component<IInputProps, IInputState> {

  public static defaultProps = {
    placeholder: '',
    value: '',
    validators: []
  };
  
  public defaultValidators: Array<IInputValidator> = [
    { name:'isRequired' }
  ];

  public defaultTextValidators: Array<IInputValidator> = [];
  public defaultNumberValidators: Array<IInputValidator> = [];
  public defaultEmailValidators: Array<IInputValidator> = [
    { name:'isEmail' }
  ];

  public defaultValidatorsByType: {[key:string]:any} = {
    text: this.defaultTextValidators,
    number: this.defaultNumberValidators,
    email: this.defaultEmailValidators
  }

  public validators: Array<IInputValidator> = [];

  constructor(props: IInputProps) {
    super(props);

    this.state = {
      value: this.props.value,
      isValid: true,
      errors: []
    }

    this.validators = this.validators.concat(
      this.defaultValidators,
      this.defaultValidatorsByType[this.props.type],
      this.props.validators
    );

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  onChangeHandler(e:any): void {
    this.setState({ value: e.target.value });
  }

  onBlurHandler(e:any): void {
    this.validate();
  }

  validate(): void {
    if(this.validators.length === 0) return;
    let errors: Array<{ message: string }> = [];
    this.validators.forEach((validator: IInputValidator) => {
      let result = ControlValidators[validator.name](this.state.value, validator.settings || {})
      !result.isValid && errors.push({ message: result.message });
    });
    this.setState({
      isValid: errors.length === 0,
      errors: errors
    })
  }

  renderErrors(): JSX.Element {
    return (
      <ul className="list sm">
        {this.state.errors.map((error, i) => {
          return <li key={i}>{ error.message }</li>
        })}
      </ul>
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <input 
          type={ this.props.type }
          value={ this.state.value }
          placeholder={ this.props.placeholder } 
          className={ this.state.isValid ? 'input':'input is--error' }
          onChange={ this.onChangeHandler }
          onBlur={ this.onBlurHandler }/>

        { this.state.errors && this.renderErrors() }
      </div>
    );
  }
}