import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderIntput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name='title' component={this.renderIntput} />
        <Field name='description' component={this.renderIntput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
