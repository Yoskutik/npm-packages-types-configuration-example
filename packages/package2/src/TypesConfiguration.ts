export interface TypesConfiguration {
  // registry: Record<string, unknown> - the key to instance map type. If not set,
  //  less strict type will be used. Must be in shape of Record<string, unknown>

  // experimentalDecorators: boolean - the flag which affects the type of expoted
  //  decorators. This flag must be synchronized with the value of `experimentalDecorators`
  //  option from tsconfig.json. Must be in shape of boolean
}