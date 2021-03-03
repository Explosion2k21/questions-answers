import React from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
class AddQuestion extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div style={{display: 'flex'}}>
          <button className="buttons" onClick={this.handleOpenModal}>Add Question +</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
              <form action="/action_page.php">
  <div className="form-group">
    <label >Email</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="form-group">
  <label >Question</label>
  <textarea className="form-control" rows="5" id="comment"></textarea>
</div>
 
  <button type="submit" className="btn btn-default">Submit Question</button>
</form>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      );
    }
  }
  
  
export default AddQuestion