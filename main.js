let words =[
"character",
"word",
"school",
"Yassin",
"Tmara",
"Hassan",
"work",
"alignitems",
"background",
"cairo",
"centralbark"
];
const lvls={
    "Easy":5,
    "Normal":3,
    "Hard":2
}
// let defualtLevelName = "Easy";
// let defualtLevelsSecond = lvls[defualtLevelName];
let levelName=document.querySelector(".message .lvl")
let levelSconds=document.querySelector(".message .seconds")
// **************************

// *********************
let startButton = document.querySelector(".start");
let input=document.querySelector(".input")
let theword= document.querySelector(".the-word")
let theupcomingword = document.querySelector(".upcoming-word");
let timeLeft=document.querySelector(".time span");
let scoreGot=document.querySelector(".score .got");
let scoreTotal=document.querySelector(".score .total");
let finish=document.querySelector(".finish");
// **************

    let defualtLevelName="Easy";

let defualtLevelsSecond = lvls[defualtLevelName];
timeLeft.innerHTML=defualtLevelsSecond;
scoreTotal.innerHTML=words.length;
    let selectedValue=document.getElementById("list");
    
    levelName.innerHTML=defualtLevelName;
    levelSconds.innerHTML=defualtLevelsSecond;
    timeLeft.innerHTML=defualtLevelsSecond;
    selectedValue.onchange=function(){
    let selLevelName=selectedValue.value;

    let selLevelsSecond = lvls[selLevelName];

    levelName.innerHTML=selLevelName;
    levelSconds.innerHTML=selLevelsSecond;
    timeLeft.innerHTML=selLevelsSecond;


    }

// *************


// function selectvalue(){
    // let selectedValue=document.getElementById("list").value;

// let defualtLevelName = selectedValue
// let defualtLevelsSecond = lvls[defualtLevelName];
// levelName.innerHTML=defualtLevelName;
// levelSconds.innerHTML=defualtLevelsSecond;
// timeLeft.innerHTML=defualtLevelsSecond;

// startplay()

// }
startButton.onclick=function(){
    this.remove();
    input.focus();
    genewords();
    
}
// *************
input.onpaste=function(){
    return false;
}
// *************

function genewords(){
    let randomword= words[Math.floor(Math.random()*words.length)];
    let wordindex= words.indexOf(randomword);
    words.splice(wordindex,1);
    theword.innerHTML=randomword;
    theupcomingword.innerHTML='';
    for(let i=0;i<words.length;i++){
    let div=document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    theupcomingword.appendChild(div);
    
    }
    startplay();
}
    function startplay(){
// timeLeft.innerHTML=defualtLevelsSecond;
        
        let str=setInterval(() => {
            timeLeft.innerHTML--;
            if(timeLeft.innerHTML==="0"){
                clearInterval(str);
                if(theword.innerHTML.toLowerCase()===input.value.toLowerCase()){
                    input.value="";
                    scoreGot.innerHTML++;
                    
                
                if(words.length>0){
                    genewords();
                }
                else{ 
                    let good=document.createElement("span");
                    let textspan =document.createTextNode("congratulation");
                    // finish.className="bad";
                    good.appendChild(textspan);
                    finish.appendChild(good);
                    finish.classList.add("good");
                    theupcomingword.remove();
                    theword.remove()
        location.reload();

                }
            }
            
            else{
                    let bad=document.createElement("span");
                    let textspan =document.createTextNode("Game Over");
                    // finish.className="bad";
                    bad.appendChild(textspan);
                    finish.appendChild(bad);
                    finish.classList.add("bad")
        // location.reload();
        let rel =setTimeout(() => {
        location.reload();
            
        }, 3000);


                }
            }
        }, 1000);

    }
   




