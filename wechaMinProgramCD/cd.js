
const inquirer = require("inquirer");
const ci = require('miniprogram-ci');
const upload = async (version, desc) => {
const project = new ci.Project({
    appid: 'wxd2984809fc4c86c2',
    type: 'miniProgram',
    projectPath: '../myApp/dist',
    privateKeyPath: './private.wxd2984809fc4c86c2.key',
    ignores: ['node_modules/**/*'],
})
console.log('kaishi 1')
const uploadResult = await ci.upload({
    project,
    version: version,
    desc: desc,
    setting: {
    es6: true,
    },
    onProgressUpdate: console.log,
})
console.log(uploadResult)
};
const  init = async () => {
    let result = await inquirer.prompt([
        {
            type: 'list',
            message: '请选择服务:',
            name: 'server',
            default: 'upload',
            choices:[
                "upload",
                "view",
            ],
        },
        {
            type: 'input',
            message: '请输入版本号',
            name: 'version',
            validate: (val) => {
                if (val.length != 0) {
                    return true;
                }
                return '请输入版本号';
            },
        },
        {
            type: 'input',
            message: '请输入版本描述',
            name: 'versionDesc',
            validate: (val) => {
                if (val.length === 0) {
                    return '请输入版本描述'
                }
                return  true;
            },
        },
    ]);
    console.log(result);
    if (result.server === 'upload') {
        upload(result.version, result.versionDesc);
    }
};
init();
