import CONSTANTS from "../constants/Constants";

const requiredField = () => {
  return {
    value: true,
    message: "this_field_is_required",
  };
};

const emailValidation = () => {
  return {
    value: CONSTANTS.EMAIL_REGEX,
    message: "wrong_email_address",
  };
};

const onlyLatin = () => {
  return {
    value: CONSTANTS.LATIN_LETTERS,
    message: "wrong_email_address",
  };
};

const inputMaxLengthLimit = (value) => {
  return {
    value: value,
    message: "password_length_error_message",
  };
};

const inputMinLengthLimit = ( value) => {
  return {
    value: value,
    message: "password_length_error_message",
  };
};

export {
  requiredField,
  emailValidation,
  onlyLatin,
  inputMaxLengthLimit,
  inputMinLengthLimit,
};
