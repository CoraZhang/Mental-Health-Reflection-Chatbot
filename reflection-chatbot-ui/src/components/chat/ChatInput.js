import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageActions';
import './ChatInput.css';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        //TODO: Must replace User with unique id
        this.state = {
            receiver: 'Bot',
            message: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    sendMessage = () => {
        const { receiver, message } = this.state;
        let sender = this.props.user;
        const rasaMsg = { sender, receiver, message };
        //Send message to rasa and get chatbot response
        this.props.sendMessage(rasaMsg);
        this.setState({ message: '' });
    };

    //reflect_chatbot_interaction
    emailConvo = () => {
        //console.log(this.props.messages);
        let email = this.props.messages.map(msg => {
            return msg.sender + ": '" + msg.message + "'";
        });
        //email = email.join(' \n');
        //console.log(email);
        window.emailjs.send(
            'gmail', 
            'reflect_chatbot_interaction', 
            {u_id: this.props.user, messages: email})
            .then(res => {console.log('Email Sent')})
            .catch(err => console.error('Email failed to send', err))
    };

    render() {
        return (
            <React.Fragment>
                <div className="chatInput">
                    <textarea
                        className="textArea"
                        type="text"
                        name="message"
                        placeholder="Type your message..."
                        onChange={this.onChange}
                        value={this.state.message}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                this.sendMessage();
                            };
                        }}
                    />
                    <button onClick={this.sendMessage} className="btn btn-primary submitBtn">Submit</button>
                    <button onClick={this.emailConvo} >email conversation</button>
                </div>

            </React.Fragment>
        );
    };
};

ChatInput.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    user: state.sessionID.sessionID, // Get unique session id to use for user each time page is loaded.
    messages: state.messages.messages
})

export default connect(mapStateToProps, { sendMessage })(ChatInput);