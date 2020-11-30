// D3 Animated Scatter Plot


//Section 1: Visualization Space Setup
//=====================================

//Get the width of container
var width= parseInt(d3.select("#scatter").style ("width"))
console.log(width);

//Define height of container
var height= width * (2/3);
console.log(height)

//Define margins for container
var margins = 20

//Allocate text space
var labelspace=110

//Allocate text padding
var Lpadding = 40
var Bpadding = 40

//Generate Canvas
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height) 
    .attr("class", "chart")

//Set circle radius to be 1% of total viz area
var cradius = Math.sqrt(height*width) / 314.159;
console.log(cradius)

//Create a boarder
svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", height)
    .attr("width", width)
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 1);


//Section 2: Axis labels
//========================
// ---> Pt 1, DVs

//Create bottom text group to hold DV labels
svg.append("g").attr("class","btext"); //create group for bottom labels, assign class

//Give class the ability to locate itself on the axis and resize

var btextx=(width-labelspace)/2 +labelspace;
var btexty= height -margins -Bpadding

var btext = d3.select(".btext")
function btextresize() {
    btext.attr(
        "transform",
        "translate(" + 
        btextx
        + ", " + 
        btexty 
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

//DV3: Income 
btext
    .append("text")
    .attr("y", 30) // y values to space text out
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class", "aText inactive x") // not initially active
    .text("Household Income (Median)");


//Section 2: Axis labels
//========================
// ---> Pt 2, IVs

//Create group to hold IV labels
svg.append("g").attr("class","ltext"); //create group for y axis labels, assign class

//Give class the ability to locate itself on the axis and resize

ltextx= margins + Lpadding
ltexty = ((height - labelspace)/2) + labelspace
var ltext = d3.select(".ltext")
function ltextresize() {
    ltext.attr(
        "transform",
        "translate(" + ltextx + ", " + ltexty + ")"
        
    

    );
}
ltextresize();

//Append IV Labels on Y Axis
//IV1: Obesity

ltext
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -30)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Obese (%)")
    
ltext
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("data-name", "smokes")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Smokes (%)")
    
ltext
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("data-name", "nohealthcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("No Healthcare (%)")



//Section 3: Import Data
//=======================
// State-level data from Behavioral Risk Factor Surveillance System

d3.csv("static/data/data.csv").then(function(data){
    viz(data)});


    function viz(data) {
        states = data.map(function(d) { 
            return d.state
        
        })
        id = data.map(function(d) { 
            return d.id
        
        })
        abbr = data.map(function(d) { 
            return d.abbr
        
        })
        poverty = data.map(function(d) { 
            return d.poverty
        
        })
        povertyMoe = data.map(function(d) { 
            return d.povertyMoe
        
        })
        age= data.map(function(d) { 
            return d.age
        
        })
        ageMoe = data.map(function(d) { 
            return d.ageMoe
        
        })
        income = data.map(function(d) { 
            return d.income
        
        })
        incomeMoe = data.map(function(d) { 
            return d.idcomeMoe
        
        })
        healthcare = data.map(function(d) { 
            return d.healthcare
        
        })
        healthcareLow = data.map(function(d) { 
            return d.healthcareLow
        
        })
        healthcareHigh = data.map(function(d) { 
            return d.healthcareHigh
        
        })
        obesity = data.map(function(d) { 
            return d.obesity
        
        })
        obesityLow = data.map(function(d) { 
            return d.obesityLow
        
        })
        obesityHigh = data.map(function(d) { 
            return d.obesityHigh
        
        })
        smokes = data.map(function(d) { 
            return d.smokes
        
        })
        smokesLow = data.map(function(d) { 
            return d.smokesLow
        
        })
        smokesHigh = data.map(function(d) { 
            return d.smokesHigh
        
        });

            var workingx=poverty
            var workingy=healthcare

            //Section 4: Scale Data
            //=======================

            //scale the data in preparation for circle-i-fication
            function scale(varx,vary){

            var xScale = d3.scaleLinear()
            .domain(d3.extent(varx))
            .range([0, width]);

            var yScale = d3.scaleLinear()
            .domain(d3.extent(vary))
            .range([0, height]);

            //create variables to be axes in preparation for chart-i-fication
            var bottomAxis = d3.axisBottom(xScale);
            var leftAxis = d3.axisLeft(yScale);

            // Add bottomAxis
            svg.append("g").attr("transform", `translate(0, ${height-margins-labelspace})`).call(bottomAxis);

            // Add leftAxis to the left side of the display
            svg.append("g").attr("transform", `translate(${margins + labelspace}, 0)`).call(leftAxis);
            }

            scale(workingx, workingy);

            var circlesGroup= svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("r", 6)
            .attr("cx", (d => xScale(d.income)))
            .attr("cy", (d => yScale(d.obesity)))
            .attr("stroke", "black")
            .attr("stroke-width", "1")
            .attr("fill", "blue");

        

        };
            //refresh page on browser resize
            $(window).bind('resize', function(e)
            {
            console.log('window resized..');
            this.location.reload(false); /* false to get page from cache */
            /* true to fetch page from server */
            });



