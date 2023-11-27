export interface SchemaData {
  fileName: string;
  schema: string;
  mcid: string;
  createdAt: Date;
}
export interface SchemaRequest extends Omit<SchemaData, 'createdAt'> {}

export interface SchemaResponse extends SchemaData {}
