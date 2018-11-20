# simpel nginx server that write custom header on response

```lua
server {
  listen 8080;

  location /test {
    set $msg "hello nginx";
    add_header test $msg always;
  }
```
Notes:
- Defaultly add_header only work with successful request like 200-300 range but with `always` it ensure `add_header` always work
- `set` directive uesed for declare and assign value to variable
- nginx variable declaretion perform during loading but assige value on `request time`
- variable declaretion is on global scope that means we can access variable outside of declared scope but scope of variable is local
