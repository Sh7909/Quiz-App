const pipes = [
    {
        question: "Two pipes A and B can fill a cistern in 20 and 30 minutes respectively, and a third pipe C can empty it in 40 minutes. How long will it take to fill the cistern if all the 3 pipes are opened at the same time?",
        option: ["7 1/7 mins.", "15 1/7 mins.", "17 1/7 mins.", "19 1/7 mins."],
        answer: 2
    },
    {
        question: "Two taps can separately fill a cistern 10 minutes and 15 minutes respectively and when the waste pipe is open, they can together fill it in 18 minutes. The waste pipe can empty the full cistern in?",
        option: ["7 mins.", "9 mins.", "13 mins.", "23 mins."],
        answer: 1
    },
    {
        question: "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
        option: ["16 hrs", "20 hrs", "25 hrs", "40 hrs"],
        answer: 3
    },
    {
        question: "Two pipes can fill a tank in 18 minutes and 15 minutes. An outlet pipe can empty the tank in 45 minutes. If all the pipes are opened when the tank is empty, then how many minutes will it take to fill the tank?",
        option: ["9 mins.", "10 mins.", " 11 mins.", "12 mins."],
        answer: 1
    },
    {
        question: "Pipe A can fill a tank in 16 minutes and pipe B cam empty it in 24 minutes. If both the pipes are opened together after how many minutes should pipe B be closed, so that the tank is filled in 30 minutes?",
        option: ["19 mins.", "20 mins.", "21 mins.", "22 mins."],
        answer: 2
    },
    {
        question: "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P, Q and R respectively. What is the proportion of solution R in the liquid in the tank after 3 minutes?",
        option: ["5/11", "6/11", "7/11", "8/11"],
        answer: 1
    },
    {
        question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 1/3 hours to fill the tank. The leak can drain all the water of the tank in:",
        option: ["10 hrs", "12 hrs", "14 hrs", "16 hrs"],
        answer: 2
    },
    {
        question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        option: ["3 hrs 15 min", "3 hrs 45 min", "4 hrs", "4 hrs 15 min"],
        answer: 1
    },
    {
        question: "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
        option: ["15 min", "20 min", "27.5 min", "30 min"],
        answer: 3
    },
    {
        question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        option: ["81 min.", "108 min.", "144 min.", "192 min."],
        answer: 2
    },
    {
        question: "",
        option: "",
        answer: 2,
    }
]

let index = 0;
const answer = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let arr = [];
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const first = document.getElementById("first");
const text = document.getElementById("text");
const enter = document.getElementById("Enter");
let effect = document.getElementById("effect");
let showscore = document.getElementById("showscore");
let four = document.getElementsByClassName("four");
let correctanswers = 0;
let attemptedquestions = 0;
let wrong = 0;

let tabClicked = -1;
let time = null;
enter.addEventListener("click", enterclick);
function enterclick() {

    text.innerHTML = "<strong>Hello</strong>" + " " + effect.value.bold() + "<strong>!</strong>";
}
first.addEventListener("click", fbutton);
function fbutton() {

    tabClicked = 1;
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("showscore").style.display = "block";
    container.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Pipes and Cisterns</div>`;
    container.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="newTimer"></div>`
    var newTime = document.getElementById("newTimer");
    timer = 500;
    document.getElementById("newTimer").innerHTML = timer;
    time = setInterval(function () {
        newTime.innerHTML = time;
        timer--;
        if (document.getElementById("newTimer")) {
            document.getElementById("newTimer").innerHTML = timer;
        }
        if (timer === 0) {
            alert("Time's Up");
            clearInterval(time);
        }
        else if (timer < 0) {
            clearInterval(time);
        }
    }, 1000);

    container.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${index}</span></div>
   <div id="subcontainer"></div>`;
    shownextquestion1();

}

var timer;
function ready1() {
    let subcontainer = document.getElementById("subcontainer");
    let currentquestion = pipes[index];
    subcontainer.innerHTML = `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect1(${i})" class="four" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion1()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let scoreincre = 0;
function shownextquestion1() {
    ready1();
    index += 1;
    scoreincre += 1;
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${scoreincre}`;
    showscore.style.display = "block";
    showscore.innerHTML = `${scoreincre}/10`;
    result1();

}
function result1() {

    if (index > 10) {
        index = 0;
        container.innerHTML = "";
        container.innerHTML = `<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;
        container.innerHTML += `${"<br>"} ${effect.value.bold()} your result is:`;
        container.innerHTML += `${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500 - timer} </strong> seconds`;
        container.innerHTML += `${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        container.innerHTML += `${"<br>"}${"<br>"} Attempt: <strong>${attemptedquestions}</strong>`;
        container.innerHTML += `${"<br>"}${"<br>"} Correct: <strong>${correctanswers} </strong>`;
        container.innerHTML += `${"<br>"}${"<br>"} Wrong: <strong>${wrong} </strong>`;
        container.innerHTML += `${"<br>"}${"<br>"} Percentage: <strong>${correctanswers * 10}% </strong>`;//problem here.....
        container.innerHTML += `${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        container.innerHTML += `<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
    }
}
function startagain() {
    let w = prompt("Do you Want to Continue ?");
    if (w === "yes" || w === "Yes" || w === "YES") {
        document.getElementById("maincontainer").style.display = "block";
        document.getElementById("container").style.display = "none";
        document.getElementById("showscore").style.display = "none";
        scoreincre = 0;
        clearInterval(time);
    }
}
function Go() {
    location.reload();
    document.getElementById("maincontainer").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("showscore").style.display = "none";
}

function checkcorrect1(j) {
    attemptedquestions++;


    var four = document.querySelectorAll(".four");
    four[j].style.backgroundColor = "rgb(31, 168, 231)";
    four[j].style.color = "white";


    if (j == pipes[index - 1].answer) {
        correctanswers++;
        console.log("correct answer");
    }
    else {
        wrong++;
        console.log("incorrect")
    }
    setTimeout(shownextquestion1, 1000);
}
//PROBABILITY
const probability = [
    {
        question: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
        option: ["1/2", "2/5", "8/15", "9/20"],
        answer: 3
    },
    {
        question: "In a throw of a coin, the probability of getting a head is?",
        option: ["1", "1/2", "1/4", "2"],
        answer: 1
    },
    {
        question: "Two unbiased coins are tossed. What is the probability of getting at most one head?",
        option: ["2/3", "1/2", "3/4", "4/3"],
        answer: 2
    },
    {
        question: "An unbiased die is tossed. Find the probability of getting a multiple of 3.",
        option: ["1/4", "1/3", "1/2", "1"],
        answer: 1
    },
    {
        question: "In a simultaneous throw of a pair of dice, find the probability of getting a total more than 7.",
        option: ["3/2", "4/7", "5/12", "6/13"],
        answer: 2
    },
    {
        question: "A bag contains 6 white and 4 black balls. two balls are drawn at random. Find the probability that they are of the same color.",
        option: ["3/4", "5/3", "7/15", "8/17"],
        answer: 2
    },
    {
        question: "Two dice are thrown together. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 6?",
        option: ["13/14", "5/3", "7/16", "7/18"],
        answer: 3
    },
    {
        question: "Two cards are drawn at random from a pack of 52 cards. What is the probability that either both are black or both are queens?",
        option: ["5/21", "55/221", "555/2221", "5555/22221"],
        answer: 1
    },
    {
        question: "A box contains 5 green, 4 yellow and 3 white marbles. Three marbles are drawn at random. What is the probability that they are not of the same color?",
        option: ["3/44", "3/55", "52/55", "41/44"],
        answer: 3
    },
    {
        question: "A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red is:",
        option: ["1/22", "3/22", "2/91", "2/77"],
        answer: 2
    },
    {
        question: "",
        option: "",
        answer: 2,
    }
]

let indexnumber = 0;
const Answer = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
const Container1 = document.getElementById("container");
const second = document.getElementById("second");
const Text = document.getElementById("text");
const Enter = document.getElementById("Enter");
let Effect = document.getElementById("effect");
let Showscore = document.getElementById("showscore");
let Four = document.getElementsByClassName("four");
let Correctanswers = 0;
let Attemptedquestions = 0;
let Wrong = 0;

let TabClicked = -1;
let Time = null;
Enter.addEventListener("click", Enterclick);
function Enterclick() {

    Text.innerHTML = "<strong>Hello</strong>" + " " + Effect.value.bold() + "<strong>!</strong>";
}
second.addEventListener("click", sbutton);
function sbutton() {
    TabClicked = 1;
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("container").style.display = "block";//2
    document.getElementById("showscore").style.display = "block";
    Container1.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Probability</div>`;
    Container1.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="NEWTIMER"></div>`
    var NEWTIMER = document.getElementById("NEWTIMER");
    TIMER = 500;
    document.getElementById("NEWTIMER").innerHTML = TIMER;
    Time = setInterval(function () {
        NEWTIMER.innerHTML = Time;
        TIMER--;
        if (document.getElementById("NEWTIMER")) {
            document.getElementById("NEWTIMER").innerHTML = TIMER;
        }
        if (TIMER === 0) {
            alert("Time's Up");
            clearInterval(Time);
        }
        else if (TIMER < 0) {
            clearInterval(Time);
        }
    }, 1000);

    Container1.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${indexnumber}</span></div>
   <div id="subcontainer"></div>`;
    shownextquestion2();

}

var TIMER;
function ready2() {
    let subcontainer = document.getElementById("subcontainer");
    let currentquestion = probability[indexnumber];
    subcontainer.innerHTML = `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect2(${i})" class="Four" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion2()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let Scoreincre = 0;
function shownextquestion2() {
    ready2();
    indexnumber += 1;
    Scoreincre += 1;
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${Scoreincre}`;
    Showscore.style.display = "block";
    Showscore.innerHTML = `${Scoreincre}/10`;
    result2();

}
function result2() {

    if (indexnumber > 10) {
        indexnumber = 0;
        Container1.innerHTML = "";
        Container1.innerHTML = `<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;
        Container1.innerHTML += `${"<br>"} ${Effect.value.bold()} your result is:`;
        Container1.innerHTML += `${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500 - TIMER} </strong> seconds`;
        Container1.innerHTML += `${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        Container1.innerHTML += `${"<br>"}${"<br>"} Attempt: <strong>${Attemptedquestions}</strong>`;
        Container1.innerHTML += `${"<br>"}${"<br>"} Correct: <strong>${Correctanswers} </strong>`;
        Container1.innerHTML += `${"<br>"}${"<br>"} Wrong: <strong>${Wrong} </strong>`;
        Container1.innerHTML += `${"<br>"}${"<br>"} Percentage: <strong>${Correctanswers * 10}% </strong>`;
        Container1.innerHTML += `${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        Container1.innerHTML += `<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
    }
}
function startagain() {
    let w = prompt("Do you Want to Continue ?");
    if (w === "yes" || w === "Yes" || w === "YES") {
        document.getElementById("maincontainer").style.display = "block";
        document.getElementById("container").style.display = "none";
        document.getElementById("showscore").style.display = "none";
        Scoreincre = 0;
        clearInterval(Time);
    }
}
function Go() {
    location.reload();
    document.getElementById("maincontainer").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("showscore").style.display = "none";
}

function checkcorrect2(j) {
    Attemptedquestions++;
    var four = document.querySelectorAll(".Four");
    four[j].style.backgroundColor = "rgb(31, 168, 231)";
    four[j].style.color = "white";
    if (j === probability[indexnumber - 1].answer) {
        Correctanswers++;
        console.log("correct answer");
    }
    else {
        Wrong++;
        console.log("incorrect")
    }
    setTimeout(shownextquestion2, 1000);
}
//AGES
const ages = [
    {
        question: "Tanya's grandfather was 8 times older to her 16 years ago. He would be 3 times her age 8 years from now. Eight years ago, what was the ratio of Tanya’s age to that of her grandfather?",
        option: ["1:2", "1:5", " 3:8", "None of these"],
        answer: 3
    },
    {
        question: "The age of father 10 years ago was thrice the age of his son. Ten years hence, father's age will be twice that of his son. the ratio of their present ages is:",
        option: ["5:2", "7:3", "9:2", "13:4"],
        answer: 1
    },
    {
        question: "Four years ago, the father’s age was three times the age of his son. The total of the ages of the father and the son after four years will be 64 years. What is the father’s age at present?",
        option: ["32 years", "36 years", "44 years", "None of these"],
        answer: 3
    },
    {
        question: "One year ago, Promila was four times as old as her daughter Sakshi. Six years hence, Promila’s age will exceed her daughter’s age by 9 years. The ratio of the present ages of Promila and her daughter is:",
        option: ["9: 2", "11: 3", "12: 5", "13: 4"],
        answer: 3
    },
    {
        question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father’s age was five times the age of the son. After 6 years, son’s age will be:",
        option: ["12 years", "14 years", "18 years", "20 years"],
        answer: 3
    },
    {
        question: "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q’s age?",
        option: ["1 year", "2 years", "25 years", "Data inadequate"],
        answer: 3
    },
    {
        question: "The age of a man is three times the sum of the ages of his two sons. Five years hence, his age will be double the sum of the ages of his sons. the father’s present age is:",
        option: ["40 years", "45 years", "50 years", "55 years"],
        answer: 1
    },
    {
        question: "The sum of the ages of a father and his son is 45 years. Five years ago, the product of their ages was 34. The ages of the son and the father are respectively:",
        option: ["6 and 39", "7 and 38", "9 and 36", "11 and 34"],
        answer: 0
    },
    {
        question: "Rajan got married 8 years ago. His present age is 6/5 times his age at the time of his marriage. Rajan’s sister was 10 years younger to him at the time of his marriage. The age of Rajan’s sister is:",
        option: ["32 years", "36 years", "38 years", "40 years"],
        answer: 2
    },
    {
        question: "The sum of the ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        option: ["4 years", "8 years", "10 years", "None of these."],
        answer: 0
    },
    {
        question: "",
        option: "",
        answer: 2,
    }
]

let indexno = 0;
const Answers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
const MAIN = document.getElementById("container");
const third = document.getElementById("third");
const Enterbtn = document.getElementById("Enter");
let Effects = document.getElementById("effect");
let Showscore1 = document.getElementById("showscore");
let Four1 = document.getElementsByClassName("four");
let Correctans = 0;
let Attemptedques = 0;
let Wrongans = 0;

let Tabclicked = -1;
let TIME = null;
Enterbtn.addEventListener("click", Enterclicked);
function Enterclicked() {

    Text.innerHTML = "<strong>Hello</strong>" + " " + Effects.value.bold() + "<strong>!</strong>";
}
third.addEventListener("click", thirdbutton);
function thirdbutton() {
    Tabclicked = 1;
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("showscore").style.display = "block";
    MAIN.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Problem On Ages</div>`;
    MAIN.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="NewTimer"></div>`
    var NewTimer = document.getElementById("NewTimer");
    timerv = 500;
    document.getElementById("NewTimer").innerHTML = timerv;
    TIME = setInterval(function () {
        NewTimer.innerHTML = TIME;
        timerv--;
        if (document.getElementById("NewTimer")) {
            document.getElementById("NewTimer").innerHTML = timerv;
        }
        if (timerv === 0) {
            alert("Time's Up");
            clearInterval(TIME);
        }
        else if (timerv < 0) {
            clearInterval(TIME);
        }
    }, 1000);

    MAIN.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${indexno}</span></div>
   <div id="subcontainer"></div>`;
    shownextquestion3();

}

var timerv;
function ready3() {
    let subcontainer = document.getElementById("subcontainer");
    let currentquestion = ages[indexno];
    subcontainer.innerHTML = `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect3(${i})" class="Four1" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion3()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let Scoreincrement = 0;
function shownextquestion3() {
    ready3();
    indexno += 1;
    Scoreincrement += 1;
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${Scoreincrement}`;
    Showscore1.style.display = "block";
    Showscore1.innerHTML = `${Scoreincrement}/10`;
    result3();

}
function result3() {

    if (indexno > 10) {
        indexno = 0;
        MAIN.innerHTML = "";
        MAIN.innerHTML = `<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;
        MAIN.innerHTML += `${"<br>"} ${Effects.value.bold()} your result is:`;
        MAIN.innerHTML += `${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500 - timerv} </strong> seconds`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} Attempt: <strong>${Attemptedques}</strong>`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} Correct: <strong>${Correctans} </strong>`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} Wrong: <strong>${Wrongans} </strong>`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} Percentage: <strong>${Correctans * 10}% </strong>`;
        MAIN.innerHTML += `${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        MAIN.innerHTML += `<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
    }
}
function startagain() {
    let w = prompt("Do you Want to Continue ?");
    if (w === "yes" || w === "Yes" || w === "YES") {
        document.getElementById("maincontainer").style.display = "block";
        document.getElementById("container").style.display = "none";
        document.getElementById("showscore").style.display = "none";
        Scoreincrement = 0;
        clearInterval(TIME);
    }
}
function Go() {
    location.reload();
    document.getElementById("maincontainer").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("showscore").style.display = "none";
}

function checkcorrect3(j) {
    Attemptedques++;
    var four = document.querySelectorAll(".Four1");
    four[j].style.backgroundColor = "rgb(31, 168, 231)";
    four[j].style.color = "white";
    if (j === ages[indexno - 1].answer) {
        Correctans++;
        console.log("correct answer");
    }
    else {
        Wrongans++;
        console.log("incorrect")
    }
    setTimeout(shownextquestion3, 1000);

}
//PROFIT AND LOSS
const Profit = [
    {
        question: "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction?",
        option: ["16", "18", "20", "22"],
        answer: 1
    },
    {
        question: "A trader mixes 26 kg of rice at Rs 20 per kg with 30 kg of rice of other variety at Rs 36 per kg and sells the mixture at Rs 30 per kg. His profit percent is:",
        option: ["No profit no loss", "5%", "8%", "10%"],
        answer: 1
    },
    {
        question: "Arun purchased 30 kg of wheat at the rate of Rs 11.50 per kg and 20 kg of wheat at the rate of Rs 14.25 per kg. he mixed the two and sold the mixture. Approximately what price per kg should he sell the mixture to make 30% profit?",
        option: ["Rs 14.80", "Rs 15.40", "Rs 15.60", "Rs 16.30"],
        answer: 3
    },
    {
        question: "Padam purchased 30 kg of rice at the rate of Rs 17.50 per kg and another 30 kg rice at a certain rate. He mixed the two and sold the entire quantity at the rate of Rs 18.60 per kg and made 20% overall profit. At what price per kg did he purchase the lot of another 30 kg rice?",
        option: ["Rs 12.50", "Rs 13.50", "Rs 15.50", "None of these"],
        answer: 1
    },
    {
        question: "A trader mixes three varieties of groundnuts costing Rs 50, Rs 20 and Rs 30 per kg in the ratio 2: 4 : 3 in terms of weight, and sells the mixture at Rs 33 per kg. What percentage of profit does he make?",
        option: ["8%", "9%", "10%", "None of these."],
        answer: 2
    },
    {
        question: "The marked price of a watch was Rs 720. A man bought the same for Rs. 550.80 after getting two successive discounts, the first being 10%. What was the second discount rate?",
        option: ["12%", "14%", "15%", "18%"],
        answer: 1
    },
    {
        question: "A shopkeeper purchased 150 identical pieces of calculators at the rate of Rs 250 each. He spent an amount of Rs. 2500 on transport and packaging. He fixed the labeled price of each calculator at Rs 320. However, he decided to give a discount of 5% on the labeled price. What is the percentage profit earned by him?",
        option: ["14%", "15%", "16%", "25%"],
        answer: 0
    },
    {
        question: "A trader marked the price of his commodity so as to include a profit of 25%. He allowed a discount of 16% on the marked price. His actual profit was:",
        option: ["5%", "9%", "16%", "25%"],
        answer: 0
    },
    {
        question: "A tradesman marks his goods 30% above the C.P. If he allows a discount of 6(1/4) %, then his gain percent is:",
        option: ["21(7/8)%", "22% ", "23(3/4)%", "None of these."],
        answer: 0
    },
    {
        question: "The price of an article is raised by 30% and then two successive discounts of 10% each are allowed. Ultimately, the price of the article is:",
        option: ["decreased by 5.3%", "increased by 3%", "increased by 5.3%", "increased by 10%"],
        answer: 2
    },
    {
        question: "",
        option: "",
        answer: 2,
    }
]

let indexNo = 0;
const ANSWERS = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
const MAINCONTAINER = document.getElementById("container");
const fourth = document.getElementById("fourth");
const ENTERBTN = document.getElementById("Enter");
let EFFECTS = document.getElementById("effect");
let SHOWSCORE = document.getElementById("showscore");
let FOUR = document.getElementsByClassName("four");
let CORRECTANS = 0;
let ATTEMPTEDQUES = 0;
let WRONGANS = 0;

let TABCLICKED = -1;
let TIME1 = null;
ENTERBTN.addEventListener("click", Enterclicked);
function Enterclicked() {

    Text.innerHTML = "<strong>Hello</strong>" + " " + EFFECTS.value.bold() + "<strong>!</strong>";
}
fourth.addEventListener("click", fourbutton);
function fourbutton() {
    TABCLICKED = 1;
    document.getElementById("maincontainer").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("showscore").style.display = "block";
    MAINCONTAINER.innerHTML = `<div  id="showresult "style="margin:1rem;font-family:sans-serif;font-size:1.5rem;">Profit And Loss</div>`;
    MAINCONTAINER.innerHTML += `<div style="text-align:center; font-size:1.7rem; font-weight:bold; text-align:center;
    border:2px solid rgb(31, 168, 231); color:rgb(31, 168, 231);border-radius:10rem;width:3rem; 
    height:3rem;position:stick" id="newTimer4"></div>`
    var newTimer4 = document.getElementById("newTimer4");
    timer4 = 500;
    document.getElementById("newTimer4").innerHTML = timer4;
    TIME1 = setInterval(function () {
        newTimer4.innerHTML = TIME1;
        timer4--;
        if (document.getElementById("newTimer4")) {
            document.getElementById("newTimer4").innerHTML = timer4;
        }
        if (timer4 === 0) {
            alert("Time's Up");
            clearInterval(TIME1);
        }
        else if (timer4 < 0) {
            clearInterval(TIME1);
        }
    }, 1000);

    MAINCONTAINER.innerHTML += `<div  id="scorediv" style="text-align:right;margin:1rem;
    font-family:sans-serif;font-size:1.5rem">SCORE:
   <span style="font-weight:bold"> ${indexNo}</span></div>
   <div id="subcontainer"></div>`;
    shownextquestion4();

}

var timer4;
function ready4() {
    let subcontainer = document.getElementById("subcontainer");
    let currentquestion = Profit[indexNo];
    subcontainer.innerHTML = `<div  id="Question" style="z-index:2;margin:1rem;border:2px solid rgb(194, 175, 145);
    border-radius:0.3rem;width:33rem;height:10rem; font-family:sans-serif;font-size:1.3rem; 
    text-align:center;padding-top:4rem;padding-left:2rem;padding-right:2rem;">
    ${currentquestion.question}</div>`;

    for (let i = 0; i < currentquestion.option.length; i++) {
        let y = currentquestion.option[i];
        subcontainer.innerHTML += `<button onclick="checkcorrect4(${i})" class="FOUR" style="margin:1rem;text-align:left;border-color:rgb(31, 168, 231);
        color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:0.5rem;background-color:white" >
        ${y}</button>`;

    }
    subcontainer.innerHTML += `<button onclick="shownextquestion4()" style="margin:1rem;text-align:center;border-color:rgb(31, 168, 231);
    color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;height:3rem;border-radius:2rem;
    background-color:white " onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
    onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
    Next Question</button>`
}


let SCOREINCREMENT = 0;
function shownextquestion4() {
    ready4();
    indexNo += 1;
    SCOREINCREMENT += 1;
    let scorediv = document.getElementById("scorediv");
    scorediv.innerText = `SCORE: ${SCOREINCREMENT}`;
    SHOWSCORE.style.display = "block";
    SHOWSCORE.innerHTML = `${SCOREINCREMENT}/10`;
    result4();

}
function result4() {

    if (indexNo > 10) {
        indexNo = 0;
        MAINCONTAINER.innerHTML = "";
        MAINCONTAINER.innerHTML = `<div style="color:rgb(31, 168, 231);font-weight:bold;padding-top:2rem;
        font-size:1.5rem">Quiz Result</div>`;
        MAINCONTAINER.innerHTML += `${"<br>"} ${EFFECTS.value.bold()} your result is:`;
        MAINCONTAINER.innerHTML += `${"<br>"} ${"<br>"} Total Time Taken:  <strong>${500 - timer4} </strong> seconds`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} Total Question: <strong>10</strong>`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} Attempt: <strong>${ATTEMPTEDQUES}</strong>`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} Correct: <strong>${CORRECTANS} </strong>`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} Wrong: <strong>${WRONGANS} </strong>`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} Percentage: <strong>${CORRECTANS * 10}% </strong>`;
        MAINCONTAINER.innerHTML += `${"<br>"}${"<br>"} <button  onclick="startagain()"style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white;" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Start Again</button>`;
        MAINCONTAINER.innerHTML += `<button  onclick="Go()" style="margin-left:10rem; margin:1rem;text-align:center;
        border-color:rgb(31, 168, 231);color:rgb(31, 168, 231);font-size:1rem;width:15rem;font-family:sans-serif;
        height:3rem;border-radius:2rem;background-color:white" onMouseOver="style.backgroundColor='rgb(31, 168, 231)';style.color='white'" 
        onMouseOut="style.backgroundColor='white';style.color='rgb(31, 168, 231)'">
        Go To Home</button>`;
    }
}
function startagain() {
    let w = prompt("Do you Want to Continue ?");
    if (w === "yes" || w === "Yes" || w === "YES") {
        document.getElementById("maincontainer").style.display = "block";
        document.getElementById("container").style.display = "none";
        document.getElementById("showscore").style.display = "none";
        SCOREINCREMENT = 0;
        clearInterval(TIME1);
    }
}
function Go() {
    location.reload();
    document.getElementById("maincontainer").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("showscore").style.display = "none";
}

function checkcorrect4(j) {
    ATTEMPTEDQUES++;
    var four = document.querySelectorAll(".FOUR");
    four[j].style.backgroundColor = "rgb(31, 168, 231)";
    four[j].style.color = "white";

    if (j === Profit[indexNo - 1].answer) {
        CORRECTANS++;
        console.log("correct answer");
    }
    else {
        WRONGANS++;
        console.log("incorrect")
    }
    setTimeout(shownextquestion4, 1000);
}