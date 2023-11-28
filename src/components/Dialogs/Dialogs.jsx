import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.namesBlock}>
        <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={styles.messageBlock}>
        <ul className={styles.messages}>{messagesElements}</ul>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

let AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={styles.textarea}
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your message"
      />

      <button>Add message</button>
    </form>
  );
};

AddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
