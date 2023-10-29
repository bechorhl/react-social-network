import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (message) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(message));
  };

  return (
    <Dialogs
      sendMessage={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
      dialogsPage={props.store.getState().dialogsPage}
    />
  );
};

export default DialogsContainer;
