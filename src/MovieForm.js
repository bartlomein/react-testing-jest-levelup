import React, { Component } from 'react';

export default class MovieForm extends Component {
  render() {
    return (
      <div>
        <form type='text' data-testid='movie-form'>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
