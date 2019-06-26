import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from '../history';

const Modal = props => {
  const handleClose = () => {
    createBrowserHistory.push('/');
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div onClick={handleClose} className="ui dimmer modals visible active">
      <div
        onClick={stopPropagation}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
