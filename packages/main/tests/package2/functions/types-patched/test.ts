import { register, resolve } from '@yoskutik/example-package2';
import { expectType } from 'ts-expect';

class A { prop1: number = 1 }
class B { prop2: string = '' }

declare module '@yoskutik/example-package2' {
  interface TypesConfiguration {
    registry: {
      ClassA: A,
      ClassB: B,
    };
  }
}

it('Types tests for register/resolve approach', () => {
  // We can register instances only using keys `ClassA` and `ClassB`
  register('ClassA', A);
  register('ClassB', B);

  // We cannot set an instance of incorrect type for a specific key
  // @ts-expect-error
  register('ClassA', B);

  // We can resolve the instance and set type to `A`
  expectType<A>(resolve('ClassA'));
  // And we can't resolve it to type `B`
  // @ts-expect-error
  expectType<B>(resolve('ClassA'));
  // And also we can't try to resolve non-existing key
  // @ts-expect-error
  expectType(resolve('non-existing key'));
});