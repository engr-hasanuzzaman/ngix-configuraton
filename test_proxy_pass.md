```nginx
server {
  listen 8080;

  location /search {
    proxy_pass http://localhost:5000;
  }
}
```