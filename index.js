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
       
        // DB table settings
    var AWS = require("aws-sdk");
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "govHack_user";

    const userId = intentRequest.userId;
    const intentName = intentRequest.currentIntent.name;
    var updatedintentRequest = intentRequest;
    
    console.log('request received for userId=' + intentRequest.userId + ' intentName=' + intentRequest.currentIntent.name);
    
    console.log(intentRequest);
    const sessionAttributes = intentRequest.sessionAttributes;
    var slots = intentRequest.currentIntent.slots;
    

    const postcode = slots.postcode;
        if (postcode)
    {
docClient = new AWS.DynamoDB.DocumentClient();

    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set postcode = :r",
    ExpressionAttributeValues:{
        ":r": postcode
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}
    
    const username = slots.name;
    if (username)
    {
docClient = new AWS.DynamoDB.DocumentClient();

    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set username = :p",
    ExpressionAttributeValues:{
        ":p": username
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}
    
    
    var age = parseInt(slots.age);
    
    if (age > 0)
    {
docClient = new AWS.DynamoDB.DocumentClient();
    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set age = :r",
    ExpressionAttributeValues:{
        ":r": age
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}
    
    
    
    var gender = slots.gender;
    
        if (gender)
    {
docClient = new AWS.DynamoDB.DocumentClient();

    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set gender = :p",
    ExpressionAttributeValues:{
        ":p": gender
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}
    
    
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
    
    if (weight > 0)
    {
docClient = new AWS.DynamoDB.DocumentClient();
    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set weight = :r",
    ExpressionAttributeValues:{
        ":r": weight
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}
    
    const height = parseInt(slots.height);
    
    if (height > 0)
    {
docClient = new AWS.DynamoDB.DocumentClient();
    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set height = :r",
    ExpressionAttributeValues:{
        ":r": height
    },
    ReturnValues:"UPDATED_NEW"
};

docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}

    var bmi = parseInt(slots.bodymassindex);
    
    const std_drinks = parseInt(slots.std_drinks);
 


if (intentName === 'greeting')
{
    
    // Introduction intent - testing

    

    callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Hello ${username}, I am a chatbot`}));


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
    docClient = new AWS.DynamoDB.DocumentClient();
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
    docClient = new AWS.DynamoDB.DocumentClient();
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
    docClient = new AWS.DynamoDB.DocumentClient();
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
        
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${response}% of ${gender}\'s are diagnosed with cancer at ${age} years old, and only ${response2}% die from cancer at ${age} years old.`}));
    }
});
    
    
    
} 

if (intentName === 'physical_activity')
{
    //Read from table
    table = "physical_activity";
    docClient = new AWS.DynamoDB.DocumentClient();
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

if (intentName === 'hear_story')
{
    //Read from table
    // Demo story
    table = "govHack_user";
    docClient = new AWS.DynamoDB.DocumentClient();
params = {
    TableName: table,
            Key: {
    "id" : "esenkhydrq32i1cc5c3r92mims64k0l3"
  }
};


docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
var  response = data.Item.story;
     
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${response}`}));
    }
});
    
    
    
}


if (intentName === 'socioeconomic_advantage')
{
    //Read from table
    // Demo story
    table = "socioeconomic_advantage";
    docClient = new AWS.DynamoDB.DocumentClient();
params = {
    TableName: table,
            Key: {
    "postcode" : parseInt(postcode)
  }
};


docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Error.`}));
    } else {
        console.log("Query succeeded.");
        var  response;
        var rank = parseInt(data.Item.rank) * 10;
        if (rank > 50)
        {
            response = "You live in one of the top " + (100 - rank) + "% most advantaged suburbs";
        }
        else
        {
            response = "You live in one of the bottom " + rank + "% most disadvantaged suburbs";
        }
     
   
        
        callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `${response}`}));
    }
});
    
    
    
}

if (intentRequest.invocationSource === 'DialogCodeHook' && intentName === 'tell_story' && slots.agree === 'yes' && intentRequest.inputTranscript !== 'yes')
{
    
        console.log("Sanity check");

docClient = new AWS.DynamoDB.DocumentClient();

    table = "govHack_user";

    // Write to table


var params = {
    TableName:table,
    Key:{
        "id" : userId
    },
    UpdateExpression: "set story = :p",
    ExpressionAttributeValues:{
        ":p": intentRequest.inputTranscript
    },
    ReturnValues:"UPDATED_NEW"
};
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        
      // var updatedSlots = {"agree": "no", "story": "no" };
        
  // const outputSessionAttributes = intentRequest.sessionAttributes || {};
     //   callback(delegate(outputSessionAttributes, updatedSlots));
          
   
        return;
    
    }
});
 callback(close(sessionAttributes, 'Failed', {'contentType': 'PlainText', 'content': `Thank you for sharing your story`}));
    
}   


if (intentRequest.invocationSource === 'DialogCodeHook' && intentName === 'tell_story')
{

   const outputSessionAttributes = intentRequest.sessionAttributes || {};

        callback(delegate(outputSessionAttributes, intentRequest.currentIntent.slots));
        return;
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
