## Docker Introduction

Docker Image: It’s a lightweight, standalone, and executable package that includes everything needed to run the software (code, runtime, system libraries, and settings).

In our case, the node:16 image is an official Node.js base image that already has Node.js installed.
Dockerfile: It contains instructions to define how the Docker image should be built. We defined the base image (node:16), set the working directory, copied necessary files, installed dependencies, and specified the command to run the app.

Docker Container: This is a running instance of the image. When you run docker run, it creates a container from the image and starts the app.

Port Mapping: docker run -p 3000:3000 allows you to map the container’s internal port (3000) to your local machine’s port 3000, so you can access the app in a browser.

## Docker Build Command

```
docker build -t node-docker-demo .

```

## Run the Docker Container

The -p 3000:3000 flag tells Docker to map port 3000 from the container to port 3000 on your local machine.

```
docker run -p 3000:3000 node-docker-demo

```
