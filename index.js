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