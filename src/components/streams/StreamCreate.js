import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderIntput({ input, label, meta }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    // event.preventDefault() on redux-form side
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field name='title' component={this.renderIntput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderIntput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
