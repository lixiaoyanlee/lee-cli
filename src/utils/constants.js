// 作者: lixiaoyan
// 存放用户的所需要的常量
const {
    name,
    version
} = require('../../package.json');

// 下载临时文件存放地址 因为不同的电脑平台临时存放地址不同 
// 这里我们将文件下载到当前用户下的.template文件中，由于系统的不同目录获取方式不一样，
// process.platform 在windows下获取的是 win32 ，
// 我这里是windows 所以获取的值是 win32，再根据对应的环境变量获取到用户目录
const MY_PLATFORM_ENV = process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE'];
const downloadDirectory = `${MY_PLATFORM_ENV}\\.myTempalte`;
const configFile = `${MY_PLATFORM_ENV}\\.lxyrc`;
const apiGitHubReposUrl = 'https://api.github.com/';
// const defaultGitHubReposUrl = ;
// 配置文件不存在时，默认提供的值
// const defaultConfig = {
//     orgs: 'lxy-cli', //默认拉取的组织名
//     users: 'lixiaoyanlee'
// }
const defaultConfig = {
    k: 'orgs',
    v: 'lxy-cli'
}
module.exports = {
    name,
    version,
    downloadDirectory,
    configFile,
    defaultConfig,
    // defaultConfigInfo
};