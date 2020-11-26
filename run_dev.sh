docker run --rm -p 5000:5000 --env FLASK_ENV=development --mount type=bind,source="$(pwd)",target=/usr/src/app draganddropdev:1.0
