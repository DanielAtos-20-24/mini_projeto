let arrayVazia = [];


for(let i = 0; i < 4; i++) {
    let numeroArray;

    do{
        numeroArray = parseInt(Math.random() * 10 + 1) //8
    } while (arrayVazia.includes(numeroArray));

    arrayVazia.push(numeroArray)
}

console.log(arrayVazia)



