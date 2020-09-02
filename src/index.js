const moment = require("moment"); //Librería de moment
const saludo = "hola es mi primer webpack";
console.log(saludo);

console.log(moment().format("DD MM YYYY"));
console.log(moment("1990-11-30", "YYYY-MM-DD").isValid()); //true
console.log(moment("hola-k-tal", "YY-MM-DD").isValid()); //false




const saludo2 = () =>{
    alert("saludos desde alert");
}

saludo2();