FROM kyma/docker-nginx
COPY build/ /var/www
COPY nginx.conf /etc/nginx/sites-enabled/default
CMD 'nginx'
