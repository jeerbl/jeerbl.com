docker build -t build -f Dockerfile.build .
docker create --name build-container build

rm -rf ./build
mkdir build

docker cp build-container:/jeerbl.com/dist/. ./build

docker rm -f build-container
docker rmi build
