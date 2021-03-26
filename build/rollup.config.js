import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import htmlTemplate from 'rollup-plugin-generate-html-template';
import copy from "rollup-plugin-copy-assets";

import argvConfig from "./argv"

const {project} = argvConfig

// 配置文件一般形式如下：
export default {
  input: `project/${project}/js/canvas.js`,
  output: {
    file: `dist/${project}/js/bundle.js`,
    format: 'umd', // amd、cjs、es、iife、umd
  },
  plugins: [
    htmlTemplate({
      template: `project/${project}/index.html`,
      target: `dist/${project}/index.html`,
      replaceVars: {
          // '__STYLE_URL__': `BulletJs.esm.js`
      }
    }),
    babel({
        extensions: ['.js','.jsx','.es6','.es','.mjs'],  // 默认值
        exclude: 'node_modules/**',
        include:[],
    }),
    postcss({
        plugins: []
    }),
    copy({
      assets: [
        // You can include directories
        `../assets`,
        // You can also include files
        `dist/${project}/assets`,
      ],
    }),
  ]
}
