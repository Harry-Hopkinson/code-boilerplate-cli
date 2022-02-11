#!/usr/bin/env node
"use strict";
const inquirer = require("inquirer");
const path = require('path');
const { writeFile, readdir, readFile } = require("fs").promises;
const configFiles = {};
const configFolderPath = path.resolve(__dirname, 'config');
(async () => {
    const files = await readdir(configFolderPath).catch(console.log);
    for (let i of files) {
        const frameworkName = i.split('.')[1];
        configFiles[frameworkName] = path.join(configFolderPath, i);
    }
    const { language } = await inquirer.prompt([
        {
            type: "list",
            message: "Which Language do you want to use:",
            name: "language",
            choices: Object.keys(configFiles),
        }
    ]);
    switch (language) {
        case "c":
            let config = await readFile(configFiles[language]).catch(console.log);
            const filePath = path.join(process.cwd(), 'c.c');
            await writeFile(filePath, config.toString()).catch((err) => {
                console.log(err);
                process.exit();
            });
    }
    console.log("Code Boilerplate generated for the ", language, " language");
})();
