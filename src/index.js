const inquirer = require("inquirer");
const path = require("path");
const { writeFile, readdir, readFile } = require("fs").promises;
const configFiles = {};
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
		await writeFile(cFolderPath, cConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "cc") {
		let cppConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const cppFolderPath = path.join(process.cwd(), "c++.cc");
		await writeFile(cppFolderPath, cppConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "cs") {
		let csConfig = await readFile(configFiles[language]).catch(console.log);
		const csFolderPath = path.join(process.cwd(), "c#.cs");
		await writeFile(csFolderPath, csConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "go") {
		let goConfig = await readFile(configFiles[language]).catch(console.log);
		const goFolderPath = path.join(process.cwd(), "golang.go");
		await writeFile(goFolderPath, goConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "html") {
		let htmlConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const htmlFolderPath = path.join(process.cwd(), "html.html");
		await writeFile(htmlFolderPath, htmlConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "java") {
		let javaConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const javaFolderPath = path.join(process.cwd(), "java.java");
		await writeFile(javaFolderPath, javaConfig.toString()).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "js") {
		let javaScriptConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const javaScriptFolderPath = path.join(process.cwd(), "javascript.js");
		await writeFile(
			javaScriptFolderPath,
			javaScriptConfig.toString()
		).catch((err) => {
			console.log(err);
			process.exit();
		});
	} else if (language == "py") {
		let pythonConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const pythonFolderPath = path.join(process.cwd(), "python.py");
		await writeFile(pythonFolderPath, pythonConfig.toString()).catch(
			(err) => {
				console.log(err);
				process.exit();
			}
		);
	} else if (language == "ts") {
		let typescriptConfig = await readFile(configFiles[language]).catch(
			console.log
		);
		const typescriptFolderPath = path.join(process.cwd(), "typescript.ts");
		await writeFile(
			typescriptFolderPath,
			typescriptConfig.toString()
		).catch((err) => {
			console.log(err);
			process.exit();
		});
	}
	console.log("Code Boilerplate generated for the ", language, " language");
})();
