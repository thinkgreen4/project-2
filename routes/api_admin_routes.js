var db = require("../models");

module.exports = function(app) {
	app.get("/admin", function(req, res) {
		console.log(db.Plant);
		db.Plant.findAll({}).then(function(plant) {
			res.render("admin", {plant: plant});
		});
	});

	app.get("/admin/api/:id", function(req, res) {
		console.log(req.params.id);
		db.Plant.findAll({
			where: {
				id: parseInt(req.params.id)
			}
		}).then(function(data) {
			res.send(data[0]);
		});
	});

	app.post("/admin/plant/create", function(req, res) {
		console.log(req.body);

		db.Plant.create(req.body).then(function(data){
			res.json(data);
		});
	});
};