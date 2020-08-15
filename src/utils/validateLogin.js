import * as yup from 'yup';

export const userEmailSchema = yup.string().email().min(3).max(255);
export const userPasswordSchema = yup.string().min(3).max(255);

const userLoginSchema = yup.object().shape({
  email: userEmailSchema,
  password: userPasswordSchema,
});

const formatYupError = (errors) => {
  const formattedErrors = [];
  errors.inner.forEach((error) => {
    formattedErrors.push({
      path: error.path,
      message: error.message,
    });
  });
  return formattedErrors;
};

export const validateUserLoginInput = async (userLoginInput) => {
  try {
    await userLoginSchema.validate(userLoginInput, { abortEarly: false });
  } catch (e) {
    return formatYupError(e);
  }

  return [];
};
