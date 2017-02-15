/**
 * GraderController
 *
 * @description :: Server-side logic for managing graders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	update: function(req, res){
		var sql = 'UPDATE Grader';
			sql +=' SET navn="'+req.query.navn+'"';
			sql +=', updatedAt=NOW()';
		    sql +=' WHERE id='+req.query.id;


		Grader.query(sql, function(err, results){
			res.send(results);
		});
	},
	delete: function(req, res){
		var sql = 'DELETE FROM Teknikk';
			sql +=' WHERE stilart='+req.query.stilart;
			sql +=' AND grad='+req.query.grad+'';


		Grader.query(sql, function(err, results){
			sql =' DELETE FROM Grader';
			sql +=' WHERE id='+req.query.id;

			Grader.query(sql, function(err, results){
				res.send(results);
			});			
		});
	},
	make: function(req, res){
		var sql = 'SELECT MAX(grad) AS Max FROM Grader';
			sql +=' WHERE stilart='+req.query.stilart;

		Grader.query(sql, function(err, results){
			var grad = results[0].Max+1;
			
				sql = 'INSERT INTO Grader';
				sql +=' (navn,stilart,grad,createdAt,updatedAt)';
				sql +='VALUES("'+req.query.navn+'",';
				sql +=req.query.stilart+','+grad+',';
				sql +='NOW(),NOW())';

			Grader.query(sql, function(err, results){
				if(err != null){
					console.log(err)
				}
				res.send(results);
			});	
		});	
	}
};

