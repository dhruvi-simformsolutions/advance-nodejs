## Redis Intro

```
Redis is in-memory database, so it is very fast and can be used for caching purpose. It is a key-value database, so we can store any type of value
```

```
Blocking mode in Redis refers to the behavior of certain commands that pause execution and wait for specific conditions to be met before returning a result. This is particularly useful in scenarios where you want to wait for data to be available instead of polling repeatedly.
```

## Run Redis Application Command

docker run --name redis -p 6379:6379 -d redis

docker image:
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

```
best practices to store key value pair in redis:
key should be in format <entity>:<id>
```
