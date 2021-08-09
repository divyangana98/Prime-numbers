  // Ask user her name
  // Ask her Date of Birth
  // This time ask only DD/MM and don't take year
  // Calculate and show her whether it's a prime number or not.
  // If yes, ask her to share this on social media

  // Chalk to make it beautiful

  // Bonus: check the input type and show an error if user entered "potato" instead of a DD/MM format

  // give an error if DD is more than 31 or MM is more than 12

  // take it further and check the entire date for validity like 30/02 can never happen.

  var readlineSync = require("readline-sync");
  var moment = require("moment");
  var chalk = require("chalk");

  const error = chalk.bold.redBright;
  const ques = chalk.bold.blue;
  var userName = readlineSync.question(ques("Enter your name: "));

  var dob = readlineSync.question(ques("Enter your date of birth in the fomrat 'DD/MM': "));

  if(moment(dob,'DD/MM',true).isValid()){
    console.log("Correct Format.Let's proceed further....");
  }else{
    console.log(error("Invalid date!!!!"));
    process.exit()
  }


  var strDate = dob.split("/");
  var date = strDate[0];
  var mon = strDate[1];

console.log(chalk.bold.green("****************Valid date value check*****************"));
  //To check DD and MM values
  if((date>0 && date<=31) && (mon>=01 && mon<=12)){
    console.log("Correct date and month values");
    checkDate(date,mon);

  }else{
    console.log(error("Wrong values. Please try again."));
    process.exit();
  }

  console.log(chalk.bold.green("*****************Prime number check**************************"));

  function checkDate(date,mon){
    if(mon == 02){
      if(date>29){
        console.log("Not a valid Date. Please try again.")
      }
    }
  }
  //Let's check if date and mon are prime numbers
  var b = isPrime(date);
  console.log(chalk.yellow("Is date a prime number?",b));
  var b = isPrime(mon);
  console.log(chalk.yellow("Is month a prime number?",b));
  
  function isPrime(num){
    for(var i=2;i<num;i++){
      if(num%i === 0){
        //console.log(num+" is not a prime number");
        return false;
      }else{
        //console.log(num+" is a prime number");
        return true;
      }
    }
  }