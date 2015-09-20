var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.send({
		response: { message: 'REST API v1' }
	});
});

router.post('/', function(req, res) {
	res.status(201).send({
		response: { message: 'POST Received' }
	});
});

router.put('/', function(req, res) {
	res.status(204).send();
});


module.exports = router;