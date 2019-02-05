"use strict";
var n = 1;
var s = "str";
var Ns;
(function (Ns) {
    Ns.x = 'x in Ns';
})(Ns || (Ns = {}));
console.log('Ns=' + JSON.stringify(Ns));
var Cl = /** @class */ (function () {
    function Cl() {
        this.x = "str"; // instance member
    }
    Cl.x = 1; // static menber
    return Cl;
}());
console.log('Cl.x=' + Cl.x);
var cl1 = new Cl();
console.log('cl1.x=' + cl1.x);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Parser = /** @class */ (function () {
    function Parser(c, fields) {
        this.targetClass = c;
        this.fields = fields;
    }
    Parser.prototype.parse = function (data) {
        var _this = this;
        var result = [];
        var lines = data.split("\n");
        return lines.map(function (line) {
            var object = new _this.targetClass();
            var values = line.split(",");
            _this.fields.forEach(function (field, i) {
                object[field] = values[i];
            });
            return object;
        });
        return result;
    };
    return Parser;
}());
var personData = "John,36\nAaron,30\nPeter,20";
var personParser = new Parser(Person, ['name', 'age']);
var people = personParser.parse(personData);
console.log("*** People list:");
people.forEach(function (p) { return console.log(p); });
var vehicleData = "Toyota,Camry,2010,Blue,James Owen\nHonda,Civic,2001,Black,Adrian Snipes\nHonda,Accord,2014,White,Brian Adams\nVolkswagen,New Beatle,2007,Yellow,Alicia Keys\nMitsubishi,Eclipse,1998,Red,Joss Stone";
var vehicleParser = new Parser(Vehicle, ['brand', 'model', 'year', 'color', 'owner']);
var vehicles = vehicleParser.parse(vehicleData);
console.log("*** Vehicle list:");
vehicles.forEach(function (v) { return console.log(v); });
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        console.log('And watch test');
        return 0;
    };
    return Startup;
}());
console.log("abc");
Startup.main();
