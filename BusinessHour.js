// DIA Y HORA LABORAL
let dayNumber = parseInt(prompt("Enter the day of the week  (0-6)"));

let hourNumber = parseInt(prompt("Enter current hour: (form 24hrs)"));

function businessHour(dayNumber, hourNumber){
if(dayNumber >= 1 && dayNumber <= 5){
  if(hourNumber >= 9 && hourNumber <=18){
    console.log("Horario comercial y dia laboral");
  }
} else{
  console.log("Horario no Comercial");
  console.log("Dia no laboral");
}
}
businessHour(dayNumber,hourNumber);


