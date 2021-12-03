const inputForm = function(inputValue) {
    if (typeof inputValue !== 'string') {
        return ("Это не строка.");
    } else {
        inputValue = inputValue.trim();
        if (inputValue.length > 30) {
            inputValue = inputValue.substring(0, 30) + '...';
        }
        return inputValue;
    }
}

console.log(inputForm('            qazwsxedcrfvtgbyhnujmikkiumjynhtbggrvfrecdewxsqza'))