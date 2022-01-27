module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '89.108.77.109'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'pokemon'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'root'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
