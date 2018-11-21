# `$uri`
- contain encoded requested url without query parameters

# `$ruquest_uri`
- contain raw request with query parameters

```nginx
server {
  listen 8080;

  location /serarch {
    add_header x-uri $uri always
    add_header x-request_uri $request_uri always
  }
}
```