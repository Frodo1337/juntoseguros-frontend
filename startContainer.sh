#!/bin/sh

docker build . -t frontend
docker run -d -p 3000:3000 frontend
