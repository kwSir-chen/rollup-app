import serve        from 'rollup-plugin-serve';
import liveload from 'rollup-plugin-livereload';
import config from './rollup.config'
import argvConfig from "./argv"

const {port,project} = argvConfig

const devConfig = {
    ...config,
    plugins: [
        ...config.plugins,
        serve({
            // host: '127.0.0.1',
            openPage: `/project/${project}/index.html`,
            contentBase: "",
            port,
            // 不打开浏览器
            open: false,
        }),
        // liveload(),
        // 只监听dist文件夹中的变化，有变化就刷新页面。配合rollup的-w
        liveload({
            watch:['dist']
        })
    ]
}
// 配置文件一般形式如下：
module.exports = devConfig
