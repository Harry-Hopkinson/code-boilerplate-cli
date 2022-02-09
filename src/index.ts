#!/usr/bin/env node
const inquirer = require("inquirer");
const path = require('path');
const { writeFile, readdir, readFile } = require("fs").promises;

const configFiles : any = {};
const configFolderPath = path.resolve(__dirname, "config")

(async () => {
    const files = await readdir(configFolderPath).catch(console.log)

    for (let i of files) {
        const fileType = i.split("."[1])
        configFiles[fileType] = path.join(configFolderPath, i);
    }

    const { file } = await inquirer.prompt([
        {
            type: "list",
            message: "What Code Boilerplate do you want to generate?",
            name: "file",
            choices: Object.keys(configFiles),
        }
    ]);

    var config = await readFile(configFiles[file].catch(console.log));
})