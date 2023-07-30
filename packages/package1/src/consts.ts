import { TypesConfiguration } from './TypesConfiguration';

// Type must be set in the final product. `| undefined` is not necessary
export const valueTypedInFinalProduct: (TypesConfiguration extends {
  valueTypedInFinalProduct: unknown
} ? TypesConfiguration['valueTypedInFinalProduct'] : never) | undefined = undefined;

// Typed by flag. If flag is not used, type is string, otherwise - number. `| undefined` is not necessary
export const valueTypedByFlag: (TypesConfiguration extends {
  useNumber: true
} ? number : string) | undefined = undefined;

// Type must be set in the final product. If the type is not set, a fallback non-strict type is used
export const mapTypedWithFallback: TypesConfiguration extends { mapTypedWithFallback: unknown }
  ? TypesConfiguration['mapTypedWithFallback']
  : Record<string, number> = {};