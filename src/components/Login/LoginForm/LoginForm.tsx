import { FC, ReactElement } from 'react';

import { Checkbox, TextField } from '@mui/material';
import { useFormik } from 'formik';

import styleButton from '../../comonComponents/Button/Button.module.scss';

import style from './LoginForm.module.scss';

import { loginAPIRequestType } from 'api/api';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaURL: string;
};

export type LoginFormPropsType = {
  setLoginHandler: (userData: loginAPIRequestType) => void;
  captchaURL: string;
};

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

export const LoginForm: FC<LoginFormPropsType> = ({
  setLoginHandler,
  captchaURL,
}): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
      captchaURL: '',
    },
    onSubmit: values => {
      setLoginHandler(values);
    },
  });

  return (
    <div className={style.form}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div>
          <Checkbox
            id="checkbox"
            name="checkbox"
            onChange={formik.handleChange}
            defaultChecked={formik.values.rememberMe}
          />{' '}
          Remember Me
        </div>

        {captchaURL && (
          <div>
            <img alt="captcha" src={captchaURL} />
            <div>
              <input
                id="captchaURL"
                name="captchaURL"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.captchaURL}
              />
            </div>
          </div>
        )}
        <button className={styleButton.item} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
