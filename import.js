exports.handler = (event, context, callback) => {
    
    // Example data set from https://www.aihw.gov.au/reports-statistics/population-groups/men-women/data
    var importContent = [{"age":18,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":19,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":20,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":21,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":22,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":23,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":24,"male":18.9,"female":7.5,"male_single_occasion":18.9,"female_single_occasion":7.5},{"age":25,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":26,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":27,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":28,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":29,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":30,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":31,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":32,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":33,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":34,"male":24.9,"female":7,"male_single_occasion":24.9,"female_single_occasion":7},{"age":35,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":36,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":37,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":38,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":39,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":40,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":41,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":42,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":43,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":44,"male":28,"female":28,"male_single_occasion":28,"female_single_occasion":28},{"age":45,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":46,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":47,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":48,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":49,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":50,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":51,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":52,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":53,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":54,"male":28,"female":10.9,"male_single_occasion":28,"female_single_occasion":10.9},{"age":55,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":56,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":57,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":58,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":59,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":60,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":61,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":62,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":63,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":64,"male":31.3,"female":10.2,"male_single_occasion":31.3,"female_single_occasion":10.2},{"age":65,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":66,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":67,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":68,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":69,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":70,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":71,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":72,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":73,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":74,"male":26.8,"female":11.2,"male_single_occasion":26.8,"female_single_occasion":11.2},{"age":75,"male":15.3,"female":7.9,"male_single_occasion":15.3,"female_single_occasion":7.9}];
            // DB table settings
    var AWS = require("aws-sdk");
    var table = "risky_alcohol";
    


importContent.forEach(function(value){
    
    var docClient = new AWS.DynamoDB.DocumentClient();
    console.log(value['age']);
        // Write to table
    var params = {
    TableName:table,
    Item:{
        "age" : value['age'],
        "male": value['male'],
        "female": value['female'],
        "male_single_occasion": value['male_single_occasion'],
        "female_single_occasion": value['female_single_occasion']
    }

};


                  console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
    
    
});

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Basic import script')
    };
    callback(null, response);
};
