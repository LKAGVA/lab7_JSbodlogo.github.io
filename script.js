
//Bod2
let password = prompt('Нууц үгээ оруулна уу...');
//textee shalgah
let checkLength = /\w{10}/;  //ymr ch hamaagu 10aas ih element  
let checkCapLetter = /[A-Z]+/;     
//tomUseg dor hayj neg udaa orsaon bh
let checkNumber = /[0-9]+/;
//too dor hayj neg udaa orsaon bh
let checkSpecialCharts = /\W+/;
//temdegt dor hayj neg udaa orsaon bh


    if(
        checkLength.test(password) &&
        checkCapLetter.test(password) &&
        checkNumber.test(password) &&
        checkSpecialCharts.test(password)
    ){
        console.log("Нууц үгийн шаардлага хангасан.")
    } else {
        console.log("Нууц үг шаардлага хангаагүй")
    }