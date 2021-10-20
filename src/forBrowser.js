const inquirer = require('inquirer');
module.exports = async function forBrowser() {
  const anwser = await inquirer.prompt([
    {
      type: 'list',
      name: 'value',
      message: 'Select environment:',
      choices: ['Browser & NodeJS', 'NodeJS'],
    },
  ]);
  return anwser.value === 'Browser & NodeJS';
};
