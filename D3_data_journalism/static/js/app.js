// bring in the data and store to arrays
data = d3.csv("static/data/data.csv").then(function(data){
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
// create a trace for the initial scatterplot


console.log(smokesLow)
});

//var newarray=dataArray.forEach(element => console.log(element.x));