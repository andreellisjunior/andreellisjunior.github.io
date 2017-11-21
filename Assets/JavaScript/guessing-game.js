function answer() {

    var user = document.getElementById('answer').value;

    var randNum = (Math.floor(Math.random() * 10) + 1);

    var result = document.getElementById('result');

    if (user == 0 || user > 10) {
        alert('Please choose betweend 1 - 10');

    } else {

        if (user == randNum) {
            result.innerHTML = "The Answer Is: " + randNum + "! WIN: You Will Have A WONDERFUL Day!";
            result.style.color = "green";
        } else {
            result.innerHTML = "The Answer Is: " + randNum + "! LOSE: You Will NOT Have A Wonderful Day!";
            result.style.color = "red";
        }
        return false;
    }

    return true;
}