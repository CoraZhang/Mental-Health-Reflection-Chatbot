## happy path
* greet
  - utter_greet
* mood_great
  - utter_happy

## sad path 1
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* affirm
  - utter_happy

## sad path 2
* greet
  - utter_greet
* mood_unhappy
  - utter_cheer_up
  - utter_did_that_help
* deny
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot

## interactive_story_0
* choose_value{"value": "family"}
  - check_value_num

## interactive_story_1
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - utter_confirm_value

## interactive_story_2
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "more"}

## happy_path 
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_deny_decision
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* deny
    - utter_select_a_value
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_more_than_one_values
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_zero_values
* choose_value
    - check_value_num
    - slot{"num_value": "zero"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_ask_chatbot_purpose_boring
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* sounds_boring
    - utter_give_it_a_try
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_ask_chatbot_purpose_interesting
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* sounds_cool
    - utter_agree_interesting
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_general
* explain_chatbot_purpose
    - utter_state_chatbot_purpose
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* deny
    - utter_select_a_value
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## sad_path_explain_values
* explain_value
    - action_explain_value
* explain_value{"value": "achievement"}
    - action_explain_value
* explain_value{"value": "family"}
    - action_explain_value
* choose_value{"value": "friendship"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "friendship"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## stop_convo_path_affirm
* stop_convo OR goodbye
    - utter_ask_stop
* affirm
    - utter_goodbye
    - action_restart

## stop_convo_path_deny
* stop_convo OR goodbye
    - utter_ask_stop
* deny
    - action_repeat

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "more"}
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities


## interactive_story_1
* greet
    - utter_greet
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* explain_value{"value": "health"}
    - action_explain_value
* stop_convo
    - utter_ask_stop
* deny
    - action_repeat
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities

## interactive_story_1
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* stop_convo
    - utter_ask_stop
* affirm
    - utter_goodbye
    - action_restart

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "singing"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "singing"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again



## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "playing video games"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "drinking alcohol"}
    - slot{"act_2": "sleeping"}
    - slot{"act_3": "playing video games"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again
* behaviour_describe{"activity": "singing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "singing"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "fun"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "fun"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe
    - check_behaviour_num
    - slot{"num_act": "zero"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "fixing"}
    - check_behaviour_num
    - slot{"num_act": "less"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "more"}
    - utter_your_top_activities_again
* behaviour_describe{"activity": "drinking"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "working"}
    - slot{"act_2": "sleeping"}
    - slot{"act_3": "drinking"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "reading"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "jogging"}
    - slot{"act_2": "exercising"}
    - slot{"act_3": "reading"}
    - utter_confirm_activities
* affirm
> activity_focus
    

## interactive_story_1
* choose_value{"value": "fun"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "fun"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "working"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "exercising"}
    - slot{"act_3": "working"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "jogging"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "playing computer games"}
    - slot{"act_3": "jogging"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "watching tv"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "painting"}
    - slot{"act_2": "reading"}
    - slot{"act_3": "watching tv"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "fun"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "fun"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "reading"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "sleeping"}
    - slot{"act_3": "reading"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again
* behaviour_describe{"activity": "partying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching tv"}
    - slot{"act_2": "playing video games"}
    - slot{"act_3": "partying"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "purpose"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "purpose"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "dancing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "singing"}
    - slot{"act_3": "dancing"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "reading"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching netflix"}
    - slot{"act_2": "studying"}
    - slot{"act_3": "reading"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "reading"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching netflix"}
    - slot{"act_2": "studying"}
    - slot{"act_3": "reading"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "painting"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "cooking"}
    - slot{"act_3": "painting"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "mindfulness"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "mindfulness"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "drawing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "writing"}
    - slot{"act_3": "drawing"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "reading"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching youtube"}
    - slot{"act_2": "cooking"}
    - slot{"act_3": "reading"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "playing computer games"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "romance"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "romance"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "painting"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising with boyfriend"}
    - slot{"act_2": "playing computer games"}
    - slot{"act_3": "painting"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "singing"}
    - slot{"act_3": "studying"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "singing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "swimming"}
    - slot{"act_2": "exercising"}
    - slot{"act_3": "singing"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "singing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "swimming"}
    - slot{"act_2": "exercising"}
    - slot{"act_3": "singing"}
    - utter_confirm_activities
* affirm
> activity_focus

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "spending time with friends"}
    - slot{"act_2": "cooking"}
    - slot{"act_3": "studying"}
    - utter_confirm_activities
* affirm
> activity_focus


> activity_focus
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "spending time with friends"}
    - utter_ask_hour_on_act
* describe_hour{"number": "3"}
    - check_weekly_hour
    - slot{"act1_time": 3.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - ask_why_cont
* inform{"value": "friendship"}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "cooking"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act2_time": 5.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act2_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "studying"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act3_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* describe_hour{"number": "0"}
    - action_set_other_time
    - slot{"other_time" : 0.0}
    - action_report_weekly_time
    - utter_ask_good_behaviour

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "playing video games"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching videos"}
    - slot{"act_2": "exercising"}
    - slot{"act_3": "playing video games"}
    - utter_confirm_activities
* affirm
> activity_focus

> activity_focus
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching videos"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act1_time": 8.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act1_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act2_time": 8.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act2_align": true}
    - utter_how_is_aligned
* inform{"value": "strength"}
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing video games"}
    - utter_ask_hour_on_act
* describe_hour{"number": "12"}
    - check_weekly_hour
    - slot{"act3_time": 12.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act3_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* describe_hour{"number": "2"}
    - action_set_other_time
    - slot{"other_time" : 2.0}
    - action_report_weekly_time
    - utter_ask_good_behaviour


## interactive_story_1
* choose_value{"value": "mindfulness"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "mindfulness"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "watching tv"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "playing video games"}
    - slot{"act_3": "watching tv"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act1_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing video games"}
    - utter_ask_hour_on_act
* describe_hour{"number": "20"}
    - check_weekly_hour
    - slot{"act2_time": 20.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching tv"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act3_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}


> activity_focus
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching videos"}
    - utter_ask_hour_on_act
* describe_hour{"number": "7"}
    - check_weekly_hour
    - slot{"act1_time": 7.0}
* deny
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act1_time": 8.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act1_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "6"}
    - check_weekly_hour
    - slot{"act1_time": 6.0}
* deny
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act2_time": 8.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act2_align": true}
    - utter_how_is_aligned
* inform{"value": "strength"}
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing video games"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* deny
    - utter_ask_hour_on_act
* describe_hour{"number": "12"}
    - check_weekly_hour
    - slot{"act3_time": 12.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act3_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* describe_hour{"number": "1"}
    - action_set_other_time
    - slot{"other_time" : 1.0}
    - action_report_weekly_time
    - slot{"total_time" : 9.0}
    - utter_ask_good_behaviour

## interactive_story_1
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "painting"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "reading"}
    - slot{"act_3": "painting"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - ask_why_cont
* inform{"value": "health"}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "reading"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act2_time": 5.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "painting"}
    - utter_ask_hour_on_act
* describe_hour{"number": "2"}
    - check_weekly_hour
    - slot{"act3_time": 2.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act3_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* describe_hour{"number": "1"}
    - action_set_other_time
    - slot{"other_time" : 1.0}
    - action_report_weekly_time
    - slot{"total_time" : 3.0}
    - utter_ask_good_behaviour
> check_good_behaviour


## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "singing"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "watching tv"}
    - slot{"act_3": "singing"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act1_time": 8.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act1_align": true}
    - utter_how_is_aligned
* inform{"value": "endurance"}
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching tv"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act2_time": 5.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "singing"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act3_time": 5.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform{"value": "activity"}
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* describe_hour{"number": "2"}
    - action_set_other_time
    - slot{"other_time": 2.0}
    - action_report_weekly_time
    - slot{"total_time": 10.0}
    - utter_ask_good_behaviour
> check_good_behaviour

## interactive_story_1
* choose_value{"value": "family"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "family"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "spending time with family"}
    - slot{"act_2": "playing video games"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "spending time with family"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act1_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing video games"}
    - utter_ask_hour_on_act
* describe_hour{"number": "16"}
    - check_weekly_hour
    - slot{"act2_time": 16.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act3_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform{"value": "health"}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "0"}
    - action_set_other_time
    - slot{"other_time": 0.0}
    - action_report_weekly_time
    - slot{"total_time": 10.0}
    - utter_ask_good_behaviour
> check_good_behaviour

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "reading"}
    - slot{"act_2": "watching tv"}
    - slot{"act_3": "studying"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "reading"}
    - utter_ask_hour_on_act
* describe_hour{"number": "3"}
    - check_weekly_hour
    - slot{"act1_time": 3.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform{"value": "activity"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act1_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching tv"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act2_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "studying"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act3_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "0"}
    - action_set_other_time
    - slot{"other_time": 0.0}
    - action_report_weekly_time
    - slot{"total_time": 0.0}
    - utter_not_enough_time
    - utter_ask_new_act
* behaviour_describe{"activity": "exercising"}
    - action_set_additional_act
    - slot{"add_act": "exercising"}
    - utter_how_act_improve
* inform
    - action_plan
    - utter_that_is_it

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching tv"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "studying"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again
* behaviour_describe{"activity": "painting"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "reading"}
    - slot{"act_3": "painting"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - ask_why_cont
* inform{"value": "health"}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "reading"}
    - utter_ask_hour_on_act
* number_input{"number": "3"}
    - check_weekly_hour
    - slot{"act2_time": 3.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "painting"}
    - utter_ask_hour_on_act
* describe_hour{"number": "2"}
    - check_weekly_hour
    - slot{"act3_time": 2.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "0"}
    - action_set_other_time
    - slot{"other_time": 0.0}
    - action_report_weekly_time
    - slot{"total_time": 0.0}
    - utter_not_enough_time
    - utter_ask_new_act
* behaviour_describe{"activity": "applying for jobs"}
    - action_set_additional_act
    - slot{"add_act": "applying for jobs"}
    - utter_how_act_improve
* inform
    - action_plan
    - utter_that_is_it

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "exercising"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching netflix"}
    - slot{"act_2": "playing video games"}
    - slot{"act_3": "exercising"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching netflix"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act1_time": 8.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing video games"}
    - utter_ask_hour_on_act
* describe_hour{"number": "20"}
    - check_weekly_hour
    - slot{"act2_time": 20.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* number_input{"number": "10"}
    - check_weekly_hour
    - slot{"act3_time": 10.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act3_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "2"}
    - action_set_other_time
    - slot{"other_time": 2.0}
    - action_report_weekly_time
    - slot{"total_time": 12.0}
    - utter_ask_good_behaviour
> check_good_behaviour

> check_good_behaviour
* deny
    - utter_lets_plan
    - utter_ask_new_act
* behaviour_describe{"activity": "swimming"}
    - action_set_additional_act
    - slot{"add_act": "swimming"}
    - utter_how_act_improve
* inform
    - action_plan
    - utter_that_is_it

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "watching netflix"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "running"}
    - slot{"act_2": "playing the piano"}
    - slot{"act_3": "watching netflix"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "running"}
    - utter_ask_hour_on_act
* describe_hour{"number": "3"}
    - check_weekly_hour
    - slot{"act1_time": 3.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act1_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "playing the piano"}
    - utter_ask_hour_on_act
* describe_hour{"number": "2"}
    - check_weekly_hour
    - slot{"act2_time": 2.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "watching netflix"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act3_time": 8.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform{"value": "fun"}
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act3_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "0"}
    - action_set_other_time
    - slot{"other_time": 0.0}
    - action_report_weekly_time
    - slot{"total_time": 3.0}
    - utter_ask_good_behaviour
> check_good_behaviour

> check_good_behaviour
* deny
    - utter_lets_plan
    - utter_ask_new_act
* behaviour_describe{"activity": "exercising"}
    - action_set_additional_act
    - slot{"add_act": "exercising"}
    - utter_how_act_improve
* inform
    - action_plan
    - slot{"act_to_replace": "watching netflix"}
    - utter_that_is_it


> check_good_behaviour
* affirm 
    - utter_goodluck
    - utter_that_is_it

## interactive_story_1
* choose_value{"value": "health"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "health"}
    - utter_confirm_value
* affirm
    - utter_your_top_activities
* behaviour_describe{"activity": "hanging out with friends"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "running"}
    - slot{"act_2": "eating"}
    - slot{"act_3": "hanging out with friends"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "running"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act1_time": 5.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act1_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "eating"}
    - utter_ask_hour_on_act
* describe_hour{"number": "8"}
    - check_weekly_hour
    - slot{"act2_time": 8.0}
* affirm
    - utter_is_activity_aligned
* affirm
    - set_act_align
    - slot{"act2_align": true}
    - utter_how_is_aligned
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act2_cont": true}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "hanging out with friends"}
    - utter_ask_hour_on_act
* describe_hour{"number": "5"}
    - check_weekly_hour
    - slot{"act3_time": 5.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "0"}
    - action_set_other_time
    - slot{"other_time": 0.0}
    - action_report_weekly_time
    - slot{"total_time": 13.0}
    - utter_ask_good_behaviour
* affirm
    - utter_goodluck
    - utter_that_is_it

## interactive_story_1
* choose_value{"value": "wealth"}
    - check_value_num
    - slot{"num_value": "one"}
    - slot{"value_focus": "wealth"}
    - utter_confirm_value
* behaviour_describe{"activity": "studying"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "watching tv"}
    - slot{"act_2": "painting"}
    - slot{"act_3": "studying"}
    - utter_confirm_activities
* deny
    - utter_your_top_activities_again
* behaviour_describe{"activity": "painting"}
    - check_behaviour_num
    - slot{"num_act": "three"}
    - slot{"act_1": "exercising"}
    - slot{"act_2": "reading"}
    - slot{"act_3": "painting"}
    - utter_confirm_activities
* affirm
    - utter_next_section
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "exercising"}
    - utter_ask_hour_on_act
* describe_hour{"number": "10"}
    - check_weekly_hour
    - slot{"act1_time": 10.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act1_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act1_cont": true}
    - ask_why_cont
* inform{"value": "health"}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "reading"}
    - utter_ask_hour_on_act
* number_input{"number": "3"}
    - check_weekly_hour
    - slot{"act2_time": 3.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act2_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* deny
    - set_act_cont
    - slot{"act2_cont": false}
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": false}
    - slot{"curr_act": "painting"}
    - utter_ask_hour_on_act
* describe_hour{"number": "2"}
    - check_weekly_hour
    - slot{"act3_time": 2.0}
* affirm
    - utter_is_activity_aligned
* deny
    - set_act_align
    - slot{"act3_align": false}
    - utter_why_spend_time
* inform
    - utter_will_continue_act
* affirm
    - set_act_cont
    - slot{"act3_cont": true}
    - ask_why_cont
* inform
    - utter_activity_done
    - action_switch_activity
    - slot{"acts_done": true}
    - slot{"curr_act": "general"}
    - utter_ask_other_activity
* number_input{"number": "5"}
    - action_set_other_time
    - slot{"other_time": 5.0}
    - action_report_weekly_time
    - slot{"total_time": 5.0}
    - utter_ask_good_behaviour
* affirm
    - utter_goodluck
    - utter_that_is_it