
Express = require("express");
path = require("path");

const PORT = 3000

const app = Express()
app.use(Express.static(path.resolve('../static')));


app.get("/", (req, res) => {
  res.sendFile("index.html");
})

app.get("/trafficdata", (req, res) => {

  fetch("https://www.511virginia.org/data/geojson/icons.high_impact_incident.geojson")
    .then((data) => data.json())
    .then((jsonData) => {
      console.log(jsonData);
      res.json(jsonData);
    });

})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));