const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');
const pem_path = '/home/sumon/moneyking.pem';
const build_path = path.join(__dirname, 'build');
const build_zip_name = 'build.zip';
const build_zip_path = path.join(__dirname, build_zip_name);
const dest_path = '/';
// guird clause
if(!fs.existsSync(build_path)){
  error_msg('--- passing build path ' + build_path + ' is not exist');
  process.exit(1);
}

//TODO: need to check build folder first
exec('zip -r build.zip ' + build_path, (err, stdout, stderr) => {
  if(err){
    error_msg('--zipping build folder is failed ' + err);
    process.exit(1);
  }

  succ_msg('zipping build folder is success');
  upload_file(pem_path, build_zip_path, dest_path, () => { info_msg('uploaded') });
});

// upload file to server
function upload_file(pem_path, target_path, des_path, call_back){
  if(fs.existsSync(pem_path) && fs.existsSync(target_path)){
    info_msg('----pem and targe path exist, now upload');
    call_back();
    // exec('scp -i ' + pem_path + ' ')
  }else{
    error_msg('pem file or target is missing');
  }
}

// printing color text, default is green
function colorized(msg, color = "\x1b[32m"){
  console.log(color, msg);  //cyan color + msg;
}

function error_msg(msg){
  colorized(msg, "\x1b[31m");
}

function succ_msg(msg){
  colorized(msg);
}

function info_msg(msg){
  colorized(msg, '\x1b[33m');
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