import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import React from 'react'

describe('<Blog/>', () => {

  let component
  const blog = {
    title: 'TestTitle',
    author: 'TestAuthor',
    url: 'TestUrl',
    likes: 0,
    user: {
      id: '123456',
      name: 'Test User',
      username: 'Test'
    }
  }

  const user = {
    id: '123456',
    name: 'Test User',
    username: 'Test'
  }


  component = render(
    <Blog buttonLabel="Like" blog={blog}>
      <div className="testDiv"/>
    </Blog>
  )

  test('Blog renders its children', () => {
    component.container.querySelector('.testDiv')
  })

  /*  test('Blog displays it children title and author at the start', () => {
    component = render(
      <Blog blog={blog}/>
    );

    const titleAuthor = component.container.querySelector('.titleAuthor');
    expect(titleAuthor).toHaveTextContent("TestTitle", "TestAuthor");
  });

  test('Blog renders children url and likes etc. after area has been clicked', () => {
    component = render(
      <Blog
        blog={blog}
        user={user}
        checkUserFunc={() => checkUserFunc(blog)}
        showFunc={() => showFunc(blog)}
      />
    );

    const title = component.container.querySelector('.titleAuthor');
    fireEvent.click(title);

    expect(component.container).toHaveTextContent("TestTitle", "TestAuthor", "TestUrl", "0");

  })*/

})