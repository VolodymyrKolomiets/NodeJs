const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`This is a debug message`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`El número es par`);
logger.warn(`This is a warning`);
logger.error(`El número no es par`);

exports.esPar = (n) => {
    if (n % 2 ==0) {
          logger.info(`El número es par`)
    } else {
         logger.error(`El número no es par`);
    }
}