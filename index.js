//Detecting button press
var numberofDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
    var currentButtonClick = this.innerHTML;
    makeSound(currentButtonClick);
    animation(currentButtonClick);
});
}

//Detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio('crash.mp3');
            crash.play(); 
            break;
        case "a":
            var kick = new Audio('kick-bass.mp3');
            kick.play(); 
            break;
        case "s":
            var snare = new Audio('snare.mp3');
            snare.play(); 
            break;
        case "d":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play(); 
            break;
        case "j":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play(); 
            break;
        case "k":
                var tom3 = new Audio('tom-3.mp3');
                tom3.play(); 
                break;
        case "l":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play(); 
            break;

        default : console.log(currentButtonClick);
    }
}

function animation(currentbutton){
    var activeButton = document.querySelector("." + currentbutton);
    activeButton.classList.add("pressed");

  setTimeout(action  => {
    activeButton.classList.remove("pressed");
  }, 100);
}

