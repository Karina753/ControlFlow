var today = new Date();
var dayNumber  = today.getDay();    //obteniendo el día
var hourNumber = today.getHours(); //obteniendo la hora
var dayOfYear  = Number(window.prompt("Enter one day of the year (0-365): ",""));
var startYear  = Number(window.prompt("Enter the number of the day the year started (0-6): ",""));

function businessHours(dayNumber, hourNumber){
  if(dayNumber >= 1 && dayNumber <= 5 && hourNumber >= 9 && hourNumber <= 18){
    return true;
  }else{
    return false;
  }
}

function getDayNumber(janFirstDayNumber, yearDayNumber){
  var day = yearDayNumber%7;
  if(day >= 3 && day <=6){
    day = day - 3;
  }else if(day === 2){
    day = 6;
  }else if(day === 1){
    day = 5;
  }else if(day === 0){
    day = 4;
  }
  return day;
}

function isHourBusiness(hours,day){
  if(hours == true && day >= 1 && day <= 5){
    alert("It's Business hour ");
  }else{
    alert("Isn't Business hours ");
  }
}

isHourBusiness(businessHours(dayNumber, hourNumber), getDayNumber(startYear, dayOfYear));