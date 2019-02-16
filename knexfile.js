// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/ROLL_TIDE_DATABASE'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
