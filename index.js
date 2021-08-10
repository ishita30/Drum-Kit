for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick);//not added parenthesis in handleclick as then it would have called the function immediately.
  function handleClick()
  {
    var buttonInnerHtml = this.innerHtml;
    switch (buttonInnerHtml) {
      case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "a":
      var kick-bass = new Audio('sounds/kick-bass.mp3');
      kick-bass.play();
      break;

      case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

      case "d":
      var tom-1 = new Audio('sounds/tom-1.mp3');
      tom-1.play();
      break;

      case "j":
      var tom-2 = new Audio('sounds/tom-2.mp3');
      tom-2.play();
      break;

      case "k":
      var tom-3 = new Audio('sounds/tom-3.mp3');
      tom-3.play();
      break;

      case "l":
      var tom-4 = new Audio('sounds/tom-4.mp3');
      tom-4.play();
      break;

      default: console.log(buttonInnerHtml);

    }
    ////this.style.color="white";
    //
    // alert("I got clicked")
  }
}
