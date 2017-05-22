export enum FooEnum {
    EnumValue = 1
}

export interface IFooService {
    doFoo(foo: FooEnum):void;
}