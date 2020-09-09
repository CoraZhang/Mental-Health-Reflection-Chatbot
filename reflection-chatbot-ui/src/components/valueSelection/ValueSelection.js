import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/messageActions';
import SelectableCard from './selectableCard/SelectableCard';
import './ValueSelection.css';
import Button from 'react-bootstrap/Button';

import AchieveIcon from './ValueIcons/AchievementIcon.png';
import FamilyIcon from './ValueIcons/family.png';
import AdventureIcon from './ValueIcons/fun.png';
import HealthIcon from './ValueIcons/health.png';
import MindfulnessIcon from './ValueIcons/mindfulness.png';
import IndependenceIcon from './ValueIcons/independence.png';
import PurposeIcon from './ValueIcons/purpose.png';
import SelfEsteemIcon from './ValueIcons/self-esteem.png';
import WealthIcon from './ValueIcons/wealth.png';
import FriendshipIcon from './ValueIcons/friendship.png';
import MoralityIcon from './ValueIcons/morality.png';
import RomanceIcon from './ValueIcons/romance.png';
import ResponsibilityIcon from './ValueIcons/Responsibility.png';
import KnowledgeIcon from './ValueIcons/knowledge.png';
import AcceptanceIcon from './ValueIcons/acceptance.png';

import AchieveIconAlt from './ValueIcons/AchievementIcon-alt.png';
import FamilyIconAlt from './ValueIcons/family-alt.png';
import AdventureIconAlt from './ValueIcons/fun-alt.png';
import HealthIconAlt from './ValueIcons/health-alt.png';
import MindfulnessIconAlt from './ValueIcons/mindfulness-alt.png';
import IndependenceIconAlt from './ValueIcons/independence-alt.png';
import PurposeIconAlt from './ValueIcons/purpose-alt.png';
import SelfEsteemIconAlt from './ValueIcons/self-esteem-alt.png';
import WealthIconAlt from './ValueIcons/wealth-alt.png';
import FriendshipIconAlt from './ValueIcons/friendship-alt.png';
import MoralityIconAlt from './ValueIcons/morality-alt.png';
import RomanceIconAlt from './ValueIcons/romance-alt.png';
import ResponsibilityIconAlt from './ValueIcons/Responsibility-alt.png';
import KnowledgeIconAlt from './ValueIcons/knowledge-alt.png';
import AcceptanceIconAlt from './ValueIcons/acceptance-alt.png';

let values = [{
    name: "Achievement",
    descript: "to have important accomplishments",
    icon: AchieveIcon,
    altIcon: AchieveIconAlt
},
{
    name: "Family",
    descript: "to have a happy, loving family",
    icon: FamilyIcon,
    altIcon: FamilyIconAlt
},
{
    name: "Fun",
    descript: "to play and have fun; to have new and exciting experiences",
    icon: AdventureIcon,
    altIcon: AdventureIconAlt
},
{
    name: "Physical Health",
    descript: "to be physically well and healthy",
    icon: HealthIcon,
    altIcon: HealthIconAlt
},
{
    name: "Mindfulness",
    descript: "to be mentally well and healthy",
    icon: MindfulnessIcon,
    altIcon: MindfulnessIconAlt
},
{
    name: "Independence",
    descript: "to be free from depending on others",
    icon: IndependenceIcon,
    altIcon: IndependenceIconAlt
},
{
    name: "Purpose",
    descript: "to have meaning and direction in my life",
    icon: PurposeIcon,
    altIcon: PurposeIconAlt
},
{
    name: "Self-esteem",
    descript: "to feel good about myself",
    icon: SelfEsteemIcon,
    altIcon: SelfEsteemIconAlt
},
{
    name: "Wealth",
    descript: "to have plenty of money",
    icon: WealthIcon,
    altIcon: WealthIconAlt
},
{
    name: "Friendship",
    descript: "to have close, supportive friends",
    icon: FriendshipIcon,
    altIcon: FriendshipIconAlt
},
{
    name: "Morality",
    descript: "to live a morally pure and excellent life",
    icon: MoralityIcon,
    altIcon: MoralityIconAlt
},
{
    name: "Romance",
    descript: "to have intense, exciting love in my life",
    icon: RomanceIcon,
    altIcon: RomanceIconAlt
},
{
    name: "Responsibility",
    descript: "to make and carry out responsible decisions",
    icon: ResponsibilityIcon,
    altIcon: ResponsibilityIconAlt
},
{
    name: "Knowledge",
    descript: "to learn and contribute valuable knowledge",
    icon: KnowledgeIcon,
    altIcon: KnowledgeIconAlt
},
{
    name: "Acceptance",
    descript: "to be accepted as I am",
    icon: AcceptanceIcon,
    altIcon: AcceptanceIconAlt
}];
var maxValuesAllowed = 1;

class ValueSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenVals: [],
            numChosen: 0
        };
    }

    selectVal = (valName) => {
        let currentVals = this.state.chosenVals;
        let currentNum = this.state.numChosen;

        // Check if we are selecting or deselecting
        let isDeselect = this.state.chosenVals.includes(valName);

        if (isDeselect) {
            // Delete the entry from the array
            let newValsList = [...currentVals];
            let idx = newValsList.indexOf(valName);
            if (idx !== -1) {
                newValsList.splice(idx, 1);
                currentNum = currentNum - 1;
                this.setState({chosenVals: newValsList, numChosen: currentNum});
            }
        }
        else {
            if (currentNum === maxValuesAllowed) {
                let newValsList = [...currentVals, valName];
                newValsList.shift();
                this.setState({ chosenVals: newValsList });
            }
            else {
                let newValsList = [...currentVals, valName];
                currentNum = currentNum + 1;
                this.setState({ chosenVals: newValsList, numChosen: currentNum });
            }
        }
    };

    sendValues = () => {
        let sender = this.props.user;
        let receiver = 'Bot';
        let message = this.state.chosenVals.join(', ');
        const rasaMsg = { sender, receiver, message };
        //Send message to rasa and get chatbot response
        this.props.sendMessage(rasaMsg);
        this.props.exitValueSelect();
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3 className='intro' >Welcome to the Reflection Chatbot! <br />Please select the value that is most important to you to begin.</h3>
                    <div className='cardDisplay'>
                        {values.map((value) => (
                            <div key={value.name}>
                                <SelectableCard isSelected={this.state.chosenVals.includes(value.name)} onClick={this.selectVal} title={value.name} descript={value.descript} icon={value.icon} altIcon={value.altIcon}/>
                            </div>
                        ))}
                    </div>
                    <Button disabled={this.state.numChosen !== maxValuesAllowed} onClick={this.sendValues} className="valSubmitBtn">Submit Values</Button>

                </div>

            </React.Fragment>
        )
    };
};

ValueSelection.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    user: state.sessionID.sessionID // Get unique session id to use for user each time page is loaded.
})

export default connect(mapStateToProps, { sendMessage })(ValueSelection);