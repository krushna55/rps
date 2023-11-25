document.querySelector("button").addEventListener("click",dice)

function dice(){
var randomNumber = Math.floor(Math.random()*3 + 1);
var randomPicNumber = "pic" + randomNumber + ".png";
var image1 = document.getElementById("img1")
image1.setAttribute("src",randomPicNumber);
 // for 2nd photo
 var randomNumber2 = Math.floor(Math.random()*3+1);
 var randomPicNumber2 = "pic" + randomNumber2 + ".png";
 document.getElementById("img2").setAttribute("src",randomPicNumber2);

 // 1 - rock ,2 - scissor , 3 - paper
 if(randomNumber == 1 && randomNumber2 ==2 || randomNumber == 2 && randomNumber == 3 || randomNumber == 3 && randomNumber2 ==1) {
    document.querySelector('h1').innerHTML="Player 1 won 😃!!!!"
 }
 else if(randomNumber == 2 && randomNumber2 ==1 || randomNumber == 3 && randomNumber2 == 2 || randomNumber == 1 && randomNumber2 == 3){
    document.querySelector('h1').innerHTML="Player 2 won 😎!!!!!"
 }else{
    document.querySelector('h1').innerHTML="It's a tie !!!!"
 }
}
 
