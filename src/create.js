// create命令的所有逻辑 
// create的功能是 创建项目
// 作者: lixiaoyan


const inquirer = require('inquirer');
const {
    fnLoadingByOra,
    fetchReopLists,
    getTagLists,
    downDir,
    copyTempToLoclhost,
    getChoiceContent,
    mapRepoInfo
} = require('./utils/common');
const program = require('commander');

module.exports =  async (projectName) => {
    if (!projectName) {
        program.help();
        return;
    } 
   const repo = await getChoiceContent(fetchReopLists, mapRepoInfo.repos.mess,mapRepoInfo.repos.promptObj);
   if (!repo) {
        return;
   }
    const tag = await getChoiceContent(getTagLists, mapRepoInfo.tags.mess, mapRepoInfo.tags.promptObj,repo);
    if (!tag) {
        return;
    }
   

    // 下载项目到临时文件夹 C:\Users\lee\.myTemplate
    const {dest,filePath} = await fnLoadingByOra(downDir, '下载项目中...')(repo, tag);
    copyTempToLoclhost(filePath, projectName);
    // const result = await fnLoadingByOra(copyTempToLoclhost, '复制项目到当前工作目录...')(filePath, projectName);

}