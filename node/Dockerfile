FROM node:20-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

CMD ["/bin/sh", "-c", "set -e && npm run install"]
