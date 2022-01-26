module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd839198b5603fcdaf663eaa344643260'),
  },
});
