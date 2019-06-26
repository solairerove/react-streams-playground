import React from 'react';
import createBrowserHistory from '../../history';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  const onDismiss = () => {
    createBrowserHistory.push('/');
  };

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default StreamDelete;
