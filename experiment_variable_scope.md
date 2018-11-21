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

# parsing argument using $arg_XXX variable
```nginx
server {
  listen 8080;

  location /search {
    add_header X-name $arg_name always;
    add_header X-age $arg_age always;
    add_header X-foo foo;
  }
}
```