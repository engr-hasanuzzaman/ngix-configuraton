const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');

// ssh related info
const pem_path = '/home/sumon/moneyking.pem';
const ssh_user = 'ubuntu@ec2-13-251-130-124.ap-southeast-1.compute.amazonaws.com';
const ssh_access_cmd = 'ssh -i ' + pem_path + ' ' + ssh_user;
// build related info
const build_path = path.join(__dirname, 'build');
const build_zip_name = 'build.zip';
const build_zip_path = path.join(__dirname, build_zip_name);
const dest_path = '/var/www/html/moneyking';
// guird clause
if (!fs.existsSync(build_path)) {
    error_msg('--- passing build path ' + build_path + ' is not exist');
    process.exit(1);
}

//TODO: need to check build folder first
exec('tar -czvf build.tar.gz ' + build_path, (err, stdout, stderr) => {
    if (err) {
        error_msg('--zipping build folder is failed ' + err);
        process.exit(1);
    }

    succ_msg('zipping build folder is success');
    upload_file(pem_path, build_zip_path, dest_path, () => { info_msg('uploaded') });
});

// upload file to server
function upload_file(pem_path, target_path, des_path, call_back) {
    if (fs.existsSync(pem_path) && fs.existsSync(target_path)) {
        info_msg('----pem and targe path exist, now upload');
        let host_path = ssh_user + ':' + des_path;
        let ssh_cmd = ssh_access_cmd + ' cd /var/www/html/moneyking | unzip -o build.zip';
        let ssh_mv = ssh_access_cmd + ' mv /var/www/html/frontend/build/* /var/www/html/frontend';

        // scp build.zip to server
        info_msg('uploading build.zip to server');
        exec('scp -i ' + pem_path + ' ' + target_path + ' ' + host_path, (err, stdout, stderr) => {
                if (err) {
                    error_msg('--upload file with scp fail ' + err);
                    process.exit(1)
                }

                info_msg('unzip build.zip to frontend');
                exec(ssh_cmd, (err, stdout, stderr) => {
                    if (err) {
                        error_msg('unzipping build.zip to server fail', err);
                        process.exit(1);
                    }
                    succ_msg('unzip success');
                    info_msg('move all files to frontend folder in server');
                    exec(ssh_mv, (err, stdout, stderr) => {
                        if (err) {
                            error_msg('could not move files to frontend folder ', err);
                        }
                        succ_msg('move all the files from frontend/build to frontend');
                    })
                })
                info_msg('-- ssh_cmd is' + ssh_cmd);
                info_msg('-- ssh_mv is' + ssh_mv);
                call_back();
            })
            // exec('scp -i ' + pem_path + ' ')
    } else {
        error_msg('pem file or target is missing');
    }
}

// printing color text, default is green
function colorized(msg, color = "\x1b[32m") {
    console.log(color, msg); //cyan color + msg;
}

function error_msg(msg) {
    colorized(msg, "\x1b[31m");
}

function succ_msg(msg) {
    colorized(msg);
}

function info_msg(msg) {
    colorized(msg, '\x1b[33m');
}