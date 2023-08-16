export interface sbutilityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
