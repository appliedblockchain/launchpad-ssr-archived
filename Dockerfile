FROM node:10.15-alpine as builder

RUN apk add --update --no-cache alpine-sdk git python && \
  rm -rf /tmp/* /var/cache/apk/*

RUN npm i -g yarn


WORKDIR /api

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

COPY ./.eslint* /api/
COPY ./package* /api/
COPY ./yarn.lock /api/
COPY ./.eslintrc.json /api/
# RUN npm install --only=production
RUN npm install

COPY ./ /api
COPY ./.eslintignore /api

ARG PORT

RUN npm run build

# stage 2
FROM node:10.15-alpine

RUN apk --update --no-cache add alpine-sdk git python openssl curl bash redis && \
  rm -rf /tmp/* /var/cache/apk/*

COPY --from=builder /api/.eslintrc.json /api/
COPY --from=builder /api/package* /api/
COPY --from=builder /api/ /api

WORKDIR /api

COPY ./.git/refs/heads/* ./
COPY ./.git/HEAD .

EXPOSE 80

CMD  DB_HOST=postgres npm run db:rebuild && npm run start:prod
