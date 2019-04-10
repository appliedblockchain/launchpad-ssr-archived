FROM node:10.15-alpine

RUN apk add --update --no-cache alpine-sdk git python openssl curl bash redis && \
  rm -rf /tmp/* /var/cache/apk/*

WORKDIR /home/node

COPY ./package* ./
COPY ./contracts/package* contracts/

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc && \
  npm i && cd ./contracts && npm i --production && rm ~/.npmrc

ARG DB_HOST
ARG PORT

COPY ./ ./
COPY ./.eslint* ./
COPY ./.git/refs/heads/* ./
COPY ./.git/HEAD ./

RUN npm run build

EXPOSE 80

CMD  DB_HOST=postgres bash src/bin/tcpWaitFor.sh $DB_HOST 5432 &&  npm run db:migrate && bash ./bin/entrypoint.sh
