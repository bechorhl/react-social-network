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

  let newMessage = React.createRef();

  const addNewMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div>
        <ul className={styles.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div>
        <ul className={styles.messages}>{messagesElements}</ul>
        <textarea
          ref={newMessage}
          className={styles.textarea}
          name=""
          id=""
        ></textarea>
        <button onClick={addNewMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
