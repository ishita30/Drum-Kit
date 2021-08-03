for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick);//not added parenthesis in handleclick as then it would have called the function immediately.
  function handleClick()
  {
    this.style.color="white";
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    // alert("I got clicked")
  }
}
