import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    const { getStreams } = this.props;

    getStreams();
  }

  renderAdmin(userId) {
    if (userId && userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
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
          {this.renderAdmin(userId)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId
});

export default connect(
  mapStateToProps,
  {
    getStreams: fetchStreams
  }
)(StreamList);
