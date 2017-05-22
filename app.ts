// file: app.ts

import {FooEnum} from './foo.service.d';
import {FooService} from './foo.service';

let service = new FooService();
service.doFoo(FooEnum.EnumValue);
console.log('done!');