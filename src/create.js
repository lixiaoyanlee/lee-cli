// create命令的所有逻辑 
// create的功能是 创建项目
// 作者: lixiaoyan


const inquirer = require('inquirer');
const {
    fnLoadingByOra,
    fetchReopLists,
    getTagLists,
    downDir,
    copyTempToLoclhost
} = require('./utils/common');
const fs = require('fs');
const fse = require('fs-extra');

module.exports =  async (projectName) => {
    let repos = await fnLoadingByOra(fetchReopLists, '正在链接你的仓库...')();
    repos = repos.map((item) => item.name);
 
    // 使用inquirer 在命令行中可以交互
    const { repo} = await inquirer.prompt([
        {
            type: 'list',
            name:'repo',
            message:'请选择一个你要创建的项目',
            choices: repos
        }
    ]);

    let tags = await fnLoadingByOra(getTagLists, `正在链接你的选择的仓库${repo}的版本号...`)(repo);
    tags = tags.map((item) => item.name);
    const { tag } = await inquirer.prompt([{
        type: 'list',
        name: 'tag',
        message: '请选择一个该项目的版本下载',
        choices: tags
    }]);

    // 下载项目到临时文件夹 C:\Users\lee\.myTemplate
    const {dest,filePath} = await fnLoadingByOra(downDir, '下载项目中...')(repo, tag);
// setTimeout(() => {
//     fse.remove(`${target}#${tag}`);
// }, 1000);
   copyTempToLoclhost(filePath, projectName);
    // const result = await fnLoadingByOra(copyTempToLoclhost, '复制项目到当前工作目录...')(filePath, projectName);
 

}