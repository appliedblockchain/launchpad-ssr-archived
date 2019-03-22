# Base SSR App

### Install

    npm i

### Database and Parity

You can use local postgres and parity-solo-instant or use the provided docker container, just run this:

    npm run dev-stack

### Prepare and Seed Database

    npm run db:migrate

### Run

    npm start


Visit http://localhost:3000


## Project Details

### Idea behind the example

This is a basic, bare-bones example of how to use SSR with React.

The aim is to create a simple starter project (similar to launchpad) to do demo-projects with.

We are using postgres but we want to load all the data in database at each server request. We assume this will take few hundreds ms max. If we plan to add pagination, roles, proper auth, build an API, build a clientside or react-native app, we should "`eject`" from this repo.

#### Technologies used

- Server Side Rendering
- HTML (React) and CSS first
- After.js (SSR "setup")
- Razzle (based on after.js - project setup, similar to create-react-app, webpack presets, CLI tools and plugins which render practically any template - and has a lot of plugins/sample setup: vue, inferno, angular, koa, now, firebase functions, hyperapp + jest test setup)
- Webpack (imho not ideal, but "hidden" inside Razzle)
- Postgres
- Knex
- Docker
- Docker Compose
- Docker Swarm
