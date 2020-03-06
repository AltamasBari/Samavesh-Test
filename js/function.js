var team_leader1 = document.getElementById('team_leader1');
var team_leader2 = document.getElementById('team_leader2');
var email1 = document.getElementById('email1');
var email2 = document.getElementById('email2');
var phone1 = document.getElementById('phone1');
var phone2 = document.getElementById('phone2');
var college1 = document.getElementById('college1');
var college2 = document.getElementById('college2');
var member11 = document.getElementById('member11');
var member21 = document.getElementById('member21');
var member31 = document.getElementById('member31');
var member12 = document.getElementById('member12');
var member22 = document.getElementById('member22');
var member32 = document.getElementById('member32');


const sub1 = document.getElementById('submit_btn1');
const sub2 = document.getElementById('submit_btn2');

var database = firebase.database();
const rootref1 = database.ref('MAZE MICE');
sub1.addEventListener('click',(e)=>{
	e.preventDefault();
	const autoid1 = rootref1.push().key
	rootref1.child(autoid1).set({
		team_leader: team_leader1.value,
		email: email1.value,
		phone: phone1.value,
		college: college1.value,
		member1: member11.value,
		member2: member21.value,
		member3: member31.value
	});
});

const rootref2 = database.ref('Devil Valley');
sub2.addEventListener('click',(e)=>{
	e.preventDefault();
	const autoid2 = rootref2.push().key
	rootref2.child(autoid2).set({
		team_leader: team_leader2.value,
		email: email2.value,
		phone: phone2.value,
		college: college2.value,
		member1: member12.value,
		member2: member22.value,
		member3: member32.value
	});
});