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
    
    const rand = Math.floor(Math.random() * 65536);
    
   
    
    
        // DB table settings
    var AWS = require("aws-sdk");
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "govHack";

if (intentName === 'intro')
{
    
    // Introduction intent - testing


    callback(close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': `Hello ${name}, I am a chatbot`}));


}





    // Write to table
    var params = {
    TableName:table,
    Item:{
        "id" : rand,
        "name": name,
    }
};


    



              
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
