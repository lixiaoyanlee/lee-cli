// 作者: lixiaoyan

// config所有命令的逻辑
/***、
 * 主要功能是：配置文件的读写操作，如果配置文件不再，需要提供默认的值
 * 本项目实现了 可以配置调用gitHub上哪个组织或者用户来下载
 *'lee-cli config set <k> <v>',
 'lee-cli config get <k>'
 */

const program = require('commander');
const {
  configFile,
  defaultConfig
} = require('./utils/constants');
const fs = require('fs');
const { encode,decode} = require('ini');
const chalk = require('chalk');

module.exports = (action,k,v) => {
  if (!action) {
    program.help();
    return;
  }
  const haveConfigFile = fs.existsSync(configFile); //配置文件是否存在
  const obj = {};
  if (haveConfigFile) {
    const content = fs.readFileSync(configFile,'utf-8');
    const c = decode(content); //将文件内容解析成对象
    Object.assign(obj,c);
  }
  const flag = obj.v || (defaultConfig[k] == k);
  if(action === 'get'){
    if (flag) {
      console.log(obj.v || defaultConfig.v);
    }else{
      console.log(`没有此项，您可能是想输入为 ${chalk.green('lee-cli config get <k>')}命令，\n比如:  ${chalk.green('lee-cli config get org')}`);
    }   
  } else if(action === 'set'){
    if( k || v){
      obj.k = 'k';
      obj.v = v;
      fs.writeFileSync(configFile, encode(obj));
    }else{
      console.log(`没有此项，您可能是想输入为 ${chalk.green('lee-cli config set <k> <v></v>')}命令，\n比如:  ${chalk.green('lee-cli config set org lxy-cli')}`);
    }
 
  }else if(action ==='getVal'){
    let c = {} ;
    if(obj && Object.keys(obj).length>0){
      c = Object.assign({}, obj);
    }else{
      c = Object.assign({}, defaultConfig);
    }
    return c;
  }

}