
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for ( var num = 0; num < numberOfDrumButtons; num ++ ){

    document.querySelectorAll(".drum")[num].addEventListener("click", buttonClick);

    //Detecting Clicks

    function buttonClick(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    }

    //Detecting Keyboard Clicks

    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){
        switch (key) {
            case "w":
                var crash = new Audio ("sounds/crash.mp3");
                crash.play();

                break;

            case "d":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                tom1.play();
                
                break;

            case "j":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                tom2.play();
            
            break;
            
            case "k":
                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play();

                break;

            case "l":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();

                break;
            
            case "a":
                var base = new Audio ("sounds/kick-bass.mp3");
                base.play();   
                
                break;

            case "s":
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();    
                
                break;
            
            default:
                console.log(buttonInnerHTML);
        }
    }

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }), 100;
    }

}


// var audio = new Audio ("sounds/tom-1.mp3");
// audio.play();
// //alert("I got clicked!");