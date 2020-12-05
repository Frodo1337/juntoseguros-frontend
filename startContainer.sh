#!/bin/sh

docker build . -t frodo1337/juntoseguros-frontend
docker run -d -p 3000:3000 frodo1337/juntoseguros-frontend
