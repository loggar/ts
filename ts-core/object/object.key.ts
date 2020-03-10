const gObject: { [key: string]: string } = {};
gObject.name = 'foo';

type F = { id: number; name: string };
// const f1Object: F = { id: 1, name: 'foo', points: 100 }; // Error!

type G = { id: number; name: string; [key: string]: string | number };
const g2Object: G = { id: 1, name: 'foo', points: 100 }; // No Error!
