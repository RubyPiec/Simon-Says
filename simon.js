let beep1 = new Audio('beep1.mp3');
let beep2 = new Audio('beep2.mp3');
let beep3 = new Audio('beep3.mp3');
let beep4 = new Audio('beep4.mp3');
let loss = new Audio('loss.mp3');
  
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let clrnames = ["red","green","blue","yellow"]
let clrclrs = ["#d18466","#69ac69","rgb(135, 168, 179)","rgb(204, 204, 180)"]
let beeps = [beep1,beep2,beep3,beep4]
let beeporder = []
let guessorder = []

function rndm(){
    return Math.floor(Math.random()*4);
}

const playorder = async() => {
    for(i of clrnames){
        document.getElementById(i).disabled = true;
    }
    function playsound(number){
        beeps[number].play()
    }
    for(i of beeporder){
        playsound(i)
        document.getElementById(clrnames[i]).style.background = clrclrs[i]
        await sleep(600)
        document.getElementById("red").style.background = "lightsalmon"
        document.getElementById("green").style.background = "lightgreen"
        document.getElementById("blue").style.background = "lightblue"
        document.getElementById("yellow").style.background = "lightyellow"
        beeps[i].currentTime=0
        beeps[i].pause()
    }
    for(i of clrnames){
        document.getElementById(i).disabled = false;
    }
}

async function play(){
    beeporder.push(rndm())
    document.getElementById("start").style.display="none";
    document.getElementById("game").style.display="grid";
    await sleep(600)
    guessorder = []
    playorder()
}

async function god(num){
    guessorder.push(num)
    console.log(guessorder)
    console.log(beeporder)
    for(i in guessorder){
        if(guessorder[i]!=beeporder[i]){
            guessorder = []
            beeporder = []
            loss.play()
            await sleep(1279)
            play()
        }
    }
    if(guessorder.length==beeporder.length){
        play()
    }
}