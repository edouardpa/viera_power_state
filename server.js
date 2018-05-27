const http = require('http');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

var tvOn = false;

setInterval(getFunc, 1000);

function getFunc() {
        http.get('http://192.168.1.25:55000/dmr/ddd.xml', (resp) => {
          let data = '';

          // A chunk of data has been recieved.
          resp.on('data', (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
                     //console.log("'"+data+"'");
            if(data.indexOf("<?xml version=\"1.0\"?>") > -1 && tvOn == false){
                tvOn = true;
                console.log("TV turned on");
            }
            else if (data.indexOf("<?xml version=\"1.0\"?>") == -1 && tvOn == t$
                tvOn = false;
                console.log("TV off");
            }
            //TODO si ça commence en XML ça veux dire que la télé est allumé
//Si vide TV éteinte
          });
        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
}
