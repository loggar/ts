const aObject: Object = { id: 1, name: 'foo' };
// const bObject: { id: number } = { id: 1, name: "foo" }; // !Error Type '{id: number; name: string;}' is not assignable to type '{id: number;}'.

const cObject: { id: number; name: string } = { id: 1, name: 'foo' };
// const dObject : {id: number, name: string, points: number} = {id: 1, name: 'foo'} // Error!

const dRefinedObject: { id: number; name: string; points?: number } = {
  id: 1,
  name: 'foo'
};

type E = { id: number; name: string; points?: number };
const eObject: E = { id: 1, name: 'foo' };

const fObject = {
  id: 1
};

// fObject.name = 'foo'; // Error! Property 'name' does not exist on type {id: number;}.
