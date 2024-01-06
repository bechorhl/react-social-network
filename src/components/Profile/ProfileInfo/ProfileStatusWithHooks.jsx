// ProfileStatusWithHooks.jsx
import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';
import classNames from 'classnames';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classNames(styles.block, styles.statusBlock)}>
      {!editMode && (
        <span onDoubleClick={activateEditMode} className={styles.status}>
          <b>Status:</b> {status || ''}
        </span>
      )}
      {editMode && (
        <input
          className={styles.editStatusInput}
          autoFocus="true"
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
