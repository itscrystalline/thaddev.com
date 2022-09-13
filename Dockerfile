# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /thaddev.com
WORKDIR /thaddev.com

# copy source files
COPY . /thaddev.com

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start