import React from 'react';
import styles from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { CustomCheckbox } from '../../common/FormsControls/FormsControls';
import classNames from 'classnames';

let ProfileDataForm = ({ handleSubmit, profile, error, ...props }) => {
  return (
    <form className={styles.profileDataForm} onSubmit={handleSubmit}>
      <div>
        <button>Save changes</button>
      </div>

      {error && <div>{error}</div>}

      <div className={styles.loginFormDiv}>
        <label for="fullName" className={styles.label}>
          Full name:
        </label>
        <Field
          className={classNames(styles.input, styles.inputText)}
          name="fullName"
          component="input"
          type="text"
          placeholder="Full name"
        />
      </div>

      <div className={styles.loginFormDiv}>
        <Field
          name="lookingForAJob"
          component={CustomCheckbox}
          type="checkbox"
          nameId="lookingForAJob"
          text="Looking for a job"
        />
      </div>

      <div className={styles.loginFormDiv}>
        <label className={styles.label}>My professional skills:</label>
        <Field
          className={classNames(styles.input, styles.textarea)}
          name="lookingForAJobDescription"
          component="textarea"
          type="text"
          placeholder="My professional skills"
        />
      </div>

      <div className={styles.loginFormDiv}>
        <label className={styles.label}>About me:</label>
        <Field
          className={classNames(styles.input, styles.textarea)}
          name="aboutMe"
          component="textarea"
          type="text"
          placeholder="About me"
        />
      </div>

      <div className={styles.contactsBlockForm}>
        <span>Contacts:</span>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <label className={styles.label}>{key}:</label>
              <Field
                className={classNames(
                  styles.input,
                  styles.inputText,
                  styles.inputContact
                )}
                name={'contacts.' + key}
                component="input"
                type="text"
                placeholder={key}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm);

export default ProfileDataFormRedux;
