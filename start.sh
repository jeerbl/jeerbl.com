#!/bin/sh

docker rm -f website-http
docker run --name website-http -p 80:80 -p 443:443 -v /etc/letsencrypt:/certificates -d website:latest
