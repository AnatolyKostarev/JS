// Объявление функции strReverse для вывода введенных символов в обратном порядке
// Применение цикла for

const reverseStr = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

    let str1 = prompt('Введите фразу','');
    alert(reverseStr(str1));