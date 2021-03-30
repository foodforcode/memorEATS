import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <h3>Where did you eat?</h3>
        <form>
          <input
            name="name"
            autoComplete="off"
            required />
          <button>Save</button>
        </form>
      </>
    )
  }
}

export default Form;