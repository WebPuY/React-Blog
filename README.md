## React + Express+Mongodb实现个人博客

##### this is a test of branch pull request

##### node.js不支持es6的import语法。新建.babelrc文件，

````
{
  "presets": ["es2015","react","stage-0"],
  "plugins": ["react-hot-loader/babel",["import", { "libraryName": "antd", "style": true }],"transform-runtime","transform-class-properties"]
}
````