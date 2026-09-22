function checkTemperature(temperature){
    if(temperature>30){
    console.log("temperature is Hot");
    }
    else if(temperature>=20 && temperature<=30){ 
       console.log("temperature is Normal");
    }
    else{
        console.log("temperature is Cold");
    }
}
let temperature=20;
checkTemperature(temperature);