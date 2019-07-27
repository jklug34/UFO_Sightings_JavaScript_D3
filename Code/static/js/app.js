// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.


// from data.js assign a varible
var tableData = data;
console.log(tableData);

// select the filter table button
var button = d3.selectAll(".btn-default");
button.on("click", function() {
console.log(button)    

    // DATE
    // select the datetime input element and get input value
    if (inputElementDate != "") {
        
        d3.event.preventDefault();
        var inputElementDate = d3.select("#datetime.form-control").node().value  
        console.log(inputElementDate)
         // clear the input value
        d3.select("#datetime.form-control").node().value = "";

        // filter by date in input
        var filteredDate = tableData.filter(date => date.datetime === inputElementDate);
        console.log(filteredDate);
        // console.log(Object.values(filteredDate[0])[0])

        // create seperate arrays with all columns of data from the filtered table by date
        var dataFilterDate = filteredDate.map(date => date.datetime);
        var dataFilterCity = filteredDate.map(date => date.city);
        var dataFilterState = filteredDate.map(date => date.state);
        var dataFilterCountry = filteredDate.map(date => date.country);
        var dataFilterShape = filteredDate.map(date => date.shape);
        var dataFilterDuration = filteredDate.map(date => date.durationMinutes);
        var dataFilterComments = filteredDate.map(date => date.comments);
        }

    // CITY
    // select the city input element and get input value
    else if (inputElementCity != "") {

        d3.event.preventDefault();
        var inputElementCity = d3.select("#city.form-control").node().value;
         // clear the input value
        d3.select("#city.form-control").node().value = "";  

        // filter by city input
        var filteredCity = tableData.filter(city => city.city === inputElementCity);
        console.log(filteredCity);

        // create seperate arrays with all columns of data from the filtered table by city
        var dataFilterDate = filteredCity.map(city => city.datetime);
        var dataFilterCity = filteredCity.map(city => city.city);
        var dataFilterState = filteredCity.map(city => city.state);
        var dataFilterCountry = filteredCity.map(city => city.country);
        var dataFilterShape = filteredCity.map(city => city.shape);
        var dataFilterDuration = filteredCity.map(city => city.durationMinutes);
        var dataFilterComments = filteredCity.map(city => city.comments);
        }

    //STATE
    // select the state input element and get input value
    else if (inputElementState != "") {    

        d3.event.preventDefault();
        var inputElementState = d3.select("#state.form-control").node().value;
         // clear the input value
        d3.select("#state.form-control").node().value = "";  

        // filter by state input
        var filteredState = tableData.filter(state => state.state === inputElementState);
        console.log(filteredState);

        // create seperate arrays with all columns of data from the filtered table by state
        var dataFilterDate = filteredState.map(state => state.datetime);
        var dataFilterCity = filteredState.map(state => state.city);
        var dataFilterState = filteredState.map(state => state.state);
        var dataFilterCountry = filteredState.map(state => state.country);
        var dataFilterShape = filteredState.map(state => state.shape);
        var dataFilterDuration = filteredState.map(state => state.durationMinutes);
        var dataFilterComments = filteredState.map(state => state.comments);
        }
    
    // COUNTRY
    // select the country input element and get input value
    else if (inputElementCountry != "") {      

        d3.event.preventDefault();
        var inputElementCountry = d3.select("#country.form-control").node().value;
         // clear the input value
        d3.select("#country.form-control").node().value = "";  

        // filter by country input
        var filteredCountry = tableData.filter(country => country.country === inputElementCountry);
        console.log(filteredCountry);

        // create seperate arrays with all columns of data from the filtered table by country
        var dataFilterDate = filteredCountry.map(country => country.datetime);
        var dataFilterCity = filteredCountry.map(country => country.city);
        var dataFilterState = filteredCountry.map(country => country.state);
        var dataFilterCountry = filteredCountry.map(country => country.country);
        var dataFilterShape = filteredCountry.map(country => country.shape);
        var dataFilterDuration = filteredCountry.map(country => country.durationMinutes);
        var dataFilterComments = filteredCountry.map(country => country.comments);
        }
    
    // SHAPE
    // select the shape input element and get input value
    else if (inputElementShape != "") {     

        d3.event.preventDefault();
        var inputElementShape = d3.select("#shape.form-control").node().value;
         // clear the input value
        d3.select("#shape.form-control").node().value = "";   

        // filter by shape input
        var filteredShape = tableData.filter(shape => shape.shape === inputElementShape);
        console.log(filteredShape);

        // create seperate arrays with all columns of data from the filtered table by shape
        var dataFilterDate = filteredShape.map(shape => shape.datetime);
        var dataFilterCity = filteredShape.map(shape => shape.city);
        var dataFilterState = filteredShape.map(shape => shape.state);
        var dataFilterCountry = filteredShape.map(shape => shape.country);
        var dataFilterShape = filteredShape.map(shape => shape.shape);
        var dataFilterDuration = filteredShape.map(shape => shape.durationMinutes);
        var dataFilterComments = filteredShape.map(shape => shape.comments);
    }
    else {
        console.log("Data not found. Try another search term")
    }

        // console.log("------------------------------")
        // console.log(Object.values(filteredDate[0])[0])
        // console.log("------------------------------")
    

    console.log(dataFilterComments);

    // use .replace to replace "&#44", "&#39", "&#33" with ",", "'", "!"  in the comments adding the correct punctuation
    var cleanComments = []
    var mapObj = {
    "&#44":",",
    "&#39":"'",
    "&#33":"!",
    "&quot;": "''"
    };
    for (var i=0; i<dataFilterComments.length;i++) {
            var clean =  dataFilterComments[i].replace(/&#44|&#39|&#33|&quot;/gi, function(matched){
            return mapObj[matched]
            
            });
            cleanComments.push(clean)
    };


    console.log(cleanComments);
    console.log("-------------------------------")


    // Build a function that adds rows to the tbody of table id = "ufo-table"
    function buildTable() {
        // select the id = "ufo-table" which identifies the table"
        var table = d3.select("#ufo-table");
        // select the table body with "tbody"    
        var tbody = table.select("tbody");
        // begin by clearing the table body for the next search
        tbody.html("");
        // loop through each table row and add the text filtered from above by date
        var trow;
        for (var i = 0; i < dataFilterDate.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(dataFilterDate[i]);
        trow.append("td").text(dataFilterCity[i]);
        trow.append("td").text(dataFilterState[i]);
        trow.append("td").text(dataFilterCountry[i]);
        trow.append("td").text(dataFilterShape[i]);
        trow.append("td").text(dataFilterDuration[i]);
        trow.append("td").text(cleanComments[i]);
        };
    };

    // call the function  
    buildTable()
    // }       
});




