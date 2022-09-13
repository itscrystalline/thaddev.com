# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /thaddev.com
WORKDIR /thaddev.com

ARG GITHUB_ACCESS_TOKEN
# copy source files
COPY . /thaddev.com
# install dependencies
RUN npm install

RUN touch .env
RUN echo "GITHUB_ACCESS_TOKEN=$GITHUB_ACCESS_TOKEN" >> .env

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start