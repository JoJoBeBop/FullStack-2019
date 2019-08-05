import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value) || console.log(value);
  const resetInput = () => {setValue("")};

  return {
    resetInput,
    type,
    value,
    onChange
  }
};