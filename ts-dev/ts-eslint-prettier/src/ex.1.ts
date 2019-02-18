function taggedObject<T, U extends string>(obj: T, tag: U) {
    return { ...obj, tag }; // T & { tag: U }
}

let x = taggedObject({ x: 10, y: 20 }, 'point'); // { x: number, y: number } & { tag: "point" }

function foo1<T>(t: T, obj1: { a: string }, obj2: { b: string }) {
    return { ...obj1, x: 1, ...t, ...obj2, y: 2 }; // { a: string, x: number } & T & { b: string, y: number }
}

function spread<T, U>(t: T, u: U) {
    return { ...t, ...u }; // T & U
}

declare let x1: { a: string; b: number };
declare let y: { b: string; c: boolean };

let s1 = { ...x1, ...y }; // { a: string, b: string, c: boolean }
let s2 = spread(x1, y); // { a: string, b: number } & { b: string, c: boolean }
let b1 = s1.b; // string
let b2 = s2.b; // number & string
