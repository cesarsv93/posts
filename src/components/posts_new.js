import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  renderField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // this.onChange = this.field.input.onChange; this.onClick = this.field.input.onClick....
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
        label="Tags"
        name="tags"
        component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

export default reduxForm({ form: 'PostsNewForm' })(PostsNew);