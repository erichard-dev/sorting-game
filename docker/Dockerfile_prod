FROM python:3

RUN pip3 install flask

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT ["python"]
CMD ["app.py"]