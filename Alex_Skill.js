{
   "intents":[
      {
         "name":"hear_story",
         "samples":[
            "I would like to hear someone\u0027s story",
            "I want to hear somebody\u0027s story"
         ],
         "slots":[

         ]
      },
      {
         "name":"risky_alcohol",
         "samples":[
            "Do I drink too much",
            "Do I drink more alcohol than my peers",
            "Am I drinking too much alcohol",
            "How many wines are too many",
            "Do I drink too much wine",
            "Do I drink too much beer",
            "I drink {std_drinks} beers per day",
            "Do I drink too much for a {age} year old",
            "Do I drink too much for a {age} year old {gender}",
            "I drink {std_drinks} wines per day",
            "I drink {std_drinks} drinks per day",
            "Should I drink less"
         ],
         "slots":[
            {
               "name":"age",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"gender",
               "type":"Gender",
               "samples":[

               ]
            },
            {
               "name":"std_drinks",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"greeting",
         "samples":[
            "My name is {name}"
         ],
         "slots":[
            {
               "name":"name",
               "type":"AMAZON.GB_FIRST_NAME",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"physical_activity",
         "samples":[
            "Am I unfit for a {age} year old",
            "Am I unfit for a {age} year old {gender}",
            "Am I unfit"
         ],
         "slots":[
            {
               "name":"age",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"gender",
               "type":"Gender",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"tell_story",
         "samples":[
            "I would like to tell my story",
            "Can I tell my story",
            "I would like to share a story"
         ],
         "slots":[
            {
               "name":"agree",
               "type":"agree",
               "samples":[

               ]
            },
            {
               "name":"story",
               "type":"story",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"cancer",
         "samples":[
            "How many people get cancer at {age} years olds",
            "What will be my risk of cancer in {future_years} years time",
            "What is the risk of cancer of a {age} year old {gender}",
            "what is my caner risk",
            "what risk do I have of cancer",
            "How many other {age} year olds have cancer"
         ],
         "slots":[
            {
               "name":"age",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"future_years",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"gender",
               "type":"Gender",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"hello",
         "samples":[
            "hi",
            "hello",
            "good morning"
         ],
         "slots":[

         ]
      },
      {
         "name":"hospital",
         "samples":[
            "How many people my age go to hospital",
            "How many {age} year olds go to hospital"
         ],
         "slots":[
            {
               "name":"age",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"gender",
               "type":"Gender",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"socioeconomic_advantage",
         "samples":[
            "How does my suburb compare",
            "Do I live in a disadvantaged area",
            "do i live in a good area"
         ],
         "slots":[
            {
               "name":"postcode",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            }
         ]
      },
      {
         "name":"bmi",
         "samples":[
            "Am I overweight",
            "Am I fat",
            "Am I underweight",
            "what is my bmi",
            "am i fatter than everyone",
            "My BMI is {bodymassindex}",
            "I weigh {weight} am I fat",
            "I weigh {weight} am I overweight",
            "I weigh {weight} am I underweight",
            "Am I a normal weight",
            "What is the average BMI for {age} year old {gender}"
         ],
         "slots":[
            {
               "name":"age",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"bodymassindex",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"gender",
               "type":"Gender",
               "samples":[

               ]
            },
            {
               "name":"height",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            },
            {
               "name":"weight",
               "type":"AMAZON.NUMBER",
               "samples":[

               ]
            }
         ]
      }
   ],
   "types":[
      {
         "name":"Gender",
         "values":[
            {
               "name":{
                  "value":"other",
                  "synonyms":[
                     "trans",
                     "none"
                  ]
               }
            },
            {
               "name":{
                  "value":"female",
                  "synonyms":[
                     "woman",
                     "women",
                     "lady",
                     "girl"
                  ]
               }
            },
            {
               "name":{
                  "value":"male",
                  "synonyms":[
                     "man",
                     "men",
                     "boy"
                  ]
               }
            }
         ]
      },
      {
         "name":"agree",
         "values":[
            {
               "name":{
                  "value":"no",
                  "synonyms":[
                     "false",
                     "nope"
                  ]
               }
            },
            {
               "name":{
                  "value":"yes",
                  "synonyms":[
                     "true",
                     "confirm",
                     "yep"
                  ]
               }
            }
         ]
      },
      {
         "name":"story",
         "values":[
            {
               "name":{
                  "value":"true",
                  "synonyms":[

                  ]
               }
            }
         ]
      }
   ],
   "prompts":[
      {
         "id":"Elicit.Intent-risky_alcohol.IntentSlot-age",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How old are you?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-risky_alcohol.IntentSlot-gender",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your gender?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-risky_alcohol.IntentSlot-std_drinks",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How many standard drinks do you drink per day on average?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-greeting.IntentSlot-name",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your name"
            }
         ]
      },
      {
         "id":"Elicit.Intent-physical_activity.IntentSlot-age",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How old are you?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-physical_activity.IntentSlot-gender",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your gender?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-tell_story.IntentSlot-agree",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"We will record your story anonymously and share with others using this service, is that OK?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-tell_story.IntentSlot-story",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"Great, please share your story"
            }
         ]
      },
      {
         "id":"Elicit.Intent-cancer.IntentSlot-age",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How old are you?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-cancer.IntentSlot-future_years",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"In how many years?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-cancer.IntentSlot-gender",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your gender?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-hospital.IntentSlot-age",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How old are you?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-hospital.IntentSlot-gender",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your gender?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-socioeconomic_advantage.IntentSlot-postcode",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your postcode"
            }
         ]
      },
      {
         "id":"Elicit.Intent-bmi.IntentSlot-age",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your age"
            }
         ]
      },
      {
         "id":"Elicit.Intent-bmi.IntentSlot-bodymassindex",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your BMI?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-bmi.IntentSlot-gender",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your gender?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-bmi.IntentSlot-height",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"How tall are you (in centimeters)?"
            }
         ]
      },
      {
         "id":"Elicit.Intent-bmi.IntentSlot-weight",
         "promptVersion":"1.0",
         "definitionVersion":"1.0",
         "variations":[
            {
               "type":"PlainText",
               "value":"What is your weight (in kilograms)?"
            }
         ]
      }
   ],
   "dialog":{
      "version":"1.0",
      "intents":[
         {
            "name":"hear_story",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[

            ]
         },
         {
            "name":"risky_alcohol",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"age",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-risky_alcohol.IntentSlot-age"
                  }
               },
               {
                  "name":"gender",
                  "type":"Gender",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-risky_alcohol.IntentSlot-gender"
                  }
               },
               {
                  "name":"std_drinks",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-risky_alcohol.IntentSlot-std_drinks"
                  }
               }
            ]
         },
         {
            "name":"greeting",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"name",
                  "type":"AMAZON.GB_FIRST_NAME",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-greeting.IntentSlot-name"
                  }
               }
            ]
         },
         {
            "name":"physical_activity",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"age",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-physical_activity.IntentSlot-age"
                  }
               },
               {
                  "name":"gender",
                  "type":"Gender",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-physical_activity.IntentSlot-gender"
                  }
               }
            ]
         },
         {
            "name":"tell_story",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"agree",
                  "type":"agree",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-tell_story.IntentSlot-agree"
                  }
               },
               {
                  "name":"story",
                  "type":"story",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-tell_story.IntentSlot-story"
                  }
               }
            ]
         },
         {
            "name":"cancer",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"age",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-cancer.IntentSlot-age"
                  }
               },
               {
                  "name":"future_years",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-cancer.IntentSlot-future_years"
                  }
               },
               {
                  "name":"gender",
                  "type":"Gender",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-cancer.IntentSlot-gender"
                  }
               }
            ]
         },
         {
            "name":"hello",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[

            ]
         },
         {
            "name":"hospital",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"age",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-hospital.IntentSlot-age"
                  }
               },
               {
                  "name":"gender",
                  "type":"Gender",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-hospital.IntentSlot-gender"
                  }
               }
            ]
         },
         {
            "name":"socioeconomic_advantage",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"postcode",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-socioeconomic_advantage.IntentSlot-postcode"
                  }
               }
            ]
         },
         {
            "name":"bmi",
            "confirmationRequired":false,
            "prompts":{

            },
            "slots":[
               {
                  "name":"age",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-bmi.IntentSlot-age"
                  }
               },
               {
                  "name":"bodymassindex",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-bmi.IntentSlot-bodymassindex"
                  }
               },
               {
                  "name":"gender",
                  "type":"Gender",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-bmi.IntentSlot-gender"
                  }
               },
               {
                  "name":"height",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-bmi.IntentSlot-height"
                  }
               },
               {
                  "name":"weight",
                  "type":"AMAZON.NUMBER",
                  "elicitationRequired":true,
                  "confirmationRequired":false,
                  "prompts":{
                     "elicit":"Elicit.Intent-bmi.IntentSlot-weight"
                  }
               }
            ]
         }
      ]
   }
}
