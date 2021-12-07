const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'
// __dirname是当前模块的目录名，/Users/dan.ye/Desktop/MyExercise/my-exercise/scripts
// path.resolve()从右到左处理，构建的绝对路径为根目录
const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

module.exports = {
  isDev,
  PROJECT_PATH,
  PROJECT_NAME,
}
