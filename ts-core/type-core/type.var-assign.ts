/*
const a: string = "foo";
const b = 1;
const c = false;
const d = [1, 2, 3];
const e = ["a", "b", "c"];
const f = { id: 1 };
const g = null;
const h = undefined;
*/

const aTyped: string = 'foo';
const bTyped: number = 1;
const cTyped: boolean = false;

const dTyped1: number[] = [1, 2, 3];
// or
const dTyped2: Array<number> = [1, 2, 3];

const eTyped: Array<string> = ['a', 'b', 'c'];

const fTyped1: Object = { id: 1 };
// or better
const fTyped2: { id: number } = { id: 1 };

const gTyped: null = null;

const hTyped: undefined = undefined;
