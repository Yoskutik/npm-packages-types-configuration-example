import { TypesConfiguration } from './TypesConfiguration';

type TDecorator<Value> = TypesConfiguration extends { experimentalDecorators: true }
  ? PropertyDecorator
  : <This>(_: unknown, context: ClassFieldDecoratorContext<This, Value>) => void;

export const numberPropertyDecorator: TDecorator<number> = (arg1, arg2) => {
  if ((typeof arg2 === 'string' || typeof arg2 === 'symbol') && !arg1) {
    console.log('numberPropertyDecorator is used as Stage-3 ES classes decorator')
  } else {
    console.log('numberPropertyDecorator is used as legacy "experimental" decorator')
  }
};

export const stringPropertyDecorator: TDecorator<string> = (arg1, arg2) => {
  if ((typeof arg2 === 'string' || typeof arg2 === 'symbol') && !arg1) {
    console.log('stringPropertyDecorator is used as Stage-3 ES classes decorator')
  } else {
    console.log('stringPropertyDecorator is used as legacy "experimental" decorator')
  }
};
