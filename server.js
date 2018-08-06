var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api_admin_routes")(app);
require("./routes/api_home_page_routes")(app);

var routes = require("./controllers/.js");

app.use("/", routes);


db.sequelize.sync({ force: true }).then(function () {
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT);
	});
});
