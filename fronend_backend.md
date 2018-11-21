# nginx configuration for serving separate frontend and backend api
upstream back-end {
  server 127.0.0.1:5000;
}

server {
  listen 80;
  server_name mmoneyking.com;

  location /api {
    proxy_pass  http://back-end;
  }

  location / {
    root /home/sumon/apps/moneyking/frontend;
  }
}