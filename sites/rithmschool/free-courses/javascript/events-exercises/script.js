document.addEventListener("DOMContentLoaded", function(){         
    document.getElementById("change_heading").textContent = "Hello World!";
    var section = document.querySelector("section");
    var sectionDiv = document.querySelectorAll("section > div");
    // var displayColor = document.querySelector(".selected");
    // for (var i = 0; i < sectionDiv.length; i++) {
    //     sectionDiv[i].addEventListener("mouseenter", function(event){
    //         var target = event.target;
    //         displayColor.textContent = target.className;
    //     });
    // }
    
    section.addEventListener("mouseover", function(event){
        var selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    });
    
    var newDiv = document.createElement("div");
    newDiv.classList.add("purple");
    section.appendChild(newDiv);
    
    function startRace() {
        var randomNum1 = Math.floor(Math.random() * 100);
        var randomNum2 = Math.floor(Math.random() * 100);
        var car1 = document.querySelector(".car1");
        var car2 = document.querySelector(".car2");
        // debugger;
        var timer1 = setInterval(function() {
            car1.style.left = randomNum1 + "px";
            randomNum1 += Math.floor(Math.random() * 100);
            console.log(car1.style.left);
            if (parseInt(car1.style.left) > window.screen.width - 100) {
                console.log("WINNER CAR1");
                clearInterval(timer1);
                clearInterval(timer2);
            }
        }, 500);
        var timer2 = setInterval(function() {
            car2.style.left = randomNum2 + "px";
            randomNum2 += Math.floor(Math.random() * 100);
            console.log(car2.style.left);
            if (parseInt(car2.style.left) > window.screen.width - 100) {
                console.log("WINNER CAR2");
                clearInterval(timer1);
                clearInterval(timer2);
            }
        }, 500);                    
    }
    
    var button = document.querySelector("button");
    button.addEventListener("click", function(){
        startRace();
    });
});