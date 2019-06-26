import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    const { getStreams } = this.props;

    getStreams();
  }

  renderAdmin(userId, id) {
    if (userId && userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList = () => {
    const { streams } = this.props;
    return streams.map(({ id, title, description, userId }) => {
      return (
        <div className="item" key={id}>
          {this.renderAdmin(userId, id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  {
    getStreams: fetchStreams
  }
)(StreamList);
