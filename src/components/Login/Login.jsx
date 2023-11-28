// Login.jsx
import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { CustomCheckbox, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <div className={styles.loginFormDiv}>
        <label className={styles.label}>Login:</label>
        <Field
          className={classNames(styles.input, styles.inputText)}
          name="login"
          component={Input}
          type="text"
          placeholder="Enter your login"
          validate={[required]}
        />
      </div>
      <div className={styles.loginFormDiv}>
        <label className={styles.label}>Password:</label>
        <Field
          className={classNames(styles.input, styles.inputText)}
          name="password"
          component={Input}
          type="text"
          placeholder="Enter your password"
          validate={[required]}
        />
      </div>
      <div className={styles.loginFormDiv}>
        <Field
          name="rememberMeCheckbox"
          component={CustomCheckbox}
          type="checkbox"
          validate={[required]}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: 'loginForm',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (values) => {
    console.log('values**********');
    console.log(values);
  };

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
