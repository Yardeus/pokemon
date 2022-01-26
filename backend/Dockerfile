FROM node:14.15.1-alpine

WORKDIR /backend



EXPOSE 1337

COPY package.json ./
RUN yarn install
COPY . ./
CMD yarn develop
