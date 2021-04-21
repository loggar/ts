// throws an exception
function error(message: string): never {
  throw new Error(message);
}

// unreachable end point
function continuousProcess(): never {
  while (true) {
    // ...
  }
}
