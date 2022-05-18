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
            
            function XMLtoJS(filename,cb)
            { 
                var filepath= path.normalize(path.join(__dirname,filename));
                fs.readFile(filepath,'utf8',function(err,xmlStr){
                if (err) throw (err);
                xml2js.parseString(smlStr,{},cb);
            });
        };

        function JStoXML(filename,obj,cd){
            let filepath= path.normalize(path.join(_dirname,filename));
            let builder = new xml2js.Builder();
            let xml = builder.buildObject(obj);
            fs.unlinkSync(filepath);
            fs.writeFile(filepath,xml,cb);
        }

                
            
            router.get('/get/html', function(req, res) {
            
              res.writeHead(200, {'Content-Type' : 'text/html'});
          
              let xml = fs.readFileSync('library.xml', 'uft8'),
                  xsl = fs.readFileSync('library.xsl', 'uft8');

                  console.log(xml)
                  console.log(xsl) //reading the files

                  let doc = xmlParse(xml) //placeholder to read the file 
                      stylesheet = xmlParse(xsl);
                  
                  let result = xsltProcess(doc, stylesheet);
                  console.log(result);

                  res.end(result.toString());

            });

            router.post('post/json',funtion(req,res)
            {


            });
            
            //listing to the income connection
            server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
                const addr = server.address();
                console.log('Server listening at', addr.address + ':' + addr.port)
            });
            