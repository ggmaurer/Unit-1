
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //this logs the data in the console 
            console.log(myData)
        }) 

    //this doesnt log anything because the myData variable is defined within fetch
    console.log(myData)
};

window.onload = jsAjax();