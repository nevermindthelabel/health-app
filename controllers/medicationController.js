const db = require("../models");

module.exports = {
	create: function(req, res) {
		let newMed = {
			name: req.body.medication,
			dosage: req.body.dosage,
			perDay: req.body.perDay,
			UserId: req.body.UserId
		};
		db.Medication.create(newMed)
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	}
}