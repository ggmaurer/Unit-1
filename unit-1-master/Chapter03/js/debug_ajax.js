
//setting cityPop as a global variable to be accessed by all functions
const cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];
//calling all functions via initialize
function initialize() {
	const table = buildHtml();

	populateExistingData(table);
	addColumns(cityPop);
	addEvents();
	debugAjax();
};

	//creates html elements
function buildHtml(){
	
	//creates table element
	const table = document.createElement("table");

	//create a header row
	const headerRow = document.createElement("tr");

	//add the "City" column
	const cityHeader = document.createElement("th");
	cityHeader.innerHTML = "City";
	headerRow.appendChild(cityHeader);

	//add the "Population" column
	const popHeader = document.createElement("th");
	popHeader.innerHTML = "Population";
	headerRow.appendChild(popHeader);

	//add the row to the table
	table.appendChild(headerRow);

	//uploads table to live site
	var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);

	//returns the table to be accessed by other functions
	return table;
};

function populateExistingData(table){

	//loop to add a new row for each city
	for (let i = 0; i < cityPop.length; i++){
		const tr = document.createElement("tr");
		//adds city name to table
		const city = document.createElement("td");
		city.innerHTML = cityPop[i].city;
		tr.appendChild(city);
		//adds city population to table
		const pop = document.createElement("td");
		pop.innerHTML = cityPop[i].population;
		tr.appendChild(pop);
		//adds new row to the table
		table.appendChild(tr);
	};
}


function addColumns(cityPop) {

    document.querySelectorAll("tr").forEach(function(row, i){

		if (i == 0){
			//inserts the city size header to a new column on the table
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		let citySize;
			//filters through populations and filters the city size name based on size
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			//adds the city size to the table
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};

    });
};

function addEvents(){
	//changes the color of the table when you hover over each item with your mouse
	document.querySelector("table").addEventListener("mouseover", function(){
		
		let color = "rgb(";
		
		for (let i = 0; i < 3; i++){
			//setting up the random color selection
			const random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		console.log(color);
		//applies the color to the mydiv
		document.querySelector('table').style.color = color;
	};
	//adds an alert when clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme);
	});
};




//posts the data to the page
function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: </br>' + JSON.stringify(response))
};

function debugAjax(){
//fetches the data from JSON file
	fetch("data/TheBigCities.json")
		.then(function(response){
			//converts to JSON
			return response.json();
		})
			.then(debugCallback);
		};	

//onloads all the functions within initialize to the window
window.onload = initialize();