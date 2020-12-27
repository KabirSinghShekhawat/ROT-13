const inputField = document.querySelector('#passwordField');
const outputField = document.querySelector('#passwordOutput');

function rotateAlphabet(character, characterCase){
    let characterCode = character.charCodeAt(0);
    if(characterCase === 'lowerCase'){
        characterCode += 13;
        if(characterCode > 122){
            characterCode = characterCode - 122 + 97 - 1;
        }
    }else if(characterCase === 'upperCase'){
        characterCode += 13;
        if(characterCode > 90){
            characterCode = characterCode - 90 + 65 - 1;
        }
    }else{
        return character;
    }
    return String.fromCharCode(characterCode);
}

function isUppercaseAlphabet(characterValue){
    return characterValue >= 65 && characterValue <= 90;
}

function isLowercaseAlphabet(characterValue){
    return characterValue >= 97 && characterValue <= 122;
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

// outputField.addEventListener('change', () => {
//     outputField.innerHTML = rot13(outputField.value);
// });