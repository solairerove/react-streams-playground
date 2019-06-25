import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    const { getStream } = this.props;

    getStream(1);
  }

  renderList = () => {
    const { streams } = this.props;
    console.log(streams);

    return <div>{streams.length}</div>;
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ streams: state.streams });

export default connect(
  mapStateToProps,
  {
    getStream: fetchStream
  }
)(StreamList);
