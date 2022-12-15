import CONSTANTS from '../constants/Constants';

const requiredField = () => {
  return {
    value: true,
    message: 'this_field_is_required',
  };
};

const emailValidation = () => {
  return {
    value: CONSTANTS.EMAIL_REGEX,
    message: 'wrong_email_address',
  };
};

const onlyLatin = () => {
  return {
    value: CONSTANTS.LATIN_LETTERS,
    message: 'wrong_email_address',
  };
};

const inputMaxLengthLimit = (value: number) => {
  return {
    value: value,
    message: 'password_length_error_message',
  };
};

const onlyNumbers = (value: string) => {
  const REG_EX = /^[0-9]+$/;
  return REG_EX.test(value) ? null : 'please enter only number';
};

const inputMinLengthLimit = (value: number) => {
  return {
    value: value,
    message: 'password_length_error_message',
  };
};

export {
  requiredField,
  emailValidation,
  onlyLatin,
  inputMaxLengthLimit,
  inputMinLengthLimit,
  onlyNumbers,
};
