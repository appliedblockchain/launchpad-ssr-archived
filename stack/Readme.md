todo: add nginx basic auth container

extra vhost rules:

```
location /health/ {
    auth_basic off;
}
location /api/health/ {
    auth_basic off;
}
```
