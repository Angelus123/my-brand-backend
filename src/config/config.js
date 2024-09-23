import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DEV_DATABASE_URL,
    dialect: 'mysql',
    port: process.env.PORT,
    sendgridAPIKey: process.env.SENGRID_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
    hashPassNum:process.env.HASH_PASSWORD_SALT
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_DATABASE_URL,
    dialect: 'mysql',
    port: process.env.PORT,
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.PROD_DATABASE_URL,
    dialect: 'mysql',
    port: process.env.PORT,
   
  }
};
