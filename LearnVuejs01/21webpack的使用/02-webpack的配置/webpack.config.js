const path=require('path')

module.exports = {
    entry:'./src/main.js',//入口
    output: {
        path:path.resolve(__dirname,'dist'),//动态获取绝对路径
        filename:'bundle.js',
    }
}