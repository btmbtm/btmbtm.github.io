var D = document;
var submit = D.getElementById('submit');
var person = D.getElementById('person');
var greeting = D.getElementById('greeting');

submit.addEventListener('click', function(e){
	sessionStorage.setItem(person.value, greeting.value);
	person.value = '';
	greeting.value = '';
});