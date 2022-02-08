/* JS by Gavin Maurer */

/*function myFunc() {
    var mydiv = document.getElementById("mydiv");
    mydiv.innerHTML = "Hello World";
};*/

//initialize function called when the script loads
function initialize(){
    cities();
    //salary();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");
    
        var city = document.createElement("td");
        //first conditional block
            if (cityPop[i].city == 'Madison'){
                city.innerHTML = 'Badgerville';
            } else if (cityPop[i].city == 'Green Bay'){
                city.innerHTML = 'Packerville';
            } else {
                city.innerHTML = cityPop[i].city;
            }
    
            tr.appendChild(city);
    
            var pop = document.createElement("td");
        //second conditional block        
            if (cityPop[i].population < 500000){
                pop.innerHTML = cityPop[i].population;
            } else {
                pop.innerHTML = 'Too big!';
            };
    
            tr.appendChild(pop);
    
            table.appendChild(tr);
        };    
    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

//call the initialize function when the window has loaded

function salary() {
    var jobs = [
        'Janitor',
        'Delivery',
        'Manager',
        'Server'
    ]
    var moneyMade = [
        20000,
        15000,
        40000,
        23000
    ]

    var newTable = document.createElement('newTable');

    var newHeader = document.createElement("headerRow");

    //add the "City" column
    var jobHeader = document.createElement("tableHeader");
    jobHeader.innerHTML = "Job";
    newHeader.appendChild(jobHeader);

    //add the "Population" column
    var salaryHeader = document.createElement("tableHeader");
    salaryHeader.innerHTML = "Salary";
    newHeader.appendChild(salaryHeader);

    //add the row to the table
    newTable.appendChild(newHeader);

    //loop to add a new row for each city
    for (var i = 0; i < jobs.length; i++){
        var headerRow = document.createElement("headerRow");

        var job = document.createElement("tableHeader");
        job.innerHTML = jobs[i];
        headerRow.appendChild(job);

        var sal = document.createElement("tableHeader");
        sal.innerHTML = moneyMade[i];
        headerRow.appendChild(sal);

        newTable.appendChild(headerRow);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(newTable);
};




window.onload = initialize();
 