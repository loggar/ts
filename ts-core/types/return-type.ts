/**
 * Original TypeScript's ReturnType
 * type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 */
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;

type TypeFromInfer = MyReturnType<() => number>; // number
type TypeFromFallback = MyReturnType<string>; // any
