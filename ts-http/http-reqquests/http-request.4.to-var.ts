import { RequestOptions, request } from 'http';

function performRequest(options: RequestOptions) {
  return new Promise((resolve, reject) => {
    request(options, function(response) {
      const { statusCode } = response;
      if (statusCode && statusCode >= 300) {
        reject(new Error(response.statusMessage));
      }
      const chunks: any[] = [];
      response.on('data', chunk => {
        chunks.push(chunk);
      });
      response.on('end', () => {
        const result = Buffer.concat(chunks).toString();
        resolve(JSON.parse(result));
      });
    }).end();
  });
}

performRequest({
  host: 'your.ex.com',
  path: '/todos1',
  method: 'GET'
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
