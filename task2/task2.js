var enemy1 = document.getElementById("enemy1");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var player = document.getElementById("player");
var result = document.getElementById("result");
const score =  document.getElementById("score");
const rscore =  document.getElementById("rscore");
var game =  document.getElementById("game");
var counter = 0;
scapeaudio=new Audio('jumpsound.mp3');


// enemy1 move
enemy1.addEventListener("animationiteration", function(){
     random = ((Math.floor(Math.random() * 2)) * 130);
    enemy1.style.left = random + "px";
    counter=counter+50;
    rscore.innerHTML= "Score :"+ counter;
    
})

//enemy2 move
enemy2.addEventListener("animationiteration", function(){
    random = (((Math.floor(Math.random() * 2))+2) * 130);
    enemy2.style.left = random + "px";
})

//enemy3 move
enemy3.addEventListener("animationiteration", function(){
    random = (((Math.floor(Math.random() * 2))+4) * 130);
    enemy2.style.left = random + "px";
})


//player move
window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
        if(playerLeft < 570){player.style.left = (playerLeft + 130) + "px"
        scapeaudio.play();
    }

    }

    if(e.keyCode == "37"){
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
        if(playerLeft > 0){player.style.left = (playerLeft - 130) + "px"
        scapeaudio.play();
        
    }

    }
})


//Game over
setInterval(function Gameover (){
    var enemy1Top = parseInt(window.getComputedStyle(enemy1).getPropertyValue("top"));
    var enemy1Left = parseInt(window.getComputedStyle(enemy1).getPropertyValue("left"));
    var enemy2Top = parseInt(window.getComputedStyle(enemy2).getPropertyValue("top"));
    var enemy2Left = parseInt(window.getComputedStyle(enemy2).getPropertyValue("left"));
    var enemy3Top = parseInt(window.getComputedStyle(enemy3).getPropertyValue("top"));
    var enemy3Left = parseInt(window.getComputedStyle(enemy3).getPropertyValue("left"));
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if((enemy1Left === playerLeft) && (enemy1Top > 595) && (enemy1Top < 795)){
            result.style.display = "block";
            scapeaudio.pause();
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;
            counter = 0;
            
        }
       else  if((enemy2Left === playerLeft) && (enemy2Top > 595) && (enemy2Top < 785)){
            result.style.display = "block";
            scapeaudio.pause();
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;
            counter = 0;
        }
        else  if((enemy3Left === playerLeft) && (enemy3Top > 595) && (enemy3Top < 785)){
            result.style.display = "block";
            scapeaudio.pause();
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;
            counter = 0;
        }
}, 10)
