import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ConsentForm.css';

const ConsentForm = ({ handleClose, show }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop='static'
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reflection Chatbot Consent Form
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='display-linebreak-consentForm'>
                    We would like to invite you to participate in our project, as part of the University of Toronto’s Engineering Capstone Design Project. Please read the explanation about the project and its risks and benefits before you decide to participate. Feel free to ask us any questions you would like clarified before making a decision.
                </p>
                <p className='display-linebreak-consentForm'>
                    Our goal for this project is to create a chatbot that is able to help a person reflect on their actions and values. To accomplish this, large amounts of conversation data is needed. Thus we will be anonymously storing your responses to the questions asked. The data will be used to adjust the chatbot to real world users and to improve the chatbots ability to converse.  Thus the purpose of this research is to see how different users react to the chatbot and what kind of responses the users offer. This will allow the investigators to improve the bot, and to measure how users respond to it.
                </p>
                <p className='display-linebreak-consentForm'>
                    You will be required to talk to the chatbot. You may converse with the bot as long as you want. The questions the chatbot asks may cause emotional discomfort in some individuals. However you are encouraged to stop conversing with the chatbot anytime if this happens.
                </p>
                <p className='display-linebreak-consentForm'>
                    Your participation is voluntary and you may decline to participate. Also, you may withdraw at any time without any negative consequences. All information obtained will be held in strict confidence. If you do not complete the conversation with the chatbot, the data will not be collected. Please understand that there is no compensation for participating in this experiment.
                </p>
                <p className='display-linebreak-consentForm'>
                    If you have any questions or concerns, you can contact the Principal Investigator, Rajarupan Sampanthan at rajarupan.sampanthan@mail.utoronto.ca. You can also contact the Office of Research Ethics at the University of Toronto at ethics.review@utoronto.ca or at 416-946-3273 to inquire about your rights as participants or any other concerns.
                </p>
                <p className='display-linebreak-consentForm'>
                    By agreeing to click the “I agree” below, you are indicating that you have carefully read the information provided above and are agreeing to participate in the experiment.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="agreeBtn" onClick={handleClose}>I Agree</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConsentForm;