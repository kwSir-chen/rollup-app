const isArgv = JSON.parse(process.env.npm_config_argv).original.filter(item => item.includes('--'))

let argvConfig = {
    project: '',
    port: '3010'
}
// 简写隐射
const keyMap = {
    'p': 'project',
}

// npm run dev --c=quda --plat=h5 --l=false
isArgv.forEach(element => {
    let keyArr = element.replace('--', '').split('=')
    let [key, value = true] = keyArr
    //
    argvConfig[keyMap[key] || key] = value
})

if (!argvConfig['project']) {
    throw 'project不能为空 请在命令后面加上 --project=your project dirname'
}

export default argvConfig