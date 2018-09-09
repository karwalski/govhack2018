exports.handler = (event, context, callback) => {
    
    // Example data set from https://www.aihw.gov.au/reports-statistics/population-groups/men-women/data
    var importContent = [{"age":18,"male":0,"female":0},{"age":19,"male":0,"female":0},{"age":20,"male":2000,"female":2000},{"age":21,"male":2000,"female":2000},{"age":22,"male":2000,"female":2000},{"age":23,"male":2000,"female":2000},{"age":24,"male":2000,"female":2000},{"age":25,"male":15000,"female":15000},{"age":26,"male":15000,"female":15000},{"age":27,"male":15000,"female":15000},{"age":28,"male":15000,"female":15000},{"age":29,"male":15000,"female":15000},{"age":30,"male":30000,"female":23396},{"age":31,"male":30000,"female":23396},{"age":32,"male":30000,"female":23396},{"age":33,"male":30000,"female":23396},{"age":34,"male":30000,"female":23396},{"age":35,"male":50000,"female":32792},{"age":36,"male":50000,"female":32792},{"age":37,"male":50000,"female":32792},{"age":38,"male":50000,"female":32792},{"age":39,"male":50000,"female":32792},{"age":40,"male":70000,"female":35000},{"age":41,"male":70000,"female":35000},{"age":42,"male":70000,"female":35000},{"age":43,"male":70000,"female":35000},{"age":44,"male":70000,"female":35000},{"age":45,"male":90000,"female":41898},{"age":46,"male":90000,"female":41898},{"age":47,"male":90000,"female":41898},{"age":48,"male":90000,"female":41898},{"age":49,"male":90000,"female":41898},{"age":50,"male":99000,"female":45000},{"age":51,"male":99000,"female":45000},{"age":52,"male":99000,"female":45000},{"age":53,"male":99000,"female":45000},{"age":54,"male":99000,"female":45000},{"age":55,"male":115000,"female":50000},{"age":56,"male":115000,"female":50000},{"age":57,"male":115000,"female":50000},{"age":58,"male":115000,"female":50000},{"age":59,"male":115000,"female":50000},{"age":60,"male":110000,"female":36003},{"age":61,"male":110000,"female":36003},{"age":62,"male":110000,"female":36003},{"age":63,"male":110000,"female":36003},{"age":64,"male":110000,"female":36003}];
    
    // DB table settings
    var AWS = require("aws-sdk");
    var table = "superannuation";
    


importContent.forEach(function(value){
    
    var docClient = new AWS.DynamoDB.DocumentClient();
    
        // Write to table
    var params = {
    TableName:table,
    Item:{
        "age" : value['age'],
        "male": value['male'],
        "female": value['female']
    }

};

// Disable logging for very larger imports - save $
                  // console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        // console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // console.log("Added item:", JSON.stringify(data, null, 2));
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
