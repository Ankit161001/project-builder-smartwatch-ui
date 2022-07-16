setdatentime = () => {
    var currentdate = new Date();
    let hours = currentdate.getHours()
    let add = 'HH'
    if (hours >= 12) {
        add ="PM"
    }
    else {
        add = "AM"
    }

    let day = currentdate.getDay()
    let day1 = "funday"
    if (day === 0) {
        day1 = "Sunday";
    }
    else if (day === 1) {
        day1 = "Monday";
    }
    else if (day === 2) {
        day1 = "Tuesday";
    }
    else if (day === 3) {
        day1 = "Wednesday";
    }
    else if (day === 4) {
        day1 = "Thursday";
    }
    else if (day === 5) {
        day1 = "Friday";
    }
    else if (day === 6) {
        day1 = "Saturday";
    }
    document.getElementById('time').innerText = hours + ":" + currentdate.getMinutes() + " " + add;
    document.getElementById('top-time').innerText = hours + ":" + currentdate.getMinutes() + " " + add;
    document.getElementById('day').innerText = day1;
    console.log(currentdate.getHours())
    console.log(currentdate.getMinutes())
    console.log(currentdate.getDay())
}
console.log(currentdate.getHours())
console.log(currentdate.getMinutes())
console.log(currentdate.getDay())

// setdatentime()

// const myFunction = () => {
//     console.log(`Hello world!`);
// };

//setInterval(myFunction, 2000);