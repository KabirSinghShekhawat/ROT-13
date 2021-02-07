const inputField = document.querySelector('#passwordField');
const outputField = document.querySelector('#passwordOutput');

const rot13RotationValue = 13;
const lowerCaseLowerLimit = 97, lowerCaseUpperLimit = 122,                  
<<<<<<< HEAD
      upperCaseLowerLimit = 65, upperCaseUpperLimit = 90;
=======
      upperCaseUpperLimit = 90, upperCaseLowerLimit = 65;
>>>>>>> 42394da2bfd76d527bc454e2b67ac3858e2a13b6

function rotateAlphabet(character, characterCase){
    let characterCode = character.charCodeAt(0);
    if(characterCase === 'lowerCase'){
        characterCode += rot13RotationValue;
        if(characterCode > lowerCaseUpperLimit){
<<<<<<< HEAD
            characterCode -= lowerCaseUpperLimit;
            characterCode += lowerCaseLowerLimit - 1;
=======
            characterCode -= lowerCaseUpperLimit + lowerCaseLowerLimit - 1;
>>>>>>> 42394da2bfd76d527bc454e2b67ac3858e2a13b6
        }
    }else if(characterCase === 'upperCase'){
        characterCode += rot13RotationValue;
        if(characterCode > upperCaseUpperLimit){
            characterCode -= upperCaseUpperLimit 
            characterCode += upperCaseLowerLimit - 1;
        }
    }else{
        return character;
    }
    return String.fromCharCode(characterCode);
}

function isUppercaseAlphabet(characterValue){
    return characterValue >= upperCaseLowerLimit &&
           characterValue <= upperCaseUpperLimit;
}

function isLowercaseAlphabet(characterValue){
    return characterValue >= lowerCaseLowerLimit &&
           characterValue <= lowerCaseUpperLimit;
}
function isAlphabet(character) {
    let characterValue = character.charCodeAt(0);
    if(isLowercaseAlphabet(characterValue)){
        return 'lowerCase';
    }else if(isUppercaseAlphabet(characterValue)){
        return 'upperCase';
    }else{
        return 'notAlphabet';
    }
}

function rot13Alphabet(character) {
    return rotateAlphabet(character, isAlphabet(character));
}

function rot13(textInput){
    if(textInput == null) return;

    let finalResult = '';
    for(let character of String(textInput)){
        finalResult += rot13Alphabet(character);
    }
    return finalResult;
}   

inputField.addEventListener('input', () => {
    if(!inputField.value){
        outputField.classList.add('remove');
    }else{
        outputField.classList.remove('remove');
        outputField.textContent = `Encrypted Password : 
                                   ${rot13(inputField.value)}`;
    }
});
