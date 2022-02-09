#!/usr/bin/env node
const inquirer = require("inquirer");
const path = require('path');
const { writeFile, readdir, readFile } = require("fs").promises;

const configFiles = {};
const configFolderPath = path.resolve(__dirname, "config")

(async () => {
    const files = await readdir(configFolderPath).catch(console.log)

    for (let i of files) {
        const frameWorkName
    }
})