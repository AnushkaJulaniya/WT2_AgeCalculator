let para = document.getElementById("para");
let btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    let dob = document.getElementById("DOB").value;

    if (!dob) {
        alert("Please enter your birthday");
    }
    else {

        let enterDOB = new Date(dob);// store entered date of birth
        let DOByear = enterDOB.getFullYear();// store entered date of birth year

        var currentDate = new Date();//store current date
        let currentyear = currentDate.getFullYear();// store current year

        let age = currentyear - DOByear;// calculate age
        para.innerText = `Your age is ${age} years old`;
    }
});
