<h1> JavaScript Function Problems Solution ( Assignment-04)</h1>

<h3>Solution-01</h3>

function calculateTax(income, expenses) {
    const remainingIncome = income - expenses;
    const tax = remainingIncome *.20;

    if(income <=0 || expenses <=0 || income < expenses ){
        return "Invalid Input"
    }
    return tax
}



<h3>Solution-02</h3>

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




<h3>Solution-03</h3>

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




<h3>Solution-04</h3>

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





<h3>Solution-05</h3>

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

