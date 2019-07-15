var express = require('express');

var app = express();

app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 
 

res.send("Hello winston module test");



 
});

var port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});
var winston = require('winston');

require('winston-azure-blob-transport');

var logger = new (winston.Logger)({

    transports: [

      new (winston.transports.AzureBlob)({

        account: {

          name: process.env.ACCOUNT_NAME,

          key: process.env.ACCOUNT_KEY

        },

        containerName: process.env.CONTAINER_NAME,

        blobName: 'test.log',

        level: 'info'

      })

    ]

  });

logger.info('Hello!');
console.log("Server running at http://localhost:%d", port);
