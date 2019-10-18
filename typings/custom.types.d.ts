declare function define<T>(id: string, depends: string[], callback: Function): T;
declare function define<T>(depends: string[], callback: Function): T;
declare function define(obj: Object): void;
// @ts-ignore
declare function require(config: object, dependencies: string[], callback?: Function): void;
