var db = require("../models");

module.exports = function(app) {
	app.get("/admin", function(req, res) {
		db.Plants.findAll({}).then(function(plants) {
			res.render("admin", {plant: plants});
		});
	});

	app.post("/admin", function(req, res) {
		db.Plants.create({
			name: req.body.name,
			description: req.body.description,
			instructions: req.body.instructions
		});
	});
};