var restify = require('restify');
var products = [
	{id : 1, name : "pen", 	  cost : 10, isDiscontinued : false},
	{id : 2, name : "pencil", cost : 20, isDiscontinued : false},
	{id : 3, name : "marker", cost : 30, isDiscontinued : false},
	{id : 4, name : "Rubber", cost : 50, isDiscontinued : true}
];

function getAllProducts(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.send(products);
	return next();
}

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.bodyParser());

server.get('/products', getAllProducts);
//server.head('/hello/:name', respond);
server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});

