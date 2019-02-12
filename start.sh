#!/bin/sh

docker rm -f website-http
docker run --name website-http -p 80:80 -d website:latest
