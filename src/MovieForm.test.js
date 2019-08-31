import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();
test('<MovieForm />', () => {
  const { queryByTestId, getByText } = render(
    <MovieForm submitForm={onSubmit} />
  );

  //   expect(getByTestId('page-title').textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
  // expect(container.firstChild).toMatchSnapshot();
  fireEvent.click(getByText('Submit'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  //   debug();
});
