var db = require("./../models");

module.exports = function(app) {
	app.get("/admin", function(req, res) {
		db.Plants.findAll({

		}).then(function(plants) {
			res.render("admin", plants);
		});
	});
};