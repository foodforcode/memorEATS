import React from 'react';
import Form from './Form.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      location: '',
      body: '',

    }

  }

  render() {
    return(
      <div>
        <Form />
      </div>
    )
  }
}

export default App;