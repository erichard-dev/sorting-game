docker build --tag draganddrop:1.0 .
docker run --publish 8000:8000 -d draganddrop:1.0
