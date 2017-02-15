/**
 * TeknikkController
 *
 * @description :: Server-side logic for managing teknikks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pensum: function(req,res) {

		var sql = 'SELECT * FROM Teknikk';
		    sql +=' WHERE stilart='+req.query.stilart;
		    sql +=' AND grad <='+req.query.grad;


		Teknikk.query(sql, function(err, results){
			res.send(results);
		});

	},
	update: function(req, res){
		var sql = 'UPDATE Teknikk';
			sql +=' SET navn="'+req.query.navn+'"';
			sql +=', beskrivelse="'+req.query.beskrivelse+'"';
			sql +=', updatedAt=NOW()';
		    sql +=' WHERE id='+req.query.id;


		Teknikk.query(sql, function(err, results){
			res.send(results);
		});
	}
};

