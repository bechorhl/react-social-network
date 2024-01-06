// FormControls.js
import React from 'react';
import { useState } from 'react';
import styles from './FormControls.module.css';
import classNames from 'classnames';

const FormControl = ({
  input,
  meta: { touched, error, warning },
  child,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={classNames(styles.formControl, hasError && styles.error)}>
      {props.children}
      {hasError && (
        <span className={classNames(styles.spanError)}>{error}</span>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const CustomCheckbox = ({
  nameId,
  text,
  input,
  meta: { touched, error, warning },
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const hasError = touched && error;
  return (
    <div
      className={classNames(
        styles.formControl,
        styles.checkboxWrapper,
        hasError && styles.error
      )}
    >
      <input
        id={nameId}
        type="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
        {...input}
        {...props}
      />
      <label
        className={classNames(styles.label, styles.checkboxLabel)}
        for={nameId}
      >
        {text}
      </label>
      {hasError && (
        <span
          className={classNames(styles.spanError, styles.checkboxSpanError)}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export const CustomRadioButton = ({
  input,
  meta: { touched, error, warning },
  ...props
}) => {
  return;
};
