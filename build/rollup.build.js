import {terser} from 'rollup-plugin-terser';

import config from './rollup.config'

const devConfig = {
    ...config,
    plugins: [
        ...config.plugins,
        terser({
            output: {
            //   ascii_only: true // 仅输出ascii字符
            },
            compress: {
            pure_funcs: ['console.log'] // 去掉console.log函数
            }
        })
    ]
}
// 配置文件一般形式如下：
module.exports = devConfig