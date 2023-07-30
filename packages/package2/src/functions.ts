import { TypesConfiguration } from './TypesConfiguration';

type KeyToClassMap = TypesConfiguration extends { registry: unknown }
  ? TypesConfiguration['registry']
  : Record<string, any>;

type Constructable<T> = { new (...args: unknown[]): T };

const map: KeyToClassMap = {}

export type TRegister = TypesConfiguration extends { registry: unknown }
  // @ts-ignore
  ? <Key extends keyof TypesConfiguration['registry']>(key: Key, Class: Constructable<TypesConfiguration['registry'][Key]>) => void
  : (key: string, Class: Constructable<any>) => void;

export const register: TRegister = (key, Class) => {
  map[key] = new Class();
};

export type TResolve = TypesConfiguration extends { registry: unknown }
  // @ts-ignore
  ? <T extends keyof TypesConfiguration['registry']>(key: T) => TypesConfiguration['registry'][T]
  : <T>(key: string) => T;

export const resolve: TResolve = (key) => map[key];
