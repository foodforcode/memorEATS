import React from 'react';
import Form from './Form.jsx';
import PostContainer from './PostContainer.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.submitNewPost = this.submitNewPost.bind(this);
    this.updatePosts = this.updatePosts.bind(this);
  }

  submitNewPost (e, data) {
    e.preventDefault();
    console.log('submitted', data);
    axios.post('/post', data)
      .then((response) => {
        this.setState({
          showModal: false,
          posts: response.data
        })
      })
      .catch((reject) => {
        console.log('failed to get all posts', reject);
      })
      this.updatePosts();
  }

  updatePosts () {
    axios.get('/posts')
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data
        });
      })
      .catch((reject) => {
        console.log('failed to get posts', reject);
      })
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  componentDidMount() {
    this.updatePosts();
  }

  render() {
    return(
      <div className="app">
        {this.state.showModal ?
        <Form submitNewPost={this.submitNewPost} closeModal={this.toggleModal} showModal={this.state.showModal} />
        : (
          <button
            type="button"
            className="btn btn-dark btn-add"
            onClick={this.toggleModal}>
            Add more
          </button>
          )
        }
        <PostContainer posts={this.state.posts} />
      </div>
    )
  }
}

export default App;