```nginx
server {
  listen 8080;

  location /test {
    set $msg "hello nginx";
    add_header test $msg always;
    return 302 /foo;
  }

  location /foo {
    add_header foo $msg always;
  }
}

```
- this will perfomr http redirect