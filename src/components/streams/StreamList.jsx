import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    const { getStreams } = this.props;

    getStreams();
  }

  renderList = () => {
    const { streams } = this.props;
    return streams.map(({ id, title, description }) => {
      return (
        <div className="item" key={id}>
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

const mapStateToProps = state => ({ streams: Object.values(state.streams) });

export default connect(
  mapStateToProps,
  {
    getStreams: fetchStreams
  }
)(StreamList);
