import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';

import Example from './Testing';
describe('Example Component', () => {
  test('render "Hello World" text', () => {
    //Arrange

    render(<Example />);

    //Act
    //nothing in this case

    //Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('render "when it was false "', () => {
    //Arrange
    render(<Example />);
    //Act
    //Nothing in this case

    //Assert
    const falseElement = screen.getByText('state is false', {
      exact: false,
    });
    expect(falseElement).toBeInTheDocument();
  });
  test('render "when is was false"', () => {
    //Arrange

    render(<Example />);
    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const trueElement = screen.getByText('state is true', { exact: false });
    expect(trueElement).toBeInTheDocument();
  });
  test('rendering "is out of the dom or not"', () => {
    //Arrange
    render(<Example></Example>);
    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const trueElement = screen.queryByText('state is false');
    expect(trueElement).not.toBeInTheDocument();
  });
  test('renders the list items if available', async () => {
    render(<Example></Example>);

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ name: 'dhaya', age: 37 }],
    });
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
