import { numberPropertyDecorator, stringPropertyDecorator } from '@yoskutik/example-package2';

it('Types tests for for decorators. Final project uses modern decorators. Without type patching', () => {
  // We set `experimentalDecorators` to `true` in tsconfig.json, but didn't do that in our patch.
  //  Which is why TypeScript applies old types for the decorators, but our NPM package export
  //  decorators with the new types.
  class Class {
    // Exception here. TypeScript expect a decorator of different type
    // @ts-expect-error
    @numberPropertyDecorator
    numberProperty1: number = 1;

    // Exception here. TypeScript expect a decorator of different type
    // @ts-expect-error
    @stringPropertyDecorator
    numberProperty2: number = 1;

    // Exception here. TypeScript expect a decorator of different type
    // @ts-expect-error
    @numberPropertyDecorator
    stringProperty1: string = '';

    // Exception here. TypeScript expect a decorator of different type
    // @ts-expect-error
    @stringPropertyDecorator
    stringProperty2: string = '';
  }
});