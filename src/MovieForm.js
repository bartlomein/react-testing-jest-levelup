import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: ''
  };

  render() {
    const { text } = this.state;
    const { submitForm } = this.props;
    return (
      <div>
        <form
          type='text'
          data-testid='movie-form'
          onSubmit={() => submitForm({ text })}
        >
          <input type='text' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
