import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      <ul className={styles.messages}>{messagesElements}</ul>
    </div>
  );
};

export default Dialogs;
