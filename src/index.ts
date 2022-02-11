#!/usr/bin/env node
const inquirer = require("inquirer");
const path = require("path");
const { writeFile, readdir, readFile } = require("fs").promises;

const configFiles: any = {};
const configFolderPath = path.resolve(__dirname, "config");

(async () => {
    const files = await readdir(configFolderPath).catch(console.log);

    for (let i of files) {
        const languageName = i.split(".")[1];
        configFiles[languageName] = path.join(configFolderPath, i);
    }

    const { language } = await inquirer.prompt([
        {
            type: "list",
            message: "Which Language do you want to use:",
            name: "language",
            choices: Object.keys(configFiles),
        },
    ]);

    if (language == "c") {
        let cConfig = await readFile(configFiles[language]).catch(console.log);
        const cFolderPath = path.join(process.cwd(), "c.c");
        await writeFile(cFolderPath, cConfig.toString()).catch((err: any) => {
            console.log(err);
            process.exit();
        });
    } else if (language == "cc") {
        let cppConfig = await readFile(configFiles[language]).catch(
            console.log
        );
        const cppFolderPath = path.join(process.cwd(), "cpp.cc");
        await writeFile(cppFolderPath, cppConfig.toString()).catch(
            (err: any) => {
                console.log(err);
                process.exit();
            }
        );
    }
    console.log("Code Boilerplate generated for the ", language, " language");
})();
