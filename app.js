var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if (age.value==""|| height.value=="" || weight.value==""){
    alert ("all fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
}else{
    countBmi();
}
}

document.getElementById("submit").addEventListener("click", validateForm);

const countBMI=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1]/100));

    var result='';
    
    if (bmi<18.5)
    {
      result("Ooops! You are underweight. You gotta add pounds healthfully")
    }else if(18.5<=bmi&&bmi<=24.9){
      result("Yay!You're healthy, You can have a pizza or two!");
    }else if(25<=bmi&&bmi<=29.9){
       result("You gotta cut down on the unhealthystuff and you will perfectly be healthy!");
    }else if(30<=bmi&&bmi<=34.9){
        result("Ooops! It is high time that you train your brain to hate the junk!");
    }else if(30<=bmi){
        result='Obesity alert !no more junk I say!'
    }
}
