var config = {
	apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
	authDomain: "time-sheet-55009.firebaseapp.com",
	databaseURL: "https://time-sheet-55009.firebaseio.com",
	storageBucket: "time-sheet-55009.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();


$("#addTrainTime").on("click", function(){


	var empName = $("#trainNameInput").val().trim();
	var empRole = $("#destinationInput").val().trim();
	var empStart = moment($("#frequencyInput").val().trim(), "DD/MM/YY").format("X");
	var empRate = $("#nextarrivalInput").val().trim();

	var newTrain = {
		name:  trainName,
		destination: desRole,
		frequency: empStart,
		nextarrival: empRate
	}

	database.ref().push(newEmp);

	console.log(newEmp.name);
	console.log(newEmp.role);
	console.log(newEmp.start);
	console.log(newEmp.rate)

	
	alert("Employee successfully added");

	$("#employeeNameInput").val("");
	$("#roleInput").val("");
	$("#startInput").val("");
	$("#rateInput").val("");

	
	return false;
});


database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	
	var empName = childSnapshot.val().name;
	var empRole = childSnapshot.val().role;
	var empStart = childSnapshot.val().start;
	var empRate = childSnapshot.val().rate;

	console.log(empName);
	console.log(empRole);
	console.log(empStart);
	console.log(empRate);

	/
	var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
	
	var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
	console.log(empMonths);

	var empBilled = empMonths * empRate;
	console.log(empBilled);

	
	$("#employeeTable > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

});
