import React from 'react';
import ReactModal from 'react-modal';

import axios from 'axios';
ReactModal.setAppElement('#app');
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      email: "",
      body: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // this function is to change the inputs values
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value

    })
    console.log(this.state)
  }
  // this function is to post a new question into the questions list
  onSubmit() {
    console.log('PRODUCTID', this.props.product_id)
    axios.post(`/add`, { name: this.state.name, email: this.state.email, body: this.state.body, product_id: +this.props.product_id }).then((res) => {
      console.log("ressss",res)
      this.props.fetch()
      this.setState({name:"", email:"", body:""})
    }).catch((err) => {
      console.log(err)
    })
  }
// this function is to open the modal
  handleOpenModal() {
    this.setState({ showModal: true });
  }
// this function is close the modal
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button className="buttons" onClick={this.handleOpenModal} >Add Question +</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <form style={{ marginLeft: "90px" }} className="form" action="/action_page.php">
            <div className="form-group">
              <label >Email</label>
              <input type="email" className="form-control" id="email" style={{ width: "500px", height: "40px", marginBottom: "20px" }} value={this.state.email} onChange={(e) => this.handleChange(e)} />
            </div>
            <div className="form-group">
              <label >Name</label>
              <input type="text" className="form-control" id="name" style={{ width: "500px", height: "40px", marginBottom: "20px" }} value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </div>
            <div className="form-group">
              <label >Question</label>
              <textarea className="form-control" rows="5" id="body" style={{ width: "500px", height: "150px", marginBottom: "20px" }} value={this.state.body} onChange={(e) => this.handleChange(e)}></textarea>
            </div>

            <button type="submit" className="btn btn-default" style={{ marginLeft: "170px", padding: "15px 5px", width: "150px", cursor: "pointer" }} onClick={(e) => {e.preventDefault();this.onSubmit() }}>Submit Question</button>
          </form>
          <button style={{ marginLeft: "260px", marginTop: "150px", padding: "15px 10px", width: "150px", cursor: "pointer" }} onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}


export default AddQuestion