const team_leader1 = document.getElementById('team_leader1');
const team_leader2 = document.getElementById('team_leader2');
const email1 = document.getElementById('email1');
const email2 = document.getElementById('email2');
const phone1 = document.getElementById('phone1');
const phone2 = document.getElementById('phone2');
const college1 = document.getElementById('college1');
const college2 = document.getElementById('college2');
const member11 = document.getElementById('member11');
const member21 = document.getElementById('member21');
const member31 = document.getElementById('member31');
const member12 = document.getElementById('member12');
const member22 = document.getElementById('member22');
const member32 = document.getElementById('member32');


const sub1 = document.getElementById('submit_btn1');
const sub2 = document.getElementById('submit_btn2');

const database = firebase.database();
sub1.addEventListener('click',(e)=>{
	e.preventDefault();
	database.ref('/MAZE MICE/'+ email1.value).set({
		team_leader: team_leader1.value,
		email: email1.value,
		phone: phone1.value,
		college: college1.value,
		member1: member11.value,
		member2: member21.value,
		member3: member31.value
	});
});


sub2.addEventListener('click',(e)=>{
	e.preventDefault();
	database.ref('/DEVIL,S VALLEY/'+ email2.value).set({
		team_leader: team_leader2.value,
		email: email2.value,
		phone: phone2.value,
		college: college2.value,
		member1: member12.value,
		member2: member22.value,
		member3: member32.value
	});
});