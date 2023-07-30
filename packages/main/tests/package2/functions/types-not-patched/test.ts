import { register, resolve } from '@yoskutik/example-package2';
import { expectType } from 'ts-expect';

it('Types tests for register/resolve approach', () => {
  class A { prop1: number = 1 }
  class B { prop2: string = '' }

  // We can register any instance by any key
  register('ClassA', A);
  register('ClassB', B);

  // We can resolve the instance and set type to `A`
  expectType<A>(resolve('ClassA'));
  // But we can also resolve to type `B`
  expectType<B>(resolve('ClassA'));
  // And also we can try to resolve non-existing key
  expectType(resolve('non-existing key'));
});