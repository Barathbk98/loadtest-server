const loadtest = require('loadtest');
const express = require('express')
const port = 5000;
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
	res.send("got");
})

app.post("/test",(req,res)=>{
	const { url,method,rps,concurrency,body,requests,header } = req.body.details;
	console.log(req.body.details)
	const options = {
		url: `${url}`,
		maxRequests: `${requests}`,
		method : `${method}`,
		body : `${body}`,
		concurrency : `${concurrency}`,
		requestsPerSecond : `${rps}`,
		headers : `${header}`
	};
	
	loadtest.loadTest(options, function(error, result)
	{
		if (error)
		{
			return console.error('Got an error: %s', error);
		}
		res.json(result)
		console.log('Tests run successfully',result);
	});
})

app.listen(port,()=>{
	console.log("Listening on PORT=====>",port)
})

