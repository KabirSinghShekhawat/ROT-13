const inputField = document.querySelector('#passwordField')
const outputField = document.querySelector('#passwordOutput')

const rot13RotationValue = 13
const
    lowerCaseLowerLimit = 97,
    lowerCaseUpperLimit = 122,
    upperCaseLowerLimit = 65,
    upperCaseUpperLimit = 90;

function rotate(characterCode, lowerLimit, upperLimit) {
    characterCode += rot13RotationValue
    if (characterCode > upperLimit) {
        characterCode -= upperLimit
        characterCode += lowerLimit - 1
    }
    return String.fromCharCode(characterCode)
}

function rotateAlphabet(character, characterCase) {
    const characterCode = character.charCodeAt(0)
    if (characterCase === 'lowerCase')
        return rotate(characterCode, lowerCaseLowerLimit, lowerCaseUpperLimit)
    if (characterCase === 'upperCase')
        return rotate(characterCode, upperCaseLowerLimit, upperCaseUpperLimit)
    return character
}

function isUppercaseAlphabet(characterValue) {
    return characterValue >= upperCaseLowerLimit &&
        characterValue <= upperCaseUpperLimit;
}

function isLowercaseAlphabet(characterValue) {
    return characterValue >= lowerCaseLowerLimit &&
        characterValue <= lowerCaseUpperLimit
}

function isAlphabet(character) {
    let characterValue = character.charCodeAt(0)
    if (isLowercaseAlphabet(characterValue)) return 'lowerCase'
    if (isUppercaseAlphabet(characterValue)) return 'upperCase'
    return 'notAlphabet'
}

function rot13Alphabet(character) {
    return rotateAlphabet(character, isAlphabet(character))
}

function rot13(textInput) {
    if (!textInput) return

    const text = String(textInput)
    let finalResult = ''

    for (let character of text)
        finalResult += rot13Alphabet(character)
    return finalResult
}

inputField.addEventListener('input', () => {
    if (!inputField.value)
        return outputField.classList.add('remove')

    outputField.classList.remove('remove')
    outputField.textContent =
        `Encrypted Password : ${rot13(inputField.value)}`
})
