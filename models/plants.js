module.exports = function (sequelize, DataTypes) {
	var Plants = sequelize.define("Plant", {

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: [1]
		},
		instructions: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: [1]
		}
	});
	return Plants;
};