module.exports = function (sequelize, DataTypes) {
	var Plant = sequelize.define("Author", {

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
		instruction: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: [1]
		}
	});
	return Plant;
};