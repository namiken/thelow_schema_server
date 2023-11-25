const config = () => {
  return {
    schemaDir: process.env['schema_dir'] ?? 'aaaaaa',
    id: process.env['schema_server_id'],
    pw: process.env['schema_server_pw'],
  };
};

export default config;
