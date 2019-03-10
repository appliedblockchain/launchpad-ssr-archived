FROM node:10.15-alpine as builder

RUN apk add --update --no-cache alpine-sdk git python && \
  rm -rf /tmp/* /var/cache/apk/*

RUN npm i -g yarn

WORKDIR /api

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

COPY ./package* /api/
COPY ./yarn.lock /api/
COPY ./.eslintrc.json /api/
# RUN npm install --only=production
RUN yarn install --production

COPY ./ /api
COPY ./.eslintignore /api

RUN yarn run build

# stage 2
FROM node:10.15-alpine

RUN apk --update --no-cache add alpine-sdk git python openssl curl bash redis && \
  rm -rf /tmp/* /var/cache/apk/*

COPY --from=builder /api /api

WORKDIR /api

# TODO: check if we need this
# RUN cd /api && npm install --only=production
# RUN cd /contracts && npm install --only=production

COPY ./.git/refs/heads/* ./
COPY ./.git/HEAD .

EXPOSE 3000

CMD yarn run start:prod
