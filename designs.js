// Select color input


// Select size input

//get the form from html.
let inputform = document.getElementById("sizePicker");

// By clicking submit button using addEventListener
inputform.addEventListener('submit', function(e){

    //to stop page refresh
    e.preventDefault();

    var gridHeight = document.getElementById("inputHeight").value;  //Grid height
    var gridWidth = document.getElementById("inputWidth").value;    //Grid width
    //console.log("height" +gridHeight);
    //console.log("width" +gridWidth);

    //calling makegrid() to make a gridbox with above mentioned height nd width

    makeGrid(gridHeight, gridWidth);

    //colouring the table datacells from the selected colour
    var grid = document.getElementById("pixelCanvas");
    grid.addEventListener('click', function(event){
        var color = document.getElementById("colorPicker").value;
		//find the tag TD using nodeName and set colour to it.
        if(event.target.nodeName == 'TD'){
            event.target.style.backgroundColor = color;
        }


    });

});


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    
    // Your code goes here!

    //console.log("height" +height);
    //console.log("width" +width);

    let grid = document.getElementById("pixelCanvas");   // getting grid from html
    var rowcount = grid.rows.length;
    for(var i=0; i < rowcount; i++){
        //remove any old grid table rows by checking rowcount.
        grid.deleteRow(0);
     }
    
    for(var i=0; i < height; i++){
        
        //adding rows first in grid
        grid.insertAdjacentHTML('afterbegin', '<tr id = "gridrow"></tr>');
        //get the row into a variable with id
        var gridrow = document.getElementById("gridrow");
        for(var j=0; j < width; j++){
            gridrow.insertAdjacentHTML('afterbegin', '<td></td>');   //adding table datacell in the selected row.
        }
    }



}
