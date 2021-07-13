//Whenever you see a {} think that whatever in between is working


function getNumbers() {
    //access the webpage and get the value from the inputs
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // The above lines can be used in a parseInt
    //parseFloat is a decimal function
    //while parseInt is an interger function 
    //The example below this line is the parseInt example 
    let newStart = parseInt(startValue)
    let newEnd = parseInt(endValue)

    let errorState = false;
    let errorMsg = "";

    if (isNaN(newStart) || isNaN(newEnd)) {
        errorState = true;
        errorMsg += "Please use numbers<hr/>"
    }

    if (newStart > newEnd) {
        errorState = true;
        errorMsg += "Start value must be less than end value<hr/>"
    }
    if (newStart > 10000 || newStart < -10000 || newEnd > 10000 || newEnd < -10000) {
        errorState = true;
        errorMsg += "-10,000 and 10,000 are the limit<hr/>"
    }

    if (errorState) {
        Swal.fire(
            'Uh Oh!',
            'Something went wrong',
            'Error'
        )
    }
    //take the start and end values as the bounds fro a "for" loop
    // that will create an array and return it
    let numbers = generateNumbers(newStart, newEnd);

    //take the array that was returned and pass it to a function that will
    //display it

    displayNumbers(numbers);

}

//Wrapper Function/method - a funtion that calls other functions
function generateNumbers(newStart, newEnd) {
    let numbers = [];

    //loop over number from startValue to endValue
    for (let index = newStart; index <= newEnd; index++) {
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