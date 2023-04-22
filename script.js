// Print all the odd numbers from 1 through a value given by a user
function gettinOdd(num){

oddNumbers = []

    for (var i = 1; i <= num; i += 2){
        oddNumbers.push(i);
    }
    return oddNumbers;
}