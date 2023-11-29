// Login.jsx
import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { CustomCheckbox, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <div className={styles.loginFormDiv}>
        <label className={styles.label}>Login:</label>
        <Field
          className={classNames(styles.input, styles.inputText)}
          name="email"
          component={Input}
          type="text"
          placeholder="Enter your email"
          validate={[required]}
        />
      </div>
      <div className={styles.loginFormDiv}>
        <label className={styles.label}>Password:</label>
        <Field
          className={classNames(styles.input, styles.inputText)}
          name="password"
          component={Input}
          type="password"
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
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}

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
  const onSubmit = (formData) => {
    console.log('formData**********');
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
