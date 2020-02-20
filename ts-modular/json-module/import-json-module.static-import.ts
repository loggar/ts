// We no longer need the "use strict" directive since
// all ECMAScript modules implicitly use strict mode.

import * as config from "./config.json";

console.log(`${config.server.nodePort}`);
