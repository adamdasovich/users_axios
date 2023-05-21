const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/api/users', (req, res) => {
	res.send([{
		id: 1,
		name: 'John',
		age: 30
	}, {
		id: 2,
		name: 'Jane',
		age: 25
	}, {
		id: 3,
		name: 'Bob',
		age: 40
	}]);
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});