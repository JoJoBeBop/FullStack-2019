import React from 'react'
import {filterState} from "../reducers/filterReducer";
import {connect} from "react-redux";

const Filter = (props) => {
  const anecdotes = props.anecdotes;

  const handleChange = (event) => {
    props.filterState(event.target.value, anecdotes);

  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
};

const mapDispatchToProps =  {
  filterState
}


const ConnectedFilterForm = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default ConnectedFilterForm

