# Image to base our build from
FROM node:9.10

# Working directory inside the container
WORKDIR /app

RUN npm install -g nodemon

# set environment variables
# ENV PORT=8181
# Download project dependencies and copy project files over to
# the container
# COPY package.json /app

# RUN npm install

# COPY . /app

CMD node app.js

# Open port 5000 on the container, so that it can be accessed via a proxy
EXPOSE $PORT
