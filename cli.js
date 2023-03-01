#!/usr/bin/env node
const fse = require("fs-extra");
const fs = require("fs");
const glob = require("glob").default;
const path = require("path");
const argv = process.argv[2]
const targetDir = argv || "./";
const templateDir = path.join(__dirname, "template-rettle-app");
const outputDir =  path.join("./", targetDir);

const renameFiles = {
  "_gitignore": ".gitignore"
}

const init = () => {
  return new Promise(resolve => {
    if (outputDir !== "./") {
      fse.mkdirp(outputDir)
    };
    fse.copySync(templateDir, path.join("./", targetDir));
    Object.keys(renameFiles).map(key => {
      const files = glob.globSync(path.join(outputDir, `/**/`, key), {
        nodir: true,
      })
      for (const file of files) {
        fs.renameSync(file, file.replace(key, renameFiles[key]))
      }
    })
    resolve();
  })
}

const cyan = (str) => {
  return `\u001b[34m${str}\u001b[0m`
}

init().then(() => {
  console.log(cyan(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  (MMMMMMMMMMMMMMMM`))
  console.log(cyan(`  .ggg., .WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMHMMMMMMM  (MMMMMMMMMMMMMMMM`))
  console.log(cyan(`  (MMMMM]  MMMMMMMMMMMMMMMMMMMMM  (MMMMMM{ .MMMMMMM  (MMMMMMMMMMMMMMMM`))
  console.log(cyan(`  (MMMMM3 .MMMMMMM"^....7TMMMMF7  ?77MM#7' .77MMMMM  (MMMMMMM"^...,TMM`))
  console.log(cyan(`  -"""^..dMMMMMM#\` (MMMMp (MMMMM  MMMMMMMF .MMMMMMM  (MMMMMF .dMMMN, v`))
  console.log(cyan(`  -N, .MMMMMMMMM{ .""""""  MMMMM  MMMMMMMF dMMMMMMM  (MMMMM\` ,"""""=`))
  console.log(cyan(`  (MMb  ?MMMMMMM: .MMMMMMMMMMMMM  MMMMMMM: dMMMMMMM  (MMMM#  dMMMMMMMM`))
  console.log(cyan(`  (MMMM,  TMMMMMb  TMMMMMMMMMMMM  MMMMMMM! dMMMMMMM  (MMMMM, .MMMMMMMM`))
  console.log(cyan(` .-MMMMMN..,WMMMMN,..7""~.JMMMMMx ,""MMMMh. ""WMMMM .(MMMMMMN,..7"7~.M`));
  console.log( `\nThanks for using Rettle. `)
  console.log(`Rettle App was created in ${outputDir}.`);
});