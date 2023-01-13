const chalk = require('chalk');

module.exports = {
    name: "err",
     execute(err) {
        console.log(chalk.green(`ann error occured to connect ${err}`));


    }
}