#!/bin/sh

git clone https://github.com/jeerbl/jeerbl.com.git website
cd website

docker build -t build -f Dockerfile.build .
docker create --name build-container build

docker cp build-container:/jeerbl.com/dist/. ./build

docker rm -f build-container
docker rmi build

docker build -t website .

cd ..
rm -rf website
