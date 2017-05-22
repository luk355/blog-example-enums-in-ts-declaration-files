import { IFooService, FooEnum } from './foo.service.d';

export class FooService implements IFooService {
    doFoo(foo: FooEnum): void {
    }
}