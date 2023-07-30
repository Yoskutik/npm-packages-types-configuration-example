import { numberPropertyDecorator, stringPropertyDecorator } from '@yoskutik/example-package2';

declare module '@yoskutik/example-package2' {
  interface TypesConfiguration {
    experimentalDecorators: true;
  }
}

it('Types tests for for decorators. Final project uses modern decorators. Without type patching', () => {
  // We set `experimentalDecorators` to `true` in our patch, but didn't do that in the tsconfig.json
  //  Which is why TypeScript applies new types for the decorators, but our NPM package export
  //  decorators with the old types.
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