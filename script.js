//Assignment-04


//------------------------------Solution 01----------------------------------

function calculateTax(income, expenses) {
    const remainingIncome = income - expenses;
    const tax = remainingIncome *.20;

    if(income <=0 || expenses <=0 || income < expenses ){
        return "Invalid Input"
    }
    return tax
}




//------------------------------Solution 02----------------------------------

function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return "Invalid Email"
    }

    const splitEmail = email.split('@');
    const userName = splitEmail[0];
    const domainName = splitEmail[1];

    const notification = userName + ' sent you an email from ' + domainName
    return notification

}


//------------------------------Solution 03----------------------------------


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }
    
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i]) && name[i] !== ' '){
            return true
        }
    }

    return false
    
}




//------------------------------Solution 04----------------------------------


function calculateFinalScore(obj) {
    if(typeof obj !== 'object' ){
        return "Invalid Input"
    }
    

    if ( typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || obj.testScore >= 50 || typeof obj.schoolGrade !== 'number' || obj.schoolGrade >= 30 || typeof obj.isFFamily !== 'boolean'){
        return "Invalid Input"
    }

    let studentMarks = obj.testScore + obj.schoolGrade

    if(obj.isFFamily === true){
       studentMarks += 20
    }

    if(studentMarks >= 80){
        return true
    }
    return false
}




//------------------------------Solution 05----------------------------------

function  waitingTime(waitingTimes  , serialNumber) {
    
    if( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }

    let sum = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        sum = sum + waitingTimes[i]
    }
    
    const average = Math.round(sum / waitingTimes.length);

    const serialRemaining = serialNumber - waitingTimes.length -1
    const reaminingTime = average * serialRemaining ;

    return reaminingTime;

}






//Backup Iink: https://github.com/rehan606/JavaScript-Function-Problems-Solution.git

