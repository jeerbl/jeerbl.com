#!/bin/sh

sudo certbot renew --pre-hook "docker kill website-http" --post-hook "docker start website-http"
