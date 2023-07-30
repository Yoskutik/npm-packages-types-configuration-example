import { valueTypedInFinalProduct, valueTypedByFlag, mapTypedWithFallback } from '@yoskutik/example-package1';
import { expectType } from 'ts-expect';

declare module '@yoskutik/example-package1' {
  interface TypesConfiguration {
    valueTypedInFinalProduct: number;
    useNumber: true;
    mapTypedWithFallback: {
      key1: 1,
      key2: 2,
    };
  }
}

describe('Types tests for basic usage with type patching', () => {
  it('valueTypedInFinalProduct', () => {
    // The type is set to `number` in our patch
    // I also used `| undefined` declaration, because by default I export this const as undefined.
    //  But you free to cut off that part.
    expectType<number | undefined>(valueTypedByFlag);
  });

  it('valueTypedByFlag', () => {
    // useNumber is set to `true`, which is why the type is `number`.
    // I also used `| undefined` declaration, because by default I export this const as undefined.
    //  But you free to cut off that part.
    expectType<number | undefined>(valueTypedByFlag);
  });

  it('mapTypedWithFallback', () => {
    // We can use keys `key1` and `key2`.
    expectType<1>(mapTypedWithFallback.key1);
    expectType<2>(mapTypedWithFallback.key2);

    // Also, the values of the map are strictly typed, which leads the code
    //  below to throw an error
    // @ts-expect-error
    expectType<2>(mapTypedWithFallback.key1);
    // @ts-expect-error
    expectType<string>(mapTypedWithFallback.key2);

    // key3 is not defined, which is why the line below is expected to throw an error
    // @ts-expect-error
    expectType<any>(mapTypedWithFallback.key3);
  });
});