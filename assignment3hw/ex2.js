// Ex.2 a

// function MyGrade(grade){
//     if(grade >= 97 && grade<=100){
//         console.log("Your grade is " + grade + " which corresponds to A+. You passed!");
//     }
//     else if(grade >= 93 && grade<=96){
//         console.log("Your grade is " + grade + " which corresponds to A. You passed!");
//     }
//     else if(grade >= 90 && grade<=92){
//         console.log("Your grade is " + grade + " which corresponds to A-. You passed!");
//     }
//     else if(grade >= 87 && grade<=89){
//         console.log("Your grade is " + grade + " which corresponds to B+. You passed!");
//     }
//     else if(grade >= 83 && grade<=86){
//         console.log("Your grade is " + grade + " which corresponds to B. You passed!");
//     }
//     else if(grade >= 80 && grade<=82){
//         console.log("Your grade is " + grade + " which corresponds to B-. You passed!");
//     }
//     else if(grade >= 77 && grade<=79){
//         console.log("Your grade is " + grade + " which corresponds to C+. You passed!");
//     }
//     else if(grade >= 73 && grade<=76){
//         console.log("Your grade is " + grade + " which corresponds to C. You passed!");
//     }
//     else if(grade >= 70 && grade<=72){
//         console.log("Your grade is " + grade + " which corresponds to C-. You passed!");
//     }
//     else{
//         console.log("Your grade is " + grade + " which corresponds to F. You failed!");
//     }
// }

// let grade = 100;
// MyGrade(grade);

// Ex. 2 b

function MyGrade(grade){
    switch(!!grade){
        case grade >= 90 && grade <= 100:
            console.log("Your grade is " + grade + " which corresponds to A+. You passed!");
        break;
        case grade >= 80 && grade <= 90:
            console.log("Your grade is " + grade + " which corresponds to B+. You passed!");
        break; 
        case grade >= 70 && grade <= 80:
            console.log("Your grade is " + grade + " which corresponds to C+. You passed!");
        break; 
        case grade >= 60 && grade <= 70:
            console.log("Your grade is " + grade + " which corresponds to D+. You passed!");
        break; 
        default: 
        console.log("Your grade is " + grade + " which corresponds to F. You failed!");
        break;
    }
}
 
let grade = 76;
MyGrade(grade);
