import * as CBOR from "../cbor.js";

var initial = { Hello: "World" };
console.log(JSON.stringify(initial));

var encoded = CBOR.encode(initial);
console.log(encoded);

var decoded = CBOR.decode(encoded);
console.log(JSON.stringify(decoded));
