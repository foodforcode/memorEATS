import React from 'react';
import search from '../../../database/controllers/yelpSearch.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      name: '',
      location: '',
      image: '',
      body: '',
    }
    this.setDate = this.setDate.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.searchLocation = this.searchLocation.bind(this);
    this.updateStateValue = this.updateStateValue.bind(this);
  }

  setDate (e) {
    this.setState({
      date: e.target.value
    });
  }

  searchLocation (e) {
    this.setState({
      location: e.target.value
    })
  }

  updateStateValue (e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  handlePhoto(e) {
    console.log(e.target.files);
    this.setState({
      image: e.target.files[0]
    })
  }

  uploadPhoto (e) {

  }

  closeModal () {
    this.props.closeModal();
  }

  submitForm (e) {
    e.preventDefault();
    this.closeModal();
    this.props.submitNewPost(e, this.state);
  }

  render() {
    const divStyle = {
      display: this.props.showModal ? 'block' : 'none'
    }
    return (
      <>
      <div>
        {this.props.showModal ?
          <div
            className="Modal fadeTransition"
            onClick={this.closeModal}
            style={divStyle}>
            <div
            className="Modal-Content slideTransition"
            onClick={e => e.stopPropagation()}>
      <button type="button" className='btn-close btn btn-close-modal' onClick={this.closeModal}>✖</button>
        <form className="row col-lg-12 validated" onSubmit={this.submitForm}>
          <span></span>
          <div className="col-md-12">
            <label htmlFor="validationServer01" className="form-label">Date</label>
            <input
            type="date"
            className="form-control"
            id="validationServer01"
            name="date"
            value={this.state.date}
            onChange={this.setDate}
            autoComplete="off"
            required />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationServer02" className="form-label">Name</label>
            <input
            type="text"
            className={this.state.name.length > 0 ? "form-control" : "form-control .is-valid"}
            id="validationServer02"
            name="name"
            value={this.state.name}
            onChange={this.updateStateValue}
            autoComplete="off"
            required />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationServerUsername" className="form-label">Location</label>
            <div className="input-group has-validation">
              <input
              type="text"
              className="form-control"
              id="validationServerUsername"
              name="location"
              value={this.state.location}
              onChange={this.searchLocation}
              autoComplete="off"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required/>
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationImage" className="form-label">Image</label>
            <div className="input-group has-validation">
              <input
              type="file"
              className="form-control"
              id="validationImage"
              name="image"
              onChange={this.handlePhoto}
              />
            </div>
          </div>
          <div className="col-md-12">
            <label
            htmlFor="validationServer03"
            className="form-label">Memories</label>
            <textarea
            type="text"
            name="body"
            className="form-control"
            id="validationServer03"
            value={this.state.body}
            onChange={this.updateStateValue}
            autoComplete="off"
            aria-describedby="validationBody"
            rows="3"
            required />
          </div>
          <div className="col-12">
            <button className="btn btn-light btn-submit" type="submit">Submit form</button>
          </div>
        </form>
        </div>
          </div>
        : (null)}
      </div>
      </>
    )
  }
}

export default Form;