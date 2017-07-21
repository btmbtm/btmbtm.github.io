var D = document;
var nameGreetLog = D.getElementById('log');
console.log(nameGreetLog);
window.addEventListener('storage', function(e){
	console.log("OK");
	var person = D.createElement('li');
	person.textContent = e.key + ' says ' + e.newValue;
	nameGreetLog.appendChild(person);
});