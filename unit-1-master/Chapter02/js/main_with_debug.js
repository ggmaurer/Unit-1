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

function initialize() {
	const table = buildHtml();

	populateExistingData(table);
	addColumns(cityPop);
	addEvents();
};

	//creates html elements
function buildHtml(){
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

	var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);

	return table;
};

function populateExistingData(table){
	//loop to add a new row for each city
	for (let i = 0; i < cityPop.length; i++){
		const tr = document.createElement("tr");
		//copmment
		const city = document.createElement("td");
		city.innerHTML = cityPop[i].city;
		tr.appendChild(city);

		const pop = document.createElement("td");
		pop.innerHTML = cityPop[i].population;
		tr.appendChild(pop);

		table.appendChild(tr);
	};
}


function addColumns(cityPop) {
    

    document.querySelectorAll("tr").forEach(function(row, i){
		

		if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		let citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};

    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		let color = "rgb(";
		
		for (let i = 0; i < 3; i++){
			
			let random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		console.log(color);
		document.querySelector('#mydiv').style.color = color;
	};

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme);
	});
};


window.onload = initialize();