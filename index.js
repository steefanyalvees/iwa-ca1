const express = require("express"), // listing the modulos to allow the http request//
      fs = require("fs"),
      http = require("http"),
      path = require("path"),
      xml2js = require("xml2js"),
      xmlParse = require("xslt-processor").xmlParse,
      xsltProcess = require("xslt-processor").xsltProcess;

      const router = express(),
            server = http.createServer(router);

            router.use(express.static(path.resolve(__dirname,'views'))); //serving the static content from views folder
            
            
            //listing to the income connection
            server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
                const addr = server.address();
                console.log('Server listening at', addr.address + ':' + addr.port)});
            