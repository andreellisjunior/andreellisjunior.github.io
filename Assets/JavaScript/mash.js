function mash() {

  var name = document.getElementById('input').value;

  if (name == "") {

    alert("Please Enter Your Name.");
    return false;

  } else if (!isNaN(name)) {

    alert("Can't Use Numbers. Please Enter Your Name");

    return false;

  } else {

    //Function that creates a text-based game called M.A.S.H.
    //Defined variables to get the structure of information in arrays.
    var jobs = ["Doctor", "Nurse", "Google Exec", "Truck driver", "Receptionist", "Hobo", "Professional Procrastinator", "Lazy Bum", "Toenail Cleaner", "Executive Earwax Extractor", "Booger Therapist", "Bank Teller", "Professional Vexacious Babysitter", "Center Intellegence Accident"];
    var money = ["$10,000", "$12,000", "100,000", "$25,000,000", "$13.00", "$0.51", "$34,000,000,000,000", "$257", "$1000", "$49.99", "$19.95", "$0.01"];
    var house = ["Mansion", "Apartment", "Shack", "House"];
    var car = ["Lambo", "Ferari", "Nissan", "Oldsmobile", "Station Wagon", "Soccer Mom Van", "Bicycle", "3 Wheeler(Your son's bike when he was 3 and half)", "Rolls Royce", "Maybach", "Green Machine"];
    var spouse = ["Married", "Single", "Divorced", "Widowed"];
    var kids = ["6", "12", "2", "15 (And only 2 Belong To You)", "0 (You Hate Kids All Because Of Your Sister's)", "1 and a half (Not Born Yet)", "8"];

    //Created new variables that randomizes the values in each array.
    var jobsRand = jobs[Math.floor(Math.random() * jobs.length)];
    var moneyRand = money[Math.floor(Math.random() * money.length)];
    var houseRand = house[Math.floor(Math.random() * house.length)];
    var carRand = car[Math.floor(Math.random() * car.length)];
    var spouseRand = spouse[Math.floor(Math.random() * spouse.length)];
    var kidsRand = kids[Math.floor(Math.random() * kids.length)];

    //DOM element! Outputs the result in an organized manner.
    document.getElementById("results").innerHTML = ("Your name is " + name + ". " + "You are a " + jobsRand + " currently making " + moneyRand + " a year! You live in a " + houseRand + " while driving a " + carRand + "! You are currently " + spouseRand + " with " + kidsRand + " kids! Thanks for playing!");
    
  }
  return true;
}