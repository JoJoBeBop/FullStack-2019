import React from 'react'
import {render, waitForElement} from '@testing-library/react'

jest.mock('./services/blogs');
import App from './App'

describe('<App />', () => {


  /*  test('renders all notes it gets from backend', async () => {
      let component;

      component = render(
        <App/>
      );
      component.rerender(<App/>);

      await waitForElement(() => component.getByText("Login Application"));

      const app = component.container.querySelectorAll('.App');

      /!*If login screen is rendered, Blogs are not*!/
      expect(component.container).toHaveTextContent("Login Application");
      expect(component.container).not.toHaveTextContent("Blogs")


    })*/

  test('renders blogs a logged in user', async () => {
    // login
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester',
    };

    localStorage.setItem('loggedBlogappUser', JSON.stringify(user));

    const component = render(<App/>);
    component.rerender(<App/>);

    await waitForElement(() => component.container.querySelector(".titleAuthor"));

    const blogs = component.container.querySelectorAll('.titleAuthor');
    expect(component.container).toHaveTextContent(
      'React patterns'
    );
  });

  /*  test("Blogs are rendered when an user is logged in", async () => {

      const user = {
        username: 'tester',
        token: '1231231214',
        name: 'Donald Tester'
      }

      localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

      console.log(localStorage);
      const component = render(<App user={user}/>);

      component.rerender(<App/>);

  /!*
      await waitForElement(() => component.container.querySelector(".titleAuthor"));
  *!/
      await waitForElement(() => component.getByText("Welcome"));



      const blogs = component.container.querySelectorAll('.titleAuthor');
      expect(blogs.length).toBe(6);

      expect(component.container).toHaveTextContent(
        'React patterns'
      );
      expect(component.container).toHaveTextContent(
        'Edsger W. Dijkstra'
      );
      expect(component.container).toHaveTextContent(
        'First class tests'
      )


    })*/
});