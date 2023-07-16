const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  database_url: process.env.DATABASE_URL,
}