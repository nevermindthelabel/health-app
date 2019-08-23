const db = require("../models");

module.exports = {
	create: function (req, res) {
		var newUser = req.body;
		db.User
			.create(newUser)
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.User
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	}
}