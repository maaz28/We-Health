import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { MdDelete, MdEdit } from 'react-icons/md';

export default class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        {/* <Button onClick={this.toggle}>Click Me!</Button> */}
        {/* onClick = { () => this.props.deleteHandler(this.props.id)} */} 
        <Button onClick={this.toggle} theme="light" style = {{marginRight : '8px'}}>
                <MdDelete />
                </Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalBody>
             <div> Are you sure you want to delete this ? </div>
             <Button theme="danger" onClick = { () => { this.props.deleteHandler(this.props.id); this.toggle() }}>Delete</Button>
      <Button theme="light" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}