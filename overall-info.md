# **The following commands tested on Ubuntu 18.04**
# Helping links for Nginx
- [cheat sheet](https://github.com/SimulatedGREG/nginx-cheatsheet)
- [Nginx Cheat Sheet(Gist)](https://gist.github.com/carlessanagustin/9509d0d31414804da03b)
# controlling nginx
- check nginx status
  1) `sudo service nginx status`
  2) `sudo systemctl status nginx.service`
- start nginx
    1) `sudo service nginx status`
    2) `sudo systemctl start nginx.service`
- reload nginx (use anyone from below)
    1) `sudo systemctl reload nginx.service`
    2) `sudo service nginx reload`
    3) `sudo nginx -s reload`

N.B: After nginx start, we can send signal using command `nginx -s signal` where signal cal be one of 
  - `stop` — fast shutdown
  - `quit` — graceful shutdown
  - `reload` — reloading the configuration file
  - `reopen` — reopening the log files