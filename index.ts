#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.red("MULTIPLICATION TABLE"));

let ans = await inquirer.prompt([{
    name : "table",
    message : chalk.yellow('Table Of?'),
    list  : 'input'
},

])
function table(number: number, limit: number) {
    console.log(`Table of ${number}`)
    for (let i = 1; i <= limit; i++) {
        console.log(chalk.green(`${number} x ${i} = ${number * i}`));
    }

}
   table (ans.table, 12)
   console.log(chalk.red('THANK YOU!'))