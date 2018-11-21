upstream back-end {
  server 127.0.0.1:5000;
}

server {
  listen 80;
  server_name mmoneyking.com;

  location /api/ {
    proxy_pass  http://back-end;
  }

  location /admin {
    root /home/sumon/apps/moneyking/frontend;
    index $uri.html admin.html;
    try_files $uri $uri.html;
  }	

  location / {
    root /home/sumon/apps/moneyking/frontend;
  }
}