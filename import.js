exports.handler = (event, context, callback) => {
    
    // Example data set from https://www.aihw.gov.au/reports-statistics/population-groups/men-women/data
    var importContent = [{"age":18,"male":24.4,"male_mortality":2.7,"female":22.3,"female_mortality":2.4},{"age":19,"male":24.4,"male_mortality":2.7,"female":22.3,"female_mortality":2.4},{"age":20,"male":34.3,"male_mortality":3.2,"female":32.8,"female_mortality":3.8},{"age":21,"male":34.3,"male_mortality":3.2,"female":32.8,"female_mortality":3.8},{"age":22,"male":34.3,"male_mortality":3.2,"female":32.8,"female_mortality":3.8},{"age":23,"male":34.3,"male_mortality":3.2,"female":32.8,"female_mortality":3.8},{"age":24,"male":34.3,"male_mortality":3.2,"female":32.8,"female_mortality":3.8},{"age":25,"male":57.1,"male_mortality":57.1,"female":57.1,"female_mortality":57.1},{"age":26,"male":57.1,"male_mortality":57.1,"female":57.1,"female_mortality":57.1},{"age":27,"male":57.1,"male_mortality":57.1,"female":57.1,"female_mortality":57.1},{"age":28,"male":57.1,"male_mortality":57.1,"female":57.1,"female_mortality":57.1},{"age":29,"male":57.1,"male_mortality":57.1,"female":57.1,"female_mortality":57.1},{"age":30,"male":77.5,"male_mortality":7.3,"female":112.7,"female_mortality":7.8},{"age":31,"male":77.5,"male_mortality":7.3,"female":112.7,"female_mortality":7.8},{"age":32,"male":77.5,"male_mortality":7.3,"female":112.7,"female_mortality":7.8},{"age":33,"male":77.5,"male_mortality":7.3,"female":112.7,"female_mortality":7.8},{"age":34,"male":77.5,"male_mortality":7.3,"female":112.7,"female_mortality":7.8},{"age":35,"male":118,"male_mortality":14.1,"female":190,"female_mortality":17.9},{"age":36,"male":118,"male_mortality":14.1,"female":190,"female_mortality":17.9},{"age":37,"male":118,"male_mortality":14.1,"female":190,"female_mortality":17.9},{"age":38,"male":118,"male_mortality":14.1,"female":190,"female_mortality":17.9},{"age":39,"male":118,"male_mortality":14.1,"female":190,"female_mortality":17.9},{"age":40,"male":178.4,"male_mortality":26.4,"female":297.9,"female_mortality":32.8},{"age":41,"male":178.4,"male_mortality":26.4,"female":297.9,"female_mortality":32.8},{"age":42,"male":178.4,"male_mortality":26.4,"female":297.9,"female_mortality":32.8},{"age":43,"male":178.4,"male_mortality":26.4,"female":297.9,"female_mortality":32.8},{"age":44,"male":178.4,"male_mortality":26.4,"female":297.9,"female_mortality":32.8},{"age":45,"male":311.7,"male_mortality":59,"female":463.5,"female_mortality":60},{"age":46,"male":311.7,"male_mortality":59,"female":463.5,"female_mortality":60},{"age":47,"male":311.7,"male_mortality":59,"female":463.5,"female_mortality":60},{"age":48,"male":311.7,"male_mortality":59,"female":463.5,"female_mortality":60},{"age":49,"male":311.7,"male_mortality":59,"female":463.5,"female_mortality":60},{"age":50,"male":530.2,"male_mortality":106.4,"female":636.4,"female_mortality":98.1},{"age":51,"male":530.2,"male_mortality":106.4,"female":636.4,"female_mortality":98.1},{"age":52,"male":530.2,"male_mortality":106.4,"female":636.4,"female_mortality":98.1},{"age":53,"male":530.2,"male_mortality":106.4,"female":636.4,"female_mortality":98.1},{"age":54,"male":530.2,"male_mortality":106.4,"female":636.4,"female_mortality":98.1},{"age":55,"male":890,"male_mortality":192.8,"female":766.3,"female_mortality":155.3},{"age":56,"male":890,"male_mortality":192.8,"female":766.3,"female_mortality":155.3},{"age":57,"male":890,"male_mortality":192.8,"female":766.3,"female_mortality":155.3},{"age":58,"male":890,"male_mortality":192.8,"female":766.3,"female_mortality":155.3},{"age":59,"male":890,"male_mortality":192.8,"female":766.3,"female_mortality":155.3},{"age":60,"male":1406.6,"male_mortality":322.1,"female":1012.8,"female_mortality":246.5},{"age":61,"male":1406.6,"male_mortality":322.1,"female":1012.8,"female_mortality":246.5},{"age":62,"male":1406.6,"male_mortality":322.1,"female":1012.8,"female_mortality":246.5},{"age":63,"male":1406.6,"male_mortality":322.1,"female":1012.8,"female_mortality":246.5},{"age":64,"male":1406.6,"male_mortality":322.1,"female":1012.8,"female_mortality":246.5},{"age":65,"male":2023.5,"male_mortality":533.4,"female":1327.3,"female_mortality":362.2},{"age":66,"male":2023.5,"male_mortality":533.4,"female":1327.3,"female_mortality":362.2},{"age":67,"male":2023.5,"male_mortality":533.4,"female":1327.3,"female_mortality":362.2},{"age":68,"male":2023.5,"male_mortality":533.4,"female":1327.3,"female_mortality":362.2},{"age":69,"male":2023.5,"male_mortality":533.4,"female":1327.3,"female_mortality":362.2},{"age":70,"male":2340.4,"male_mortality":837.7,"female":1523.4,"female_mortality":546.6},{"age":71,"male":2340.4,"male_mortality":837.7,"female":1523.4,"female_mortality":546.6},{"age":72,"male":2340.4,"male_mortality":837.7,"female":1523.4,"female_mortality":546.6},{"age":73,"male":2340.4,"male_mortality":837.7,"female":1523.4,"female_mortality":546.6},{"age":74,"male":2340.4,"male_mortality":837.7,"female":1523.4,"female_mortality":546.6},{"age":75,"male":2671.5,"male_mortality":1347.1,"female":1782.3,"female_mortality":775.6},{"age":76,"male":2671.5,"male_mortality":1347.1,"female":1782.3,"female_mortality":775.6},{"age":77,"male":2671.5,"male_mortality":1347.1,"female":1782.3,"female_mortality":775.6},{"age":78,"male":2671.5,"male_mortality":1347.1,"female":1782.3,"female_mortality":775.6},{"age":79,"male":2671.5,"male_mortality":1347.1,"female":1782.3,"female_mortality":775.6},{"age":80,"male":3122.2,"male_mortality":2044.3,"female":1986.9,"female_mortality":1166.4},{"age":81,"male":3122.2,"male_mortality":2044.3,"female":1986.9,"female_mortality":1166.4},{"age":82,"male":3122.2,"male_mortality":2044.3,"female":1986.9,"female_mortality":1166.4},{"age":83,"male":3122.2,"male_mortality":2044.3,"female":1986.9,"female_mortality":1166.4},{"age":84,"male":3122.2,"male_mortality":2044.3,"female":1986.9,"female_mortality":1166.4},{"age":85,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9},{"age":86,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9},{"age":87,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9},{"age":88,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9},{"age":89,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9},{"age":90,"male":3668.3,"male_mortality":3169.8,"female":2132.9,"female_mortality":1663.9}];
    
    
    // DB table settings
    var AWS = require("aws-sdk");
    var table = "cancer";
    


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
