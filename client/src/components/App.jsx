import React from 'react';
import Form from './Form.jsx';
import PostContainer from './PostContainer.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],

    }

  }


  componentDidMount() {
    axios.get('/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
  }

  render() {
    return(
      <div>
        <Form />
        <PostContainer />
      </div>
    )
  }
}

export default App;