import React from 'react';
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import FilterFrom from "./components/FilterForm"

const App = () => {

  return (
    <div>
      <FilterFrom />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
};

export default App