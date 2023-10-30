const charAmountRange = document.getElementById('charRange');

const charAmountNumber = document.getElementById('charNumber');

const form = document.getElementById('passwordGeneratorForm');

const includeUppercaseElement = document.getElementById('includeUppercase');

const includeNumbersElement = document.getElementById('includeNumbers');

const includeSymbolsElement = document.getElementById('includeSymbols');

const passwordDisplay = document.getElementById('password-display');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126)
)

charAmountRange.addEventListener('input', syncCharacterNumber);
charAmountNumber.addEventListener('input', syncCharacterNumber);

form.addEventListener('submit', e=>{
    e.preventDefault();
    const characterAmount = charAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)

    passwordDisplay.innerHTML = password;
})


function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES

    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)

    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passworCharacters = []
    for(i=0; i<characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passworCharacters.push(String.fromCharCode(characterCode))
    }
    return passworCharacters.join('');
}

function arrayFromLowToHigh(low, high){
    const array = [];
    for(i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}


function syncCharacterNumber(e){
    const value = e.target.value;
    charAmountNumber.value = value;
    charAmountRange.value = value;
}



