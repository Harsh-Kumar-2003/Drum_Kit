var noOfDrums = document.querySelectorAll(".drum").length;
//for mouse click
for (var i = 0; i < noOfDrums ; i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var buttoninnerHtml = this.innerHTML;
        makeSound(buttoninnerHtml);
        animateButton(buttoninnerHtml);
    })
}
//for keyboard press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    animateButton(event.key);
})


function makeSound(key)
{
    switch (key)
        {
            case "w":
                var s1 = new Audio('./sounds/tom-1.mp3');
                s1.play();
                break;
            case "a":
                var s2 = new Audio('./sounds/tom-2.mp3');
                s2.play();
                break;
            case "s":
                var s3 = new Audio('./sounds/tom-3.mp3');
                s3.play();
                break;
            case "d":
                var s4 = new Audio('./sounds/tom-4.mp3');
                s4.play();
                break;
            case "j":
                var s5 = new Audio('./sounds/crash.mp3');
                s5.play();
                break;
            case "k":
                var s6 = new Audio('./sounds/kick-bass.mp3');
                s6.play();
                break;
            case "l":
                var s7 = new Audio('./sounds/snare.mp3');
                s7.play();
                break;
            default:
        }
}

function animateButton(key)
{
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    },100)
}