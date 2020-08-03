// bring in the data
data = d3.csv("static/data/data.csv").then(function(data){
states = data.map(function(d) { 
    return d.state
})
console.log(states)
})

//var newarray=dataArray.forEach(element => console.log(element.x));