import React  from 'react';
import {
  Modal,
} from 'react-bootstrap';
import CreatePoll from'./CreatePoll';


const ModalCreatePoll = (props) =>{
 

  return (
    <>
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Create Poll
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <CreatePoll onHide={props.onHide} />

    </Modal.Body>
  </Modal>
    </>
  );
};

export default ModalCreatePoll;
