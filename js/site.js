//Whenever you see a {} think that whatever in between is working


function getNumbers() {
    //access the webpage and get the value from the inputs
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //take the start and end values as the bounds fro a "for" loop
    // that will create an array and return it
    let numbers = generateNumbers(startValue, endValue);

    //take the array that was returned and pass it to a function that will
    //display it

    displayNumbers(numbers);

}

//Wrapper Function/method - a funtion that calls other functions
function generateNumbers(startValue, endValue) {
    let numbers = [];

    //loop over number from startValue to endValue
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

function displayNumbers(numbers) {
    let className = "even";
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        //% means the remainder of a division
        if (number % 2 == 0) {
            className = "even"
        } else {
            className = "odd"
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("output").innerHTML = templateRows
}