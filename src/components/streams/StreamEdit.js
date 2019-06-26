import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  // почему полный объект
  // onSubmit = (id, formValues) => {
  onSubmit = formValues => {
    // this.props.changeStream(id, formValues);
    console.log(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h3>Edit a Stream</h3>
          <p>{this.props.stream.title}</p>
          <StreamForm
            initialValues={{ title, description }}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  {
    getStream: fetchStream,
    changeStream: editStream
  }
)(StreamEdit);
