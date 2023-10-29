import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let message = e.target.value;
    props.updateNewMessageBody(message);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.namesBlock}>
        <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={styles.messageBlock}>
        <ul className={styles.messages}>{messagesElements}</ul>
        <div>
          <textarea
            onChange={onNewMessageChange}
            className={styles.textarea}
            placeholder="Enter your message"
            value={state.newMessageBody}
          ></textarea>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
