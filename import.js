exports.handler = (event, context, callback) => {
    
    // Example data set from https://www.aihw.gov.au/reports-statistics/population-groups/men-women/data
    var importContent = [{"age":18,"male":54.5,"female":49.2},{"age":19,"male":54.5,"female":49.2},{"age":20,"male":54.5,"female":49.2},{"age":21,"male":54.5,"female":49.2},{"age":22,"male":54.5,"female":49.2},{"age":23,"male":54.5,"female":49.2},{"age":24,"male":54.5,"female":49.2},{"age":25,"male":56.1,"female":51.2},{"age":26,"male":56.1,"female":51.2},{"age":27,"male":56.1,"female":51.2},{"age":28,"male":56.1,"female":51.2},{"age":29,"male":56.1,"female":51.2},{"age":30,"male":56.1,"female":51.2},{"age":31,"male":56.1,"female":51.2},{"age":32,"male":56.1,"female":51.2},{"age":33,"male":56.1,"female":51.2},{"age":34,"male":56.1,"female":51.2},{"age":35,"male":46.4,"female":46.1},{"age":36,"male":46.4,"female":46.1},{"age":37,"male":46.4,"female":46.1},{"age":38,"male":46.4,"female":46.1},{"age":39,"male":46.4,"female":46.1},{"age":40,"male":46.4,"female":46.1},{"age":41,"male":46.4,"female":46.1},{"age":42,"male":46.4,"female":46.1},{"age":43,"male":46.4,"female":46.1},{"age":44,"male":46.4,"female":46.1},{"age":45,"male":42.5,"female":43.9},{"age":46,"male":42.5,"female":43.9},{"age":47,"male":42.5,"female":43.9},{"age":48,"male":42.5,"female":43.9},{"age":49,"male":42.5,"female":43.9},{"age":50,"male":42.5,"female":43.9},{"age":51,"male":42.5,"female":43.9},{"age":52,"male":42.5,"female":43.9},{"age":53,"male":42.5,"female":43.9},{"age":54,"male":42.5,"female":43.9},{"age":55,"male":46.5,"female":40.5},{"age":56,"male":46.5,"female":40.5},{"age":57,"male":46.5,"female":40.5},{"age":58,"male":46.5,"female":40.5},{"age":59,"male":46.5,"female":40.5},{"age":60,"male":46.5,"female":40.5},{"age":61,"male":46.5,"female":40.5},{"age":62,"male":46.5,"female":40.5},{"age":63,"male":46.5,"female":40.5},{"age":64,"male":46.5,"female":40.5}];
    
            // DB table settings
    var AWS = require("aws-sdk");
    var table = "physical_activity";
    


importContent.forEach(function(value){
    
    var docClient = new AWS.DynamoDB.DocumentClient();
    console.log(value['age']);
        // Write to table
    var params = {
    TableName:table,
    Item:{
        "age" : value['age'],
        "male": value['male'],
        "female": value['female']
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
