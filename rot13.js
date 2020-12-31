const inputField = document.querySelector('#passwordField');
const outputField = document.querySelector('#passwordOutput');
const rot13RotationValue = 13;
const lowerCaseLowerLimit = 97, lowerCaseUpperLimit = 122, 
    upperCaseUpperLimit = 90, upperCaseLowerLimit = 65;

function rotateAlphabet(character, characterCase){
    let characterCode = character.charCodeAt(0);
    if(characterCase === 'lowerCase'){
        characterCode += rot13RotationValue;
        if(characterCode > lowerCaseUpperLimit){
            characterCode = characterCode - lowerCaseUpperLimit + lowerCaseLowerLimit; - 1;
        }
    }else if(characterCase === 'upperCase'){
        characterCode += rot13RotationValue;
        if(characterCode > upperCaseUpperLimit){
            characterCode = characterCode - upperCaseUpperLimit + upperCaseLowerLimit - 1;
        }
    }else{
        return character;
    }
    return String.fromCharCode(characterCode);
}

function isUppercaseAlphabet(characterValue){
    return characterValue >= upperCaseLowerLimit && characterValue <= upperCaseUpperLimit;
}

function isLowercaseAlphabet(characterValue){
    return characterValue >= lowerCaseLowerLimit && characterValue <= lowerCaseUpperLimit;
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
        outputField.textContent = `Encrypted Password : ${rot13(inputField.value)}`;
    }
});
