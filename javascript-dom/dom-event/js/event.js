// system 1 direct 
//<button onclick="document.body.style.backgroundColor='Aquamarine'">Make Aquamarine</button>
// system 2
//     <button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue; // Assign the function to onclick

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// system 3
// important :we will use this
//     <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// system 4 same as 2
//     <button id="make-purple">Make purple</button>
const purpleButton=document.getElementById('make-purple');
purpleButton.onclick=function buttonClick(){
  document.body.style.backgroundColor='purple';
}
// system 5
//     <button id="make-pink">Pink</button>
const pinkButton=document.getElementById('make-pink');
     pinkButton.addEventListener('click',makepink)
     function makepink(){
        document.body.style.backgroundColor='pink'
     }
// system 5 another
//     <button id="make-green">Make green</button>
const makeGreenbutton=document.getElementById('make-green');
     makeGreenbutton.addEventListener('click',function makegreen(){
        document.body.style.backgroundColor='green';
     })
// system 6
// important :We will use this 
//     <button id="make-goldenrod">make goldenRod</button>
document.getElementById('make-goldenrod').addEventListener('click',function(){
  document.body.style.backgroundColor='goldenrod';
})