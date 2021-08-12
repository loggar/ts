class MyResponse {
  header = "header example";
  result = "result example";
  // ...
}
class MyError {
  header = "header example";
  message = "message example";
  // ...
}
function example(x: MyResponse | MyError) {
  if (x instanceof MyResponse) {
    console.log(x.message); // Error! Property 'message' does not exist on type 'MyResponse'.
    console.log(x.result); // Okay
  } else {
    // TypeScript knows this must be MyError

    console.log(x.message); // Okay
    console.log(x.result); // Error! Property 'result' does not exist on type 'MyError'.
  }
}
