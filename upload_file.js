const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');
console.log(colorized('this is default color'));  //cyan
console.log('\x1b[33m%s\x1b[0m', 'this is yellow');  //yellow
const build_path = path.join(__dirname, 'build');
if(!fs.existsSync(build_path + 'adfasdfa')){
  console.log('--------path ' + build_path + ' does not exist');
  process.exit(1);
}
//TODO: need to check build folder first
exec('zip -r build.zip ' + build_path, (err, stdout, stderr) => {
  if(err){
    console.log('--zipping build folder is failed', err);
    process.exit(1);
  }
  console.log('-- zipping build folder is success');
});

// upload file to server
function upload_file(pem_path, target_path, des_path, call_back){
  
}

// printing color text, default is green
function colorized(msg, color = "\x1b[32m"){
  return color + msg;
}

function error_msg(msg){
  return colorized(msg, "\x1b[31m");
}

function succ_msg(msg){
  ruturn colorized(msg);
}

/*
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m
*/