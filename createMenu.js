const path = require('path');
const glob = require('glob');
const fs = require('fs');

function getDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .map((file) => fs.statSync(path.join(srcpath, file)).isDirectory() && file);
}

//Create an array of files by folder within pages
const directories = getDirectories('./pages');

// Get folder names and recursively put folders into an array of files by folder

// const folders = directories.map(folder => {
//   return {[folder]: glob.sync(`./pages/${folder}/**/*.mdx`)};
// });

// markdown pattern
const MARKDOWN_PATTERN = '**/*.mdx';

//Find all md files within a project and ignore node_modules
const files = glob.sync(MARKDOWN_PATTERN, {
  cwd: path.resolve(__dirname + '/pages/blogs'),
  ignore: 'node_modules/**',
  realpath: true,
  noDir: true,
});

console.log(files);
const data = {
  menu: [],
};
files.forEach((file) => {
  const result = file
    .replace(__dirname + '/pages/blogs', '')
    .split('/')
    .filter((el) => el);
  const name = result[1];
  const directory = result[0];
  if (result.length > 1 && directory) {
    data[directory] = data[directory] || [];
    data[directory].push(name);
    console.log('result', result);
    console.log('directory', directory);
  }
  // console.log('file', file.replace(__dirname+'/pages/blogs', ''));
  // data.menu.push(file.replace(__dirname+'/pages/blogs', ''))
});

JSON.stringify(data);
fs.writeFileSync('menu.json', JSON.stringify(data));

console.log('directories', directories);
// console.log('folders', folders)
