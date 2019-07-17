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
        stream.pushStream({ ":path": "/style.css" }, (err, pushStream) => {
          if (err) throw err;
          pushStream.respond({
            "content-type": "text/css",
            ":status": 200
          });
          pushStream.end(`
            body {
              color: red;
            }
          `);
        });
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

// Now, using the  stream.pushStream function we send the style.css file as soon as someone requests the index.html.
// When the browser handles it, it sees the  <link> tag and notices that it also needs the style.css file.
// Thanks to the Server Push, it is already cached in the browser so it does not need to send another request.
