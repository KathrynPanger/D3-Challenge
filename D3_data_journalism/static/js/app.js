//create an svg box
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", 400)
  .attr("width", 600);
  var chartGroup = svg.append("g")


// bring in the data and store to arrays
alldata = d3.csv("static/data/data.csv").then(function(data){
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

//draw a circle and append it to the chartGroup

chartGroup.data(alldata)
    .enter()
    .append("circle")
    .attr("r", 50)
    .attr("cx", (d => d.income))
    .attr("cy", (d => d.obesity))
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");
});




//var newarray=dataArray.forEach(element => console.log(element.x));