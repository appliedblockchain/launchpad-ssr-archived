FROM node:10.15-alpine as builder

RUN apk add --update --no-cache alpine-sdk git python openssl curl bash redis && \
  rm -rf /tmp/* /var/cache/apk/*

WORKDIR /api

COPY ./package* /api/

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc && \
  npm i && rm ~/.npmrc

ARG DB_HOST
ARG PORT

COPY ./ /api
COPY ./.eslint* /api/
COPY ./.git/refs/heads/* ./
COPY ./.git/HEAD .

RUN npm run build

EXPOSE 80

CMD  DB_HOST=postgres bash src/bin/tcpWaitFor.sh $DB_HOST 5432 &&  npm run db:migrate && npm run start:prod
