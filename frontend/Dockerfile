FROM node:14.15.1-alpine

COPY . .

WORKDIR .

EXPOSE 8001


RUN npm install
RUN npm install -g gatsby-cli
RUN gatsby build

CMD gatsby serve --port 8001 --host 0.0.0.0
