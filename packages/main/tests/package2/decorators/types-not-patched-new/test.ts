import { numberPropertyDecorator, stringPropertyDecorator } from '@yoskutik/example-package2';

it('Types tests for for decorators. Final project uses modern decorators. Without type patching', () => {
  // We didn't set `experimentalDecorators` to `true` neither in tsconfig nor in our types patch.
  //  Which is why TypeScript applies new types for the decorators, and our NPM package export
  //  decorators with the new types.
  class Class {
    // There's no error here
    @numberPropertyDecorator
    numberProperty1: number = 1;

    // There's an exception here, since new decorators are capable of understanding property's type
    // @ts-expect-error
    @stringPropertyDecorator
    numberProperty2: number = 1;

    // There's an exception here, since new decorators are capable of understanding property's type
    // @ts-expect-error
    @numberPropertyDecorator
    stringProperty1: string = '';

    // There's no error here
    @stringPropertyDecorator
    stringProperty2: string = '';
  }
});