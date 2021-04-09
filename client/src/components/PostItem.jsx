import React from 'react';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal (e) {
    e.preventDefault();
    console.log('show');
    this.setState({
      displayModal: true
    })
  }

  closeModal () {
    console.log('close');
    this.setState({
      displayModal: false
    })
  }

  render() {
    const divStyle = {
      display: this.state.displayModal ? 'block' : 'none'
    }
    return (
      <div className="card col-md-4 col-lg-4 col-sm-6" key={this.props.id}>
        <h4 className="card-title post-name">📍 {this.props.name}</h4>
        <p>on {this.props.date} in {this.props.location}</p>
        <div className="card-body">
          {this.props.body}
          <div className="img-container">
          {this.props.url ? <img className="img-item" width="100px" src={`${this.props.url}`} onClick={this.showModal}/>
          : (null)}
          </div>
        </div>
        {this.state.displayModal ?
          <div className="Modal"
            onClick={this.closeModal}
            style={divStyle}
          >
            <div
            className="Modal-Img fadeTransition"
            onClick={e => e.stopPropagation()}
            >
           <img className="img-modal" max-width="200px" src={`${this.props.url}`} onClick={this.closeModal}/>
            </div>
          </div>
          : (null)
        }
      </div>
    )
  }
}

export default PostItem;