# simpel nginx server that write custom header on response

```lua
server {
  listen 8080;

  location /test {
    set $msg "hello nginx";
    add_header test $msg always;
  }
```