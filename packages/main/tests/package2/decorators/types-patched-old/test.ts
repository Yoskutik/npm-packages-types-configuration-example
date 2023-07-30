import { numberPropertyDecorator, stringPropertyDecorator } from '@yoskutik/example-package2';

declare module '@yoskutik/example-package2' {
  interface TypesConfiguration {
    experimentalDecorators: true;
  }
}

it('Types tests for for decorators. Final project uses modern decorators. Without type patching', () => {
  // We set `experimentalDecorators` to `true` in both tsconfig.json and our patch.
  //  Which is why TypeScript applies old types for the decorators, and our NPM package export
  //  decorators with the old types.
  class Class {
    // No exception here
    @numberPropertyDecorator
    numberProperty1: number = 1;

    // No exception here. And there's no error even because of the type incapability,
    //  since old decorators cannot understand such incapability
    @stringPropertyDecorator
    numberProperty2: number = 1;

    // No exception here. And there's no error even because of the type incapability,
    //  since old decorators cannot understand such incapability
    @numberPropertyDecorator
    stringProperty1: string = '';

    // No exception here
    @stringPropertyDecorator
    stringProperty2: string = '';
  }
});