import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onNewMessageChange = (message) => {
          store.dispatch(updateNewMessageBodyActionCreator(message));
        };

        return (
          <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state.dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
