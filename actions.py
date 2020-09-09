# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message("Hello World!")
#
#         return []


from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from rasa_sdk import Action
from rasa_sdk.events import SlotSet
from rasa_sdk.forms import FormAction
from rasa_sdk import Tracker

value_meaning_dict = {
	"achievement" 		: "Achievement - to have important accomplishment",
	"family" 			: "Family - to have a happy, loving family",
	"fun" 				: "Fun - to play and have fun",
	"health" 			: "Health -  to be physically well and health",
	"mindfulness" 		: "Mindfulness - to live conscious and mindful of the present moment",
	"independence" 		: "Independence -  to be free from depending on others",
	"purpose" 			: "Purpose - to have meaning and direction in my life", 
	"self-esteem" 		: "Self-esteem - to feel good about myself", 
	"wealth" 			: "Wealth - to have plenty of money",
	"friendship" 		: "Friendship -  to have close, supportive friends", 
	"morality" 			: "Morality - to live a morally pure and excellent life",
	"romance" 			: "Romance -  to have intense, exciting love in my life",
	"responsibility" 	: "Responsibility - to make and carry out responsible decision",
	"knowledge" 		: "Knowledge - to learn and contribute valuable knowledge",
	"acceptance" 		: "Acceptance - to be accepted as I am"
}

class ActionCheckValueNum(Action):
	def name(self):
		return 'check_value_num'

	def run(self, dispatcher, tracker, domain):
		num_value = 0
		value_list = []
		for value in tracker.get_latest_entity_values('value'):
			num_value += 1
			value_list.append(value)
		#dispatcher.utter_message(",".join(value_list)) # TODO - delete

		if num_value == 1:
			slot_num_value = 'one'
			return [SlotSet('num_value', slot_num_value), SlotSet('value_focus', value_list[0])]
		elif num_value == 0:
			dispatcher.utter_message("I didn't quite get that, please select a value important to you from the list above.")
			slot_num_value = 'zero'
		else: 
			dispatcher.utter_message("You selected " + ", ".join(value_list) + ". Which one do you value the most?")
			slot_num_value = 'more'
		
		return [SlotSet('num_value', slot_num_value)]


class ActionExplainValue(Action):
	def name(self):
		return 'action_explain_value'

	def run(self, dispatcher, tracker, domain):
		num_value = 0
		value_list = []
		for value in tracker.get_latest_entity_values('value'):
			num_value += 1
			value_list.append(value)
		#dispatcher.utter_message(",".join(value_list)) # TODO - delete

		if num_value == 0:
			dispatcher.utter_message("A value is a person's belief or judgement of what is important in life. " + \
				"Ask me about a particular value, or choose your value to start!")
		else:
			dispatcher.utter_message("Meanings of the values are defined from Motivational Interviewing 3rd-Edition by W.R. Miller and S. Rollnick")
			for value in value_list:
				if value in value_meaning_dict.keys():
					dispatcher.utter_message(value_meaning_dict[value])
			dispatcher.utter_template("utter_select_a_value", tracker)

		return []

class ActionRepeat(Action):
	def name(self):
		return 'action_repeat'

	def run(self, dispatcher, tracker, domain):
		second_last_bot_msg = None
		first_bot_msg_found = False
		for item in reversed(tracker.events):
			if item.get('event') == 'bot':
				if not first_bot_msg_found:
					first_bot_msg_found = True
					print("first:")
					print(item.get('text'))
				else:
					print("second:")
					second_last_bot_msg = item.get('text')
					break
		if second_last_bot_msg is not None:
			dispatcher.utter_message(second_last_bot_msg)
		return []

class ActionCheckBehaviourNum(Action):
	def name(self):
		return 'check_behaviour_num'

	def run(self, dispatcher, tracker, domain):
		if tracker.get_slot('value_focus') is None:
			dispatcher.utter_message("Looks like you have not chosen a value for reflection.")
			dispatcher.utter_template("utter_select_a_value", tracker)
			return []

		num_action = 0
		action_list = []
		for action in tracker.get_latest_entity_values('activity'):
			num_action += 1
			action_list.append(action)
		#dispatcher.utter_message(",".join(action_list)) # TODO - delete

		if num_action == 3:
			return [SlotSet('num_act', 'three'), SlotSet('act_1', action_list[0]), SlotSet('act_2', action_list[1]), SlotSet('act_3', action_list[2])]
		elif num_action > 3:
			dispatcher.utter_message("I've detected more than three activities from your response" + \
				", ".join(action_list) + ". Please enter only the three activities you spend most of your time doing.")
			return [SlotSet('num_act', 'more')]
		elif num_action == 0:
			dispatcher.utter_message("I did not detect any activities from your response.")
			return [SlotSet('num_act', 'zero')]
		else:
			dispatcher.utter_message("I've only detected {} activity(ies) from your response".format(str(num_action)))
			return [SlotSet('num_act', 'less')]

class ActionSwitchActivity(Action):
	def name(self):
		return 'action_switch_activity'

	def run(self, dispatcher, tracker, domain):
		if not tracker.get_slot('acts_done'):
			# TODO - switch activities to 1, 2, 3
			if not tracker.get_slot('curr_act'):
				dispatcher.utter_message("First, let focus on {}.".format(tracker.get_slot('act_1')))
				return [SlotSet('acts_done', False), SlotSet('curr_act', tracker.get_slot('act_1'))]
			elif tracker.get_slot('curr_act') == tracker.get_slot('act_1'):
				dispatcher.utter_message("Now we will focus on {}.".format(tracker.get_slot('act_2')))
				return [SlotSet('acts_done', False), SlotSet('curr_act', tracker.get_slot('act_2'))]
			elif tracker.get_slot('curr_act') == tracker.get_slot('act_2'):
				dispatcher.utter_message("Last but not least, let's talk about {}.".format(tracker.get_slot('act_3')))
				return [SlotSet('acts_done', False), SlotSet('curr_act', tracker.get_slot('act_3'))]
			elif tracker.get_slot('curr_act') == tracker.get_slot('act_3'):
				dispatcher.utter_message("We will now ask you questions on your overall behaviour!")
				return [SlotSet('acts_done', True), SlotSet('curr_act', 'general')]


class ActionCheckWeeklyHour(Action):
	# TODO - check the number written in text e.g. "two" as suppose to "2"
	def name(self):
		return 'check_weekly_hour'

	def run(self, dispatcher, tracker, domain):
		weekly_hour = float(next(tracker.get_latest_entity_values('number'), None))
		curr_act = tracker.get_slot('curr_act')
		if weekly_hour > 168:
			dispatcher.utter_message("There are only 168 hours in a week! Please enter a valid number of hour.")
			return []
		elif weekly_hour <= 0:
			dispatcher.utter_message("It seems impossible to spend less than 0 hours on an activity. Please enter a valid value!")
			return []
		elif weekly_hour > 50:
			dispatcher.utter_message("Are you sure you spend {} weekly on {}? ".format(str(weekly_hour), curr_act) + \
				"It would mean you spend more than about 7 hours per day on {}".format(curr_act))
		else:
			dispatcher.utter_message("You spend {} hours weekly on {}, correct?".format(str(weekly_hour), curr_act))

		return [SlotSet('act1_time' if curr_act == tracker.get_slot('act_1') else ('act2_time' if curr_act == tracker.get_slot('act_2') else 'act3_time'), weekly_hour)]

class ActionSetActAlign(Action):
	def name(self):
		return 'set_act_align'

	def run(self, dispatcher, tracker, domain):
		curr_act = tracker.get_slot('curr_act')
		if tracker.latest_message['intent'].get('name') == 'affirm':
			alignment = True
		elif tracker.latest_message['intent'].get('name') == 'deny':
			alignment = False

		return [SlotSet('act1_align' if curr_act == tracker.get_slot('act_1') else ('act2_align' if curr_act == tracker.get_slot('act_2') else 'act3_align'), alignment)]

class ActionSetActCont(Action):
	def name(self):
		return 'set_act_cont'

	def run(self, dispatcher, tracker, domain):
		curr_act = tracker.get_slot('curr_act')
		if tracker.latest_message['intent'].get('name') == 'affirm':
			cont = True
		elif tracker.latest_message['intent'].get('name') == 'deny':
			cont = False

		return [SlotSet('act1_cont' if curr_act == tracker.get_slot('act_1') else ('act2_cont' if curr_act == tracker.get_slot('act_2') else 'act3_cont'), cont)]


class ActionAskWhyCont(Action):
	def name(self):
		return 'ask_why_cont'

	def run(self, dispatcher, tracker, domain):
		curr_act = tracker.get_slot('curr_act')
		value_focus = tracker.get_slot('value_focus')

		if curr_act == tracker.get_slot('act_1'):
			is_align = tracker.get_slot('act1_align')
			will_cont = tracker.get_slot('act1_cont')
		elif curr_act == tracker.get_slot('act_2'):
			is_align = tracker.get_slot('act2_align')
			will_cont = tracker.get_slot('act2_cont')
		elif curr_act == tracker.get_slot('act_3'):
			is_align = tracker.get_slot('act3_align')
			will_cont = tracker.get_slot('act3_cont')

		if not is_align and will_cont:
			dispatcher.utter_message("You think {} is not aligned with {}, why do you think you should continue {}?".format(curr_act, value_focus, curr_act))
		elif is_align and not will_cont:
			dispatcher.utter_message("You think {} is aligned with {}, why do you think you should not continue {}?".format(curr_act, value_focus, curr_act))

		return []


class ActionReportTime(Action):
	def name(self):
		return 'action_report_weekly_time'

	def run(self, dispatcher, tracker, domain):
		total_hour = 0
		total_hour += float(tracker.get_slot('act1_time')) if tracker.get_slot('act1_align') else 0
		total_hour += float(tracker.get_slot('act2_time')) if tracker.get_slot('act2_align') else 0
		total_hour += float(tracker.get_slot('act3_time')) if tracker.get_slot('act3_align') else 0
		total_hour += float(tracker.get_slot('other_time'))

		dispatcher.utter_message("You spend around {} hours per week doing activities that you think align with {}".format(str(total_hour), tracker.get_slot('value_focus')))
		return [SlotSet('total_time', total_hour)]


class ActionSetOther(Action):
	def name(self):
		return 'action_set_other_time'

	def run(self, dispatcher, tracker, domain):
		weekly_hour = float(next(tracker.get_latest_entity_values('number'), None))
		return [SlotSet('other_time', weekly_hour)]


class ActionPlan(Action):
	def name(self):
		return 'action_plan'

	def run(self, dispatcher, tracker, domain):
		act_to_replace = self.get_act_to_replace(tracker)

		value_focus = tracker.get_slot('value_focus')
		add_act = tracker.get_slot('add_act')
		
		if act_to_replace:
			act_to_replace = tracker.get_slot('act_' + act_to_replace)
			dispatcher.utter_message("Since you think that {} is not aligned with {}, and that you should not continue doing it. ".format(act_to_replace, value_focus) + \
				"I suggest that you reduce your time you spend on {} and replace it with {}. ".format(act_to_replace, add_act) + \
				"This way you will spend more time on things aligning with {}!".format(value_focus))
			return [SlotSet('act_to_replace', act_to_replace)]
		else:
			dispatcher.utter_message("Maybe you should start {} for total of 2-3 hours every week. That should help you align your behaviour to {}".format(add_act, value_focus))
			return [SlotSet('act_to_replace', None)]

	def get_act_to_replace(self, tracker):
		score_1 = self.scoring(float(tracker.get_slot('act1_time')), tracker.get_slot('act1_align'), tracker.get_slot('act1_cont'))
		score_2 = self.scoring(float(tracker.get_slot('act2_time')), tracker.get_slot('act2_align'), tracker.get_slot('act2_cont'))
		score_3 = self.scoring(float(tracker.get_slot('act3_time')), tracker.get_slot('act3_align'), tracker.get_slot('act3_cont'))

		score = max(score_1, score_2, score_3)

		if score < 0:
			return None
		if score == score_1:
			return '1'
		elif score == score_2:
			return '2'
		elif score == score_3:
			return '3'

	def scoring(self, hours, align, cont):
		score = hours
		score *= -1 if (align or cont) else 1
		return score


class ActionSetAddAct(Action):
	def name(self):
		return 'action_set_additional_act'

	def run(self, dispatcher, tracker, domain):
		act = next(tracker.get_latest_entity_values('activity'), None)
		return [SlotSet('add_act', act)]
