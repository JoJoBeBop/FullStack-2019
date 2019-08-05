import React, { useState } from "react";
import {render, fireEvent} from '@testing-library/react'
import BlogForm from "./BlogForm";

const Wrapper = (props) => {

  const onChange = (event) => {
    props.state.value = event.target.value
  };

  return (
    <BlogForm
      value={props.state.value}
      onSubmit={props.onSubmit}
      handleChange={onChange}
    />
  )


};

describe("LoginForm Tests", () => {
  test("LoginForm renders but doesnt render App", () => {
    const onSubmit = jest.fn();
    const state = {
      value: ''
    };

    const component = render(
      <Wrapper  state={state} className="loginForm"/>
    );

    component.container.querySelector(".loginForm")


  })
});