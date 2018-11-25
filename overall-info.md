# controlling nginx
- start nginx
`sudo systemctl start nginx.service`
- reload nginx (use anyone from below)
    1) `sudo systemctl reload nginx.service`
    2) `sudo nginx -s reload`
N.B: After nginx start we can send signal using command `nginx -s signal` where signal cal be one of 
stop — fast shutdown
quit — graceful shutdown
reload — reloading the configuration file
reopen — reopening the log files

nginx -s signal