/**
 * StilaterController
 *
 * @description :: Server-side logic for managing stilaters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	update: function(req, res){

		var sql = 'UPDATE Stilarter';
			sql +=' SET navn="'+req.query.navn+'"';	
			sql +=', updatedAt=NOW()';		
		    sql +=' WHERE id='+req.query.id;

		Teknikk.query(sql, function(err, results){
			res.send(results);
		});
	},
	delete: function(req, res){
		var sql = 'DELETE FROM Teknikk';
			sql +=' WHERE stilart='+req.query.id;


		Stilarter.query(sql, function(err, results){
			sql = 'DELETE FROM Grader';
			sql +=' WHERE stilart='+req.query.id;

			Stilarter.query(sql, function(err, results){
				sql = 'DELETE FROM Stilarter';
				sql +=' WHERE id='+req.query.id;

				Stilarter.query(sql, function(err, results){
					res.send(results);
				});
			});
		});

		
	}
};

