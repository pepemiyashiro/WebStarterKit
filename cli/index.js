const path = require('path');
const fs = require('fs');
const figlet = require('figlet');

const inquirer  = require('./options');

const basePath = console.log( path.basename(path.dirname(fs.realpathSync(__filename))) );

figlet('WebStarterKit CLI', function(err, data) {
    try {
        console.log(data);
        initializeCli();
    } catch(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

});


const initializeCli = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
}


