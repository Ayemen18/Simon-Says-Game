let userSeq = [];
let gameSeq = [];

let btncolors = ["red", "green", "orange", "purple"];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`
    let randidx = Math.floor(Math.random()*4);
    let randcol = btncolors[randidx];
    let btn = document.querySelector(`.${randcol}`)
    gameSeq.push(randcol);
    gameFlash(btn)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over, your score was <b>${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }
}

function btnpressed(){
    let btn = this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", btnpressed);
}

function reset(){
    level = 0;
    gameSeq = [];
    started = false;
    userSeq = [];
}