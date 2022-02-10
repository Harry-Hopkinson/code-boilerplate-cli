#!/usr/bin/env node
const inquirer = require("inquirer");
const path = require('path');
const { writeFile, readdir, readFile } = require("fs").promises;
const fs = require("fs");

const configFiles : any = {};
const configFolderPath = path.resolve(__dirname, "config")

const files = readdir(configFolderPath).catch(console.log);
for (var i of files) {
    const fileName = i.split(".")[1];
    configFiles[fileName] = path.join(configFolderPath, i);
}

const { file } =  inquirer.prompt([
    {
        type: "list",
        message: "What Code Boilerplate do you want to generate?",
        name: "file",
        choices: Object.keys(configFiles),
    }
]);

switch (file) {
    case "C":
        const cDefaultConfigFile = fs.readFileSync(`${__dirname}/config/c.c`, "utf8");
        const cUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        cUpdateConfigFile(file);
        break;
    case "C++":
        const cppDefaultConfigFile = fs.readFileSync(`${__dirname}/config/cpp.cpp`, "utf8");
        const cppUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        cppUpdateConfigFile(file);
        break;
    case "Java":
        const javaDefaultConfigFile = fs.readFileSync(`${__dirname}/config/java.java`, "utf8");
        const javaUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        javaUpdateConfigFile(file);
        break;
    case "C#":
        const csharpDefaultConfigFile = fs.readFileSync(`${__dirname}/config/csharp.cs`, "utf8");
        const csharpUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        csharpUpdateConfigFile(file);
        break;
    case "Python":
        const pythonDefaultConfigFile = fs.readFileSync(`${__dirname}/config/python.py`, "utf8");
        const pythonUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        pythonUpdateConfigFile(file);
        break;
    case "Golang":
        const golangDefaultConfigFile = fs.readFileSync(`${__dirname}/config/golang.go`, "utf8");
        const golangUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        golangUpdateConfigFile(file);
        break;
    case "HTML":
        const htmlDefaultConfigFile = fs.readFileSync(`${__dirname}/config/html.html`, "utf8");
        const htmlUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        htmlUpdateConfigFile(file);
        break;
    case "JavaScript":
        const jsDefaultConfigFile = fs.readFileSync(`${__dirname}/config/javascript.js`, "utf8");
        const jsUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        jsUpdateConfigFile(file);
        break;
    case "TypeScript":
        const tsDefaultConfigFile = fs.readFileSync(`${__dirname}/config/typescript.ts`, "utf8");
        const tsUpdateConfigFile : any = async (fileName: string) => {
            const configFile = await readFile(configFiles[fileName], "utf8");
            const newConfigFile = configFile.replace(/\{\{fileName\}\}/g, fileName);
            await writeFile(fileName, newConfigFile);
        }
        tsUpdateConfigFile(file);
        break;
}