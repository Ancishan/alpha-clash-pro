// function play(){
// //    hide the home screen .to hide the screen add the class hidden class

// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection.classList)

// // show the playground
// const playGroundSection = document.getElementById('play-grounds');
// playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList);

// const scoreSection = document.getElementById('score-section');
// scoreSection.classList.add('hidden')

// }
function continueGame(){
    // step-1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play()
{
    hideElementById('home-screen')
    showElementById('play-grounds')
    continueGame()
}