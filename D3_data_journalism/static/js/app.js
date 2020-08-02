// bring in the data
data = d3.csv("static/data/data.csv").then(function(data){
    console.log(data[0]);
})