import React from 'react';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import createBrowserHistory from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getById(this.props.match.params.id);
  }

  onDelete = id => {
    this.props.delete(id);
  };

  onDismiss = () => {
    createBrowserHistory.push('/');
  };

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.onDelete(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <button onClick={this.onDismiss} className="ui button">
          Cancel
        </button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete this stream with title: ${
      this.props.stream.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  {
    delete: deleteStream,
    getById: fetchStream
  }
)(StreamDelete);
