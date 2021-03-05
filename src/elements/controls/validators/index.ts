interface IValidators {
  [key: string]: any;
}

interface IValidatorResponse {
  isValid:boolean;
  message:string;
}

let ControlValidators: IValidators = {
  isRequired: (value:string, settings?:{}): IValidatorResponse => {
    let isValid = value !== '';
    return {
      isValid,
      message: isValid ? '':'Field is required.'
    }
  },
  minLen: (value:string, settings:{ min:number; }): IValidatorResponse => {
    let { min } = settings;
    let isValid = value.length >= min;
    return {
      isValid,
      message: isValid ? '':`${min} characters`
    }
  },
  minValue: (value:string, settings:{ min:number; }): IValidatorResponse => {
    let { min } = settings;
    let isValid = parseFloat(value) >= min;
    return {
      isValid,
      message: isValid ? '':`Field should be greather than ${min}`
    }
  },
  isEmail: (value:string, settings?:{}): IValidatorResponse => {
    let isValid = value !== '';
    return {
      isValid,
      message: isValid ? '':'Email is required.'
    }
  }
}

export default ControlValidators;