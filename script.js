function checkResult() {

    var marks = Number(document.getElementById("marks").value);
    var grade = "";
    var passStatus = "";
    // console.log(marks);
    
    if(marks >= 90 && marks <= 100) {
        grade = "A+"
        passStatus = "Passed"
    }
    else if (marks >= 80 && marks <= 89){
        grade = "A"
        passStatus = "Passed"
    }
    else if (marks >= 70 && marks <= 79){
        grade = "B+"
        passStatus = "Passed"
    }
    else if (marks >= 60 && marks <= 69){
        grade = "B"
        passStatus = "Passed"
    }
    else if (marks >= 50 && marks <= 59){
        grade = "C+"
        passStatus = "Passed"
    }
    else if (marks >= 40 && marks <= 49){
        grade = "C"
        passStatus = "Passed"
    }
    else if (marks >= 30 && marks <= 39) {
        grade = "D+"
        passStatus = "Passed"
    }
    else if (marks >= 20 && marks <= 29) {
        grade = "D"
        passStatus = "Failed"
    }
    else if (marks >= 0 && marks <= 19) {
        grade = "E"
        passStatus = "Failed"
    }
    else {
        grade = "Entered Mark Is Invalid"
        passStatus = "Please enter marks between 0 and 100."
    }
    
    console.log(marks);
    console.log(passStatus);
    
    // Display the result
    document.getElementById("result").innerHTML = "Your grade is : " + grade + " . " + " Status : " + passStatus;
}
