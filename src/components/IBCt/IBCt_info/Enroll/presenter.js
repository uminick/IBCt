import React from 'react';
import './styles.scss';
import {Button, Input,Label, Form, FormGroup, Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

const Enroll= props => [
    <div >
        <Button outline color="primary" onClick={props.toggle}>ENROLL</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} id="modal_send">
            <ModalHeader toggle={props.toggle} >
            <h1 className="ModalHeader">Enroll</h1>
            <p>Enroll Contract</p>
            </ModalHeader>
            <ModalBody>
            <Form >
            <FormGroup >
                    <Label htmlFor="receiver">From: </Label>
                    <Input
                    type="text"
                    id="sender"
                    name="sender"
                    className="sender"
                    disabled
                    value={props.username}
                    />
            </FormGroup>
            <FormGroup >
                    <Label htmlFor="receiver">Send To: </Label>
                    <Input
                    type="text"
                    id="receiver"
                    name="receiver"
                    className="receiver"
                    disabled
                    value="contractmngm"
                    />
            </FormGroup>
                <FormGroup >
                <Label htmlFor="contractorA"> Contractor A: </Label>
                <Input 
                type="text"
                id="contractorA"
                name="contractorA"
                placeholder=" Contractor A's name"
                required="true"
                onChange={props.handleChange}
                />
                </FormGroup>
                <FormGroup >
                <Label htmlFor="contractorB"> Contractor B: </Label>
                <Input 
                type="text"
                id="contractorB"
                name="contractorB"
                placeholder=" Contractor B's name"
                required="true"
                onChange={props.handleChange}
                />
                </FormGroup>
                <FormGroup >
                <Label htmlFor="title"> Title: </Label>
                <Input 
                type="text"
                id="title"
                name="title"
                placeholder=" Title of Contract"
                required="true"
                onChange={props.handleChange}
                />
                </FormGroup>
                <FormGroup >
                <Label htmlFor="hashValue"> Hash Value: </Label>
                <Input 
                type="text"
                id="hashValue"
                name="hashValue"
                placeholder=" image hash code"
                required="true"
                onChange={props.handleChange}
                />
                </FormGroup>
                <FormGroup >
                <Label htmlFor="fileUrl"> File url: </Label>
                <Input 
                type="text"
                id="fileUrl"
                name="fileUrl"
                placeholder=" image url"
                required="true"
                onChange={props.handleChange}
                />
                </FormGroup>

                <FormGroup className="enroll_btn">
                <Button
                type="submit"
                name="enroll"
                id="enroll"
                color="primary"
                required="true"
                onClick={props.submit}
                >Enroll</Button>
                </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
            
          </ModalFooter>
        </Modal>
    </div>
]

export default Enroll;