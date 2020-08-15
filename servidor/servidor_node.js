require('http')
	.createServer((req, res) => {
		res.end('ls -al');
	})
	.listen(3000, () => {
		console.log('server running...');
	});
