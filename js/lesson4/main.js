// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return Math.pow(r, 2) * Math.PI;
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(r, h) {
    return 2 * Math.PI * r * (h + r);
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
    for (let value of array) {
        console.log(value);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(par) {
    document.write(`<p>${par}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(item) {
    document.write(`<ul>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`</ul>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlByLoop(item, amountOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < amountOfLi; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildList(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${typeof array[i]} : ${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array = [
    {
        id: 1,
        name: "Gabe",
        age: 20
    },
    {
        id: 2,
        name: "Bob",
        age: 25
    },
    {
        id: 3,
        name: "John",
        age: 18
    },
    {
        id: 4,
        name: "Jane",
        age: 21
    }
];
function printFunc(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
                            <p>id: ${array[i].id}</p>
                            <p>id: ${array[i].name}</p>
                            <p>id: ${array[i].age}</p>
                        </div>`)
    }
}

// - створити функцію яка повертає найменьше число з масиву
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let value = currencyValues.find(obj => {
        return obj.currency === exchangeCurrency
    })
    return sumUAH / value;
}
