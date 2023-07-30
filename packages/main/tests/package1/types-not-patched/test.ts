import { valueTypedInFinalProduct, valueTypedByFlag, mapTypedWithFallback } from '@yoskutik/example-package1';
import { expectType } from 'ts-expect';

describe('Types tests for basic usage without type patching', () => {
  it('valueTypedInFinalProduct', () => {
    // Without patching types, valueTypedInFinalProduct has `undefined` type,
    //  which leads the code below to throw an error.
    // @ts-expect-error
    console.log(valueTypedInFinalProduct + 2);
  });

  it('valueTypedByFlag', () => {
    // useNumber is not set to `true`, which is why the type is string
    // @ts-expect-error
    expectType<number>(valueTypedByFlag);
  });

  it('mapTypedWithFallback', () => {
    // Without types patching we can use any keys without causing any error
    expectType<any>(mapTypedWithFallback.key1);
    expectType<any>(mapTypedWithFallback.key2);
    expectType<any>(mapTypedWithFallback.key3);

    // But those values won't be strictly typed.
    // @ts-expect-error
    expectType<1>(mapTypedWithFallback.key1);
    // @ts-expect-error
    expectType<2>(mapTypedWithFallback.key2);

    // All the values has just `number` type
    expectType<number>(mapTypedWithFallback.key1);
    expectType<number>(mapTypedWithFallback.key2);
  });
});