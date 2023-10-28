import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(message));
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
            value={props.dialogsPage.newMessageBody}
          ></textarea>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
