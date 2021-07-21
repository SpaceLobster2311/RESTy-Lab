import React, {useState} from 'react';

import './form.scss';

function Form(props) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method:e.target.methods.value,
      url: e.target.url.value,
    };
    props.handleApiCall(formData);
  }

  
    return (
      <>
        <form data-testid='formSubmit' onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <select name="methods">
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
        </form>
      </>
    );

}

export default Form;