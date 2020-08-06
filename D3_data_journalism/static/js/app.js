
//define the width and hight of svgbox
svgHeight=400
svgWidth=600

//set some margins
var margin = {
    top: 60,
    right: 120,
    bottom: 60,
    left: 60
  };
  
  
 // Define chart area
  var chartWidth = svgWidth - margin.left - margin.right;
  var chartHeight = svgHeight - margin.top - margin.bottom;

  //create wrapper
  //create an svg box
var svg = d3.select("#scatter")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth);

var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`); 

// bring in the data and store to arrays
d3.csv("static/data/data.csv").then(function(data){
    console.log(data)

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

})
//scale the data in preparation for circle-i-fication
var xScale = d3.scaleLinear()
  .domain(d3.extent(income))
  .range([0, chartWidth]);

  var yScale = d3.scaleLinear()
  .domain(d3.extent(obesity))
  .range([0, chartHeight]);

 //create variables to be axis in preparation for chart-i-fication
  var bottomAxis = d3.axisBottom(xScale);
  var leftAxis = d3.axisLeft(yScale);


  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${chartHeight})`).call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup.append("g").call(leftAxis);


//draw a circle and append it to the chartGroup


var circlesGroup= chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 6)
    .attr("cx", (d => xScale(d.income)))
    .attr("cy", (d => yScale(d.obesity)))
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("fill", "blue");

    d3.selection.prototype.moveToFront = function() {
        return this.each(function(){
          this.parentNode.appendChild(this);
        });
      };


//make tooltip
var toolTip = d3.select("body").append("div")
.attr("class", "tooltip")
.style('opacity', 0.7);

//make it do mouseover display
varx= "Obese (%)"
vary = "Income ($/yr)"

circlesGroup.on("mouseover", function (d, i){
    toolTip.style("display", "block")
    .html(`<strong>${varx}</strong>: ${data[i].obesity}<br> <strong>${vary}</strong>: ${data[i].income}`)
    .style("left", d3.event.pageX + "px")
    .style("top", d3.event.pageY + "px")
    .moveToFront();
    d3.select(this)
    .transition()
    .duration(200)
    .attr("fill", "red");

})
// on mouseout
.on("mouseout", function(){
    toolTip.style("display", "none");
    d3.select(this)
    .transition()
    .duration(200)
    .attr("fill", "blue");
})

//create axis text
chartGroup.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - margin.left)
.attr("x", 0 - (chartHeight / 2))
.attr("dy", "1em")
.attr("class", "axisText")
.text(vary);


chartGroup.append("text")
.attr("transform", `translate(${chartWidth / 2}, ${chartHeight + margin.top - 10})`)
.attr("class", "axisText")
.text(varx);


var xmenu= chartGroup.append("g")

// xmenu.append("text")
// .attr("transform", `translate(${chartWidth+ 20}, 0)`)
// .attr("class", "box")
// .text("Age");

// xmenu.append("text")
// .attr("transform", `translate(${chartWidth+ 20}, 0)`)
// .attr("class", "box")
// .text("Poverty");

// xmenu.append("text")
// .attr("transform", `translate(${chartWidth+ 20}, 0)`)
// .attr("class", "box")
// .text("healthcare");

// xmenu.append("text")
// .attr("transform", `translate(${chartWidth+ 20}, 0)`)
// .attr("class", "box")
// .text("Obesity");
})
;

// make page responsive
makeResponsive();
d3.select(window).on("resize", makeResponsive);
