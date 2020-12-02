// const reverseStr = (str) => {

//     let newStr = '', i;

//         for (i = str.length - 1; i >= 0; i--) {

//             newStr += str.charAt(i);
    
//         };

//         return newStr;
//     };
//     str = prompt('Введите строку', '');
//     alert(reverseStr(str));


    const strReverse = (str) => {
        let i = str.length - 1;
        let result = '';

        while(i >= 0) {
            result += str[i];
            i -= 1;
        }
        return result;
    }
    let str = prompt('Введите фразу', '');
    alert(strReverse(str));