import app from './app.js';
import config from './config/config.js';

const currentConfig = config[process.env.NODE_ENV];
const {port} = currentConfig;

const server = app.listen(port||process.env.PORT, () =>
  console.log(`App listening on  ${port}! - ${process.env.HOST}${port}`)
);
export default server