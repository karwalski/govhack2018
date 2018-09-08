// Lambda function - 'govHackFunction'
// https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/govHackFunction


'use strict';
     


function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}
 

function delegate(sessionAttributes, slots) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
}

 
// --------------- Events -----------------------

 
function dispatch(intentRequest, callback) {
    console.log('request received for userId=' + intentRequest.userId + ' intentName=' + intentRequest.currentIntent.name);
    
    
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    

    
    
    const name = slots.name;
    const userId = intentRequest.userId;
    const intentName = intentRequest.currentIntent.name;
    
    var age = parseInt(slots.age);
    var gender = slots.gender;
    
    const rand = Math.floor(Math.random() * 65536);
    
        // Dataset is binary - randomly choose a gender (Not accurate. but a quick attempt at being inclusive)
    if(gender === "other" && rand > (65536 / 2))
    {
        gender = "male";
    }
    else if(gender === "other")
    {
        gender = "female";
    }
    
    const future_years = parseInt(slots.future_years);
    
    const weight = parseInt(slots.weight);
    const height = parseInt(slots.height);
    var bmi = parseInt(slots.bodymassindex);
    
    const std_drinks = parseInt(slots.std_drinks);
    
        // DB table settings
    var AWS = require("aws-sdk");
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "govHack_user";



if (intentName === 'greeting')
{
    
    // Introduction intent - testing

    table = "govHack_user";

    // Write to table
    var params = {
    TableName:table,
    Item:{
        "id" : userId,
        "name": name
    }
};

docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

    callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Hello ${name}, I am a chatbot`}));


}


if (intentName === 'bmi')
{
    if(!bmi)
    {
        bmi = Math.round(weight / (height/100) / (height/100));
    }
    
    // if entered BMI should have a codehook and skip asking weight and height

    // callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Your BMI is ${bmi}`}));
    
    
    //Read from table
    table = "bmi";
    
    var bmiCatagory;
    var bmiDescription = ["Underweight", "Normal weight", "Overweight", "Obese"] ;
    if (bmi < 18)
    {
        bmiCatagory = 0;
    }
    else if (bmi < 25)
    {
        bmiCatagory = 1;
    }
    else if (bmi < 30)
    {
        bmiCatagory = 2;
    }
    else
    {
        bmiCatagory = 3;
    }
    
params = {
    TableName: table,
            Key: {
    "id" : bmiCatagory
  }
};


docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
var response = "";
       
       var responseLink = "http://www.health.gov.au/internet/main/publishing.nsf/Content/phy-activity";
       
        if(gender == "male" || gender == "Male")
        {
            // response = JSON.stringify(data);
           response = data.Item.male;
           // http://www.health.gov.au/internet/main/publishing.nsf/Content/phy-activity
        }
        else
        {
           response = data.Item.female;
           // https://campaigns.health.gov.au/girlsmove
           
           responseLink = "https://campaigns.health.gov.au/girlsmove";
        }
        // response = JSON.stringify(data);
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Your BMI is ${bmi} (${bmiDescription[bmiCatagory]}). ${response}% of ${gender}\'s are ${bmiDescription[bmiCatagory]}. Visit ${responseLink} for the benefits.`}));
    }
});

}

if (intentName === 'risky_alcohol')
{
    //Read from table
    table = "risky_alcohol";
    
params = {
    TableName: table,
            Key: {
    "age" : age
  }
};



docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
var response = "";
       var riskBool;
       var responseLink = "https://www.nhmrc.gov.au/_files_nhmrc/file/publications/synopses/ds10-alcoholqa.pdf";
       var response2 = "";
        if(gender == "male" || gender == "Male")
        {
           if(std_drinks > 6)
           {
               riskBool = "Yes, you drink in excess";
               response = data.Item.male_single_occasion;
               response2 = " on a single occasion";
               responseLink = "https://adf.org.au/insights/aod-whos-risk/";
           }
           else if(std_drinks > 4)
           {
               riskBool = "Yes, you drink in excess";
               response = data.Item.male;
           }
           else
           {
               riskBool = "No, you do not drink in excess";
               response = data.Item.male;
           }
        }
        else
                {
           if(std_drinks > 4)
           {
               riskBool = "Yes, you drink in excess";
               response = data.Item.female_single_occasion;
               response2 = " on a single occasion";
               responseLink = "https://adf.org.au/insights/aod-whos-risk/";
           }
           else if(std_drinks > 2)
           {
               riskBool = "Yes, you drink in excess";
               response = data.Item.female;
           }
           else
           {
               riskBool = "No, you do not drink in excess";
               response = data.Item.female;
           }
        }
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${riskBool}. ${response}% of ${age} year old ${gender}\'s drink in excess risky level of drinking${response2}. Visit ${responseLink} for the more information.`}));
    }
});
    
    
    
} 


if (intentName === 'cancer')
{
    //Read from table
    table = "cancer";
    
    if(future_years > 0)
    {
        age = age + future_years;
    }
    
params = {
    TableName: table,
            Key: {
    "age" : age
  }
};



docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
var response = "";
       var riskBool;
       var responseLink = "https://www.nhmrc.gov.au/_files_nhmrc/file/publications/synopses/ds10-alcoholqa.pdf";
       var response2;
        if(gender == "male" || gender == "Male")
        {
               response = Math.round(parseFloat(data.Item.male))/1000;
               response2 = Math.round(parseFloat(data.Item.male_mortality))/1000;

        }
        else
            {
               response = Math.round(parseFloat(data.Item.male))/1000;
               response2 = Math.round(parseFloat(data.Item.male_mortality))/1000;

        }
        
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${response}% of ${gender}\'s aged ${age} have cancer incidents, and only ${response2}% die from cancer at ${age} years old.`}));
    }
});
    
    
    
} 

if (intentName === 'physical_activity')
{
    //Read from table
    table = "physical_activity";
    
params = {
    TableName: table,
            Key: {
    "age" : age
  }
};


docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
var response = "";
       
       var responseLink = "http://www.health.gov.au/internet/main/publishing.nsf/Content/phy-activity";
        if(gender == "male" || gender == "Male")
        {
            // response = JSON.stringify(data);
           response = data.Item.male;
           
        }
        else
        {
           response = data.Item.female;
           responseLink = "https://campaigns.health.gov.au/girlsmove";
        }
        // response = JSON.stringify(data);
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${response}% of ${age} year old ${gender}\'s are physically active atleast 5 times for 30 minutes in a week. Visit ${responseLink} for the benefits.`}));
    }
});
    
    
    
}    



              
          if (intentRequest.invocationSource === 'FulfillmentCodeHook' && intentName === 'help') {
              
              console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
    
              
              
              
callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `This is the helper script`}));
}


         // callback(close(sessionAttributes, 'Failed', {'contentType': 'PlainText', 'content': `Something went wrong.`}));

}




 
// --------------- Main handler -----------------------
 
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};
