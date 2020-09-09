import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LandingPage.css';
import BotIcon from '../chat/BotIcon.png';
import GoalImg from './images/purpose.png';
import ReflectionImg from './images/reflection.png';
import WorkInProgImg from './images/work_in_progress.png';


const LandingPage = ({ startChat }) => {
    return (
        <React.Fragment>
            <Container className="LPContainer">
                <div className="LPTitleAndIntro">
                    <Row>
                        <h1 className="LPPageTitle">Welcome to the Reflection Chatbot</h1>
                    </Row>
                    <Row>
                        <img className="LPBotIcon" src={BotIcon} alt="chatbot icon"/>
                    </Row>
                    <Row>
                        <p>Thank you for taking the time to participate in our capstone project. We have found that often people get so caught up in everyday life that they forget to take a step back to reflect on what is important to them. It is our hope that our chatbot will help you to analyze how you are spending your time and get you to consider how you exemplify your values through your actions. Please continue reading to find out more about the project then click the button at the bottom of the page to begin your conversation.</p>
                    </Row>
                </div>
                <Row>
                    <Col className='LPSectionTitle LightSection'>
                        <h2>Our Goal</h2> <br/>
                        <img src={GoalImg} alt='Goal_icon'/>
                    </Col>
                    <Col className='LPSectionContent'>
                        The goal of this project is to create a chatbot which will communicate with the you through text and lead you through the motivational interviewing process. This process is a counselling method that enhances motivation by exploring and resolving ambivalence. Through this technique the chatbot will help you to examine your values and consider how your actions reflect what is important to you. We also hope that this experience will help people regulate their behavior and improve the ability of self-control & self-awareness.
                    </Col>
                </Row>
                <div className="LPSectionAltColour"> 
                <Row >
                    <Col className='LPSectionTitle'>
                        <h2>Background and Motivation</h2>
                        <br />
                        <p>Everyone has different values that they want to honour but often how we spend our time contradicts the values we hold. We feel that this is primarily due to the fact that people do not have the time, capability or willingness to self-reflect. We developed this chatbot in order to help people with this process and help them to develop a stronger self-awareness.</p>
                    </Col>
                </Row>
                </div>
                <Row>
                    <Col className="LPSectionContent">
                        <h2>What's in it for you?</h2>
                        <br />
                        <p>Upon clicking the button at the bottom of this page you will be connected with our reflection chatbot who will guide you through a series of questions to help you analyze your values and how you are exhibiting those values through your action. Through this we hope you will discover more about yourself and develop a stronger sense of the values you hold and what it means to integrate those values into your everyday life. It is our belief that by knowing and exemplifying your values, you will be more content and confident in being yourself. The chatbot will also not try to force values on you but rather support you in pursuing what you feel is important.</p>
                    </Col>
                    <Col className="LPSectionImgRight">
                        <img src={ReflectionImg} alt="reflect_icon"/>
                    </Col>
                </Row>
                <div className="LPSectionAltColour">
                <Row>
                    <Col className="LPSectionTitle">
                        <h2>Work In Progress</h2><br />
                        <img src={WorkInProgImg} alt="work_in_progress"/>
                    </Col>
                    <Col className="LPSectionContent">
                    Please note that this software is still a work in progress. As such, you may experience bugs during your interaction. We would greatly appreciate it if you would help us to make the chatbot better by providing us with feedback. Please let us know if you experience any issues or have any suggestions on how your experience could have been improved. We also appreciate positive feedback, if there were things that you enjoyed about the experience. We can be contacted at reflectbot496@gmail.com.
<br/><br/>Please also note that the chatbot learns by interacting with users so your responses to the questions will be stored. This information is only used to train the chatbot’s natural language processing algorithm and identify ways to improve the chatbot. Additionally, the responses are completely anonymous and can not be traced back to you so please answer the questions openly and honestly.
<br/><br/>While we hope that you complete the conversation, feel free to stop at anytime if you feel uncomfortable by the questions asked. Just exit the page and your responses will not be recorded.
                    </Col>
                </Row>
                <Row>
                    <Button className="startChatBtn" onClick={startChat}>Start Conversation</Button>
                </Row>
                </div>
            </Container>

        </React.Fragment>
    );
};

export default LandingPage;