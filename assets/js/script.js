/* =========================
   IDENTIFIERS
========================= */

function checkIdentifierExercise(){
const answer=document.getElementById("answer")?.value||"";
const result=document.getElementById("identifier-result");
if(!result)return;

if(answer.includes("student_name")||answer.includes("name")){
result.innerHTML="🎉 Great! You understand identifier rules!";
result.style.color="#8ef6ff";
}else{
result.innerHTML="💡 Hint: Valid identifiers cannot start with numbers, contain spaces, or be keywords.";
result.style.color="#ffe873";
}
}

function identifierQuiz(button,correct){
const result=document.getElementById("identifier-quiz-result");
if(!result)return;

if(correct){
result.innerHTML="🎉 Correct! student_name is a valid identifier.";
result.style.color="#8ef6ff";
}else{
result.innerHTML="❌ Try again! Check the identifier rules.";
result.style.color="#ffe873";
}
}


/* =========================
   GENERAL QUIZ
========================= */

function showQuizResult(id,correct,success){
const result=document.getElementById(id);
if(!result)return;

result.innerHTML=correct?"🎉 "+success:"❌ Not quite! Try again.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   OPERATORS
========================= */

function operatorQuiz(button,correct){
const result=document.getElementById("operator-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! Great understanding of operators.":"❌ Try again! Check the operator carefully.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   DATA TYPES
========================= */

function dataTypeQuiz(button,correct){
const result=document.getElementById("datatype-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You identified the data type.":"❌ Try again! Think about the value's type.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   LOOPS
========================= */

function loopQuiz(button,correct){
const result=document.getElementById("loop-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You understand the loop concept.":"❌ Not quite! Check how the loop works.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   FUNCTIONS
========================= */

function functionQuiz(button,correct){
const result=document.getElementById("function-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You understand Python functions.":"❌ Try again! Think about function syntax.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   RECURSION
========================= */

function recursionQuiz(button,correct){
const result=document.getElementById("recursion-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! Recursion means a function calls itself.":"❌ Try again! Remember the meaning of recursion.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   OOP
========================= */

function oopQuiz(button,correct){
const result=document.getElementById("oop-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! Great OOP understanding.":"❌ Try again! Check the OOP concept.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   ADVANCED PYTHON
========================= */

function advancedQuiz(button,correct){
const result=document.getElementById("advanced-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You understand the advanced concept.":"❌ Try again! Read the explanation once more.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   DATABASE
========================= */

function databaseQuiz(button,correct){
const result=document.getElementById("database-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! Database connectivity understood.":"❌ Try again! Think about how Python communicates with a database.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   API & JSON
========================= */

function apiQuiz(button,correct){
const result=document.getElementById("api-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You understand APIs and JSON.":"❌ Try again! Check the API/JSON concept.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   TESTING & DEBUGGING
========================= */

function testingQuiz(button,correct){
const result=document.getElementById("testing-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! You understand testing and debugging.":"❌ Try again! Think about finding and fixing errors.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   CODING QUESTIONS
========================= */

function checkCoding(id,keywords,hint,success){
const input=document.getElementById("code"+id);
const result=document.getElementById("coding-result"+id);

if(!input||!result)return;

const answer=input.value.toLowerCase();
const correct=keywords.some(word=>answer.includes(word));

result.innerHTML=correct?"🎉 "+success:"💡 Hint: "+hint;
result.style.color=correct?"#8ef6ff":"#ffe873";
}

function checkCoding1(){
checkCoding(1,["[::-1]","reverse"],"Try string slicing [::-1].","Great! You found a way to reverse a string.");
}

function checkCoding2(){
checkCoding(2,["[::-1]","reverse"],"Reverse the value and compare it with the original.","Excellent! You understand palindrome logic.");
}

function checkCoding3(){
checkCoding(3,["factorial","range","*"],"Multiply numbers from 1 to n.","Good! You are using factorial logic.");
}

function checkCoding4(){
checkCoding(4,["fib","a+b","a + b"],"Each Fibonacci number is the sum of the previous two.","Good! You understand Fibonacci logic.");
}

function checkCoding5(){
checkCoding(5,["%","prime"],"Use % to check divisibility.","Good! You are checking divisibility.");
}

function checkCoding6(){
checkCoding(6,["%2","% 2"],"Use number % 2.","Correct! Modulus helps identify even and odd numbers.");
}

function checkCoding7(){
checkCoding(7,["max",">"],"Compare the values or use max().","Good! You are comparing the numbers.");
}

function checkCoding8(){
checkCoding(8,["count","loop","for"],"Think about looping through the values.","Good! You are using iteration.");
}


/* =========================
   CODING QUIZZES 1-8
========================= */

function codingQuiz1(button,correct){
showQuizResult("coding-quiz1",correct,"Correct! 10 + 5 = 15.");
}

function codingQuiz2(button,correct){
showQuizResult("coding-quiz2",correct,"Correct! [::-1] reverses a string.");
}

function codingQuiz3(button,correct){
showQuizResult("coding-quiz3",correct,"Correct! 17 is a prime number.");
}

function codingQuiz4(button,correct){
showQuizResult("coding-quiz4",correct,"Correct! 2 + 3 = 5.");
}

function codingQuiz5(button,correct){
showQuizResult("coding-quiz5",correct,"Correct! append() adds an element.");
}

function codingQuiz6(button,correct){
showQuizResult("coding-quiz6",correct,"Correct! Dictionary stores key-value pairs.");
}

function codingQuiz7(button,correct){
showQuizResult("coding-quiz7",correct,"Correct! Lists support index access.");
}

function codingQuiz8(button,correct){
showQuizResult("coding-quiz8",correct,"Correct! Understand the problem before coding.");
}


/* =========================
   INTERVIEW QUESTIONS
========================= */

function interviewQuiz1(button,correct){
showQuizResult("interview-quiz1",correct,"Correct! def is used to define a function.");
}

function interviewQuiz2(button,correct){
showQuizResult("interview-quiz2",correct,"Correct! Tuple is immutable.");
}

function interviewQuiz3(button,correct){
showQuizResult("interview-quiz3",correct,"Correct! Generators commonly use yield.");
}

function interviewQuiz4(button,correct){
showQuizResult("interview-quiz4",correct,"Correct! Inheritance allows code reuse.");
}

function interviewQuiz5(button,correct){
showQuizResult("interview-quiz5",correct,"Correct! API means Application Programming Interface.");
}

function interviewQuiz6(button,correct){
showQuizResult("interview-quiz6",correct,"Correct! json.dumps() creates a JSON string.");
}

function interviewQuiz7(button,correct){
showQuizResult("interview-quiz7",correct,"Correct! Debugging means finding and fixing bugs.");
}

function interviewQuiz8(button,correct){
showQuizResult("interview-quiz8",correct,"Correct! First understand the problem.");
}


/* =========================
   FINAL PROJECT
========================= */

function projectQuiz(button,correct){
const result=document.getElementById("project-quiz-result");
if(!result)return;

result.innerHTML=correct?"🎉 Correct! SQLite can store the expense data.":"❌ Try again! Think about the database used in the project.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}

function checkProjectChallenge(){
const answer=document.getElementById("project-answer")?.value.toLowerCase()||"";
const result=document.getElementById("project-exercise-result");

if(!result)return;

const correct=answer.includes("update")&&answer.includes("delete");

result.innerHTML=correct?"🏆 Excellent! UPDATE and DELETE are important CRUD operations.":"💡 Hint: Think about modifying and removing an expense.";
result.style.color=correct?"#8ef6ff":"#ffe873";
}


/* =========================
   PROGRESS DASHBOARD
========================= */

const progressChecks=document.querySelectorAll(".topic-check");

if(progressChecks.length){

progressChecks.forEach((check,index)=>{

check.checked=
localStorage.getItem("python-topic-"+index)==="true";

check.addEventListener("change",updateProgress);

});

updateProgress();
}

function updateProgress(){

if(!progressChecks.length)return;

let completed=0;

progressChecks.forEach((check,index)=>{

if(check.checked){
completed++;
localStorage.setItem("python-topic-"+index,"true");
}else{
localStorage.setItem("python-topic-"+index,"false");
}

});

const percentage=
Math.round((completed/progressChecks.length)*100);

const number=document.getElementById("progress-number");
const fill=document.getElementById("progress-fill");
const message=document.getElementById("progress-message");
const level=document.getElementById("level-message");

if(number)number.innerText=percentage+"%";

if(fill)fill.style.width=percentage+"%";

let msg="Start your Python journey 🚀";
let current="🌱 Beginner";

if(percentage>=25){
msg="🌱 Great start! Keep learning!";
current="📖 Learning";
}

if(percentage>=50){
msg="🔥 Halfway there! Keep going!";
current="💻 Practicing";
}

if(percentage>=75){
msg="🚀 Almost there! You're doing amazing!";
current="💼 Interview Ready";
}

if(percentage===100){
msg="🏆 Congratulations! Python Journey Completed!";
current="🏆 Python Master";
}

if(message)message.innerText=msg;

if(level)level.innerText=current;
}

function resetProgress(){

progressChecks.forEach((check,index)=>{

check.checked=false;

localStorage.removeItem("python-topic-"+index);

});

updateProgress();
}


/* =========================
   SMALL PAGE ANIMATION
========================= */

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(
".learning-card,.topic-card,.quiz-box,.exercise"
);

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(15px)";

setTimeout(()=>{

card.style.transition="opacity .5s ease,transform .5s ease";
card.style.opacity="1";
card.style.transform="translateY(0)";

},index*70);

});

});
/* =========================
   ROADMAP SEARCH
========================= */

function searchTopics(){

const input=document.getElementById("topicSearch");

if(!input)return;

const search=input.value.toLowerCase().trim();

const cards=document.querySelectorAll(".roadmap-cards .topic-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(search===""||text.includes(search)){

card.classList.remove("search-hide");

if(search!==""){
card.classList.add("search-match");
}

}else{

card.classList.add("search-hide");
card.classList.remove("search-match");

}

});

}
function searchTopics(){

const input=document.getElementById("topicSearch");
const noResults=document.getElementById("noResults");

if(!input)return;

const search=input.value.toLowerCase().trim();
const cards=document.querySelectorAll(".roadmap-cards .topic-card");

let found=0;

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(search===""||text.includes(search)){

card.classList.remove("search-hide");

if(search!==""){
card.classList.add("search-match");
}

found++;

}else{

card.classList.add("search-hide");
card.classList.remove("search-match");

}

});

if(noResults){
noResults.style.display=
search!==""&&found===0?"block":"none";
}

}