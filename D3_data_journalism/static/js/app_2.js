// D3 Animated Scatter Plot


//Section 1: Visualization Space Setup
//=====================================

//Get the width of container
var width= parseInt(d3.select("#scatter").style ("width"))
console.log(width);

//Define height of container
var height= width * (3/2);
console.log(height)

//Define margins for container
var margins = 20

//Allocate text space
var labelspace=110

//Allocate text padding
var Lpadding = 40
var Bpadding = 40

// Generate Canvas
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height) 
    .attr("class", "chart")

//Set circle radius to be 1% of total viz area
var cradius = Math.sqrt(height*width) / 314.159;
console.log(cradius)

//Section 2: Axis labels
//========================

//Create bottom text group to hold all labels
svg.append("g").attr("class","btext"); //create group for bottom labels, assign class

//Give class the ability to locate itself on the axis and resize
var btext = d3.select(".btext")
function btextresize() {
    btext.attr(
        "transform",
        "translate(" + 
        ((width-labelspace)/2 +labelspace) //centers the text
        + ", " + (height -margins -Bpadding) //places it on the bottom
        + ")"
    

    );
}
btextresize();

//Append DV Labels on X Axis
//DV1: Poverty
btext
    .append("text")
    .attr("y", -30) // y values to space text out
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x") //initially active
    .text("Poverty (%)");

//DV2: Age 
btext
    .append("text")
    .attr("y", 0) // y values to space text out
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class", "aText inactive x") // not initially active
    .text("Age (Median)");
