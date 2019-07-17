const aMap: { [key: number]: string } = {};
aMap[1] = 'foo';
aMap['a'] = 'foo'; // No Error!
// aMap[1] = 1; // Error!

const otherMap: { [key: string]: number } = {};
otherMap['foo'] = 1;
otherMap[1] = 2; // No Error!
// otherMap['bar'] = 'foo'; // Error!

const mixedMap: {
  id: number;
  [key: string]: number;
} = {
  id: 1
};

mixedMap['foo'] = 1;
mixedMap[1] = 2; // No Error!
// mixedMap['bar'] = 'foo'; // Error!
