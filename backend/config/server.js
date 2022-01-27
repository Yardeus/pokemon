module.exports = ({ env }) => ({
  host: env('HOST', '89.108.77.109'),
  port: env.int('PORT', 1337),
});
