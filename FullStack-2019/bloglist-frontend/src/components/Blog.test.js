import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'
import Blog from "./Blog"

test('Render title, url, author and likes', () => {
  const blog = {
    title: 'title',
    author: 'author',
    url: 'url',
    likes: 0

  };
  const component = render(
    <SimpleBlog blog={blog} />
  );
/*
  component.debug();
*/

  expect(component.container).toHaveTextContent('title')
});

test("Clicking the button calls given function twice", async () => {
  const blog = {
    title: 'Title',
    author: 'author',
    url: 'url',
    likes: 0
  };

  const mockFunction = jest.fn();

  const {getByText} = render(
    <SimpleBlog blog={blog} likeBlog={mockFunction}/>
  );

  const button = getByText("Like");
  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockFunction.mock.calls.length).toBe(2)
});

