import * as http2 from "http2";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([readFile("key.pem"), readFile("certificate.pem")]);

  const server = http2.createSecureServer({ key, cert }).listen(8080, () => {
    console.log("Server started");
  });

  server.on("error", err => console.error(err));

  server.on("stream", (stream, headers) => {
    const path = headers[":path"];
    switch (path) {
      case "/": {
        stream.respond({
          "content-type": "text/html",
          ":status": 200
        });
        stream.end(` 
          <head>
            <link rel="stylesheet" type="text/css" href="style.css">
          </head>
          <body>
            <h1>Hello World</h1>
          </body>
        `);
        break;
      }
      case "/style.css": {
        stream.respond({
          "content-type": "text/css",
          ":status": 200
        });
        stream.end(`
          body {
            color: red;
          }
        `);
        break;
      }
      default: {
        stream.respond({
          ":status": 404
        });
        stream.end();
      }
    }
  });
}

startServer();

// In the above example, when the user visits the main page, he requests the index.html file.
// When he is given one, he then notices that he also needs the style.css file.
// There is some delay between requesting index.html and style.css and using Server Push we can deal with it.
// Since we know that the user is going to need the style.css file we can send it along with index.html.
